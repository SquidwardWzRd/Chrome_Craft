import * as THREE from '/node_modules/three/build/three.module.js';
import {perlinNoise} from '/js/perlinNoise.js';
import {Block} from '/js/constructor.js';

var fs = require("fs");

export function terrainGen(x,y,z, texture_path, x_dir, z_dir) {

    // Error Handling 
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
        /* texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 2, 2 ); */
        texture.anisotropy = 4;
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

                // Collect JSON object to JS object
                let JS_block = JSON.parse(Block);
                // Make changes if nessecary:
                // ---

                // Append to chunk data file
                fs.readFile('./assets/world data/chunk_data.json', 'utf8', function readFileCallback(err, data){
                    if (err){
                        console.log(err);
                    } else {
                    obj = JSON.parse(data); //now it an object
                    obj.table.push(JS_block); //add some data
                    json = JSON.stringify(obj); //convert it back to json
                    fs.writeFile('./assets/world data/chunk_data.json', json, 'utf8', callback); // write it back 
                }});

                // Reset Dummy Values
                dummy.position.set(0,0,0);
                t++;
                
            }
        }
    }


    return {MESH};
}
