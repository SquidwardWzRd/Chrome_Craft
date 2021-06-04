import * as THREE from '/node_modules/three/build/three.module.js';
import {perlinNoise} from '/js/perlinNoise.js';


export function terrainGen(scene, x,y,z, texture_path, x_dir, z_dir) {

    // Error Handleing 
    if (x == undefined || y == undefined || z == undefined){
        throw 'X or Y or Z is undefined';
    } else if  (isNaN(x) || isNaN(y) || isNaN(z)){
        throw 'X or Y or Z is not a number';
    }

    var material;

    // Error Handling with texture path
    if (texture_path == undefined){
        material = new THREE.MeshBasicMaterial( { color: 'white', wireframe: true} );
    } else {
        const texture = new THREE.TextureLoader().load( texture_path );
        // Wireframe
        material = new THREE.MeshStandardMaterial( { map: texture, side: THREE.FrontSide} );
    }





    // Set count to volume of chunk
    var count = x*z*y;

    // Make geometry with all sides
    var geometry = new THREE.BoxGeometry(1,1,1);
    var MESH = new THREE.InstancedMesh( geometry, material, count );

    MESH.castShadow = true;
    MESH.receiveShadow = true;
    
    var dummy = new THREE.Object3D();

    var t = 0;

    for (let i=0; i<y; i++){
        for (let c=0; c<z; c++){
            for(let v=0; v<x; v++){
                dummy.translateX(x_dir*v);
                dummy.translateZ(z_dir*c);
                // -h ensures there is more depth to the terrain
                dummy.translateY(Math.round(perlinNoise(v, c,'pog',20,2,15))-i);  //remove 'seed' with a customizable seed

                dummy.updateMatrix();
                MESH.setMatrixAt( t, dummy.matrix );
                dummy.position.set(0,0,0);
                t++;
                
            }
        }
    }
    
    /* for(let i=0; i<MESH.count; i++){
        dummy.position.set(positions[i]);
        dummy.updateMatrix();

        MESH.setMatrixAt( i, dummy.matrix );
    } */


    scene.add(MESH);
}

/* // Translate it
dummy.translateX(-1*i);
dummy.translateZ(k);
// -h ensures there is more depth to the terrain
dummy.translateY(Math.round(perlinNoise(i,k,'seed',10,2,15))-h);  //remove 'seed' with a customizable seed

dummy.updateMatrix();

MESH.setMatrixAt( y, dummy.matrix ); */
