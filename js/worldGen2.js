import * as THREE from '/node_modules/three/build/three.module.js';
import {perlinNoise} from '/js/perlinNoise.js';


export function terrainGen(scene, x,y,z, texture_path) {

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
        material = new THREE.MeshBasicMaterial( { map: texture, wireframe: true, side: THREE.FrontSide} );
    }

    // Set count to volume of chunk
    var count = (x * y * z);

    // Make geometry with all sides
    var geometry = new THREE.BoxGeometry(1,1,1);
    var MESH = new THREE.InstancedMesh( geometry, material, count );
    var dummy = new THREE.Object3D();


    for (let y=0; y<MESH.count; y++){
        // Translate it
        dummy.position.set(dummy.position.x+1, Math.round(perlinNoise(dummy.position.x,dummy.position.z,'seed',10,2,15))-dummy.position.y, -1*dummy.position.z+1);

        dummy.updateMatrix();

        MESH.setMatrixAt( y, dummy.matrix );
    }

    scene.add(MESH);
}

/* // Translate it
dummy.translateX(-1*i);
dummy.translateZ(k);
// -h ensures there is more depth to the terrain
dummy.translateY(Math.round(perlinNoise(i,k,'seed',10,2,15))-h);  //remove 'seed' with a customizable seed

dummy.updateMatrix();

MESH.setMatrixAt( y, dummy.matrix ); */
