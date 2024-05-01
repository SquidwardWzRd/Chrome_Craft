import * as THREE from '/node_modules/three/build/three.module.js';
import { BufferGeometryUtils } from "/node_modules/three/examples/jsm/utils/BufferGeometryUtils.js";
import {perlinNoise} from '/js/perlinNoise.js';

// Instanced Geometry
export function terrainGen(scene, x,y,z, texture_path, x_dir, z_dir) {

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
                dummy.position.set(0,0,0);
                t++;
                
            }
        }
    }


    scene.add(MESH);
}

// Merged Geometry
export function terrainGen2(scene, x, y, z, texture_path, x_dir, z_dir) {
	// Error Handling
	if (x == undefined || y == undefined || z == undefined) {
		throw "X or Y or Z is undefined";
	} else if (isNaN(x) || isNaN(y) || isNaN(z)) {
		throw "X or Y or Z is not a number";
	}

	var material;

	// Error Handling with texture path
	if (texture_path == undefined) {
		material = new THREE.MeshBasicMaterial({
			color: "white",
			wireframe: true,
		});
	} else {
		const texture = new THREE.TextureLoader().load(texture_path);
		/* texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 2, 2 ); */
		texture.anisotropy = 4;
		// Wireframe
		material = new THREE.MeshStandardMaterial({
			map: texture,
			side: THREE.FrontSide,
		});
	}

	// Set count to volume of chunk
	var count = x * z * y;
	var instances = [];

	

	for (let i = 0; i < y; i++) {
		for (let c = 0; c < z; c++) {
			for (let v = 0; v < x; v++) {
				// Make geometry with all sides
				var geometry = new THREE.BoxGeometry(1, 1, 1);
				geometry.translate(x_dir * v, Math.round(perlinNoise(v, c, "pog", 50, 2, 15)) - i, z_dir * c);
				instances.push(geometry);
			}
		}
	}

	// Merge Instance list and add to scene
	/*for(let i = 0; i<instances.length; i++){
        scene.add(instances[i]);
    }*/

	var merged_geometry = BufferGeometryUtils.mergeBufferGeometries(instances);
	var merged_MESH = new THREE.Mesh(merged_geometry, material);
	merged_MESH.castShadow = true;
	merged_MESH.receiveShadow = true;
	console.log(merged_MESH);
	scene.add(merged_MESH);

	//scene.add(new THREE.Mesh(BufferGeometryUtils.mergeBufferGeometries(instances, false), material));
}