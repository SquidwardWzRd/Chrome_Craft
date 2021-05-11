import * as THREE from '/node_modules/three/build/three.module.js';
import {perlinNoise} from '/js/perlinNoise.js';


export function terrainGen( x,y,z, seed, texture_path) {

    // Error Handleing 
    if (x == undefined || y == undefined || z == undefined){
        throw 'X or Y or Z is undefined';
    } else if  (isNaN(x) || isNaN(y) || isNaN(z)){
        throw 'X or Y or Z is not a number';
    }
    if (seed == undefined){
        throw 'Seed is undefined';
    }

    var material;

    // Error Handling with texture path
    if (texture_path == undefined){
        material = new THREE.MeshBasicMaterial( { color: 'white', wireframe: true} );
    } else {
        const texture = new THREE.TextureLoader().load( texture_path );
        // Wireframe
        material = new THREE.MeshBasicMaterial( { map: texture, wireframe: false, side: THREE.FrontSide} );
    }

    // Make geometry with all sides
    var p = [1,1, 1,1, 1,1];
    var geometry = MakeGeom(p);

    var WGeoms = [];
    var MESH = new THREE.Mesh(geometry, material);
    WGeoms.push(MESH.geometry);

    for (let h = 0; h<y; h++){
        for (let k = 0; k<z; k++){
            for(let i = 0; i<x; i++){
                // Make a temporary mesh
                var New_geometry = MakeGeom(p);
                var tempMESH = new THREE.Mesh(New_geometry, material);


                // Translate it
                tempMESH.translateX(-1*i);
                tempMESH.translateZ(k);
                // -h ensures there is more depth to the terrain
                tempMESH.translateY(Math.round(perlinNoise(i,k,seed,10,2,15))-h);  //remove 'pog' with a customizable seed
                
                // Push it's geometry to an array
                WGeoms.push(tempMESH.geometry);
            }
       }
    }

    /* // Make a fresh geometry
    var Fresh_Geom = THREE.BufferGeometryUtils.mergeBufferGeometries(WGeoms, false);

    // Make the final mesh with the fresh geometry
    var newWorld = new THREE.Mesh(Fresh_Geom, material);
    
    scene.add(newWorld);

    return newWorld; */
}

function MakeGeom(p){

    // ERROR HANDLING
    if (p == undefined){
        throw 'P is undefined';
    } else if (!Array.isArray(p)){
        throw 'p is not an array';
    }

    var geometry = new THREE.BoxBufferGeometry();
    
    // IMPORTANT          X      Y      Z
    //           planes px,nx, py,ny, pz,nz  -> 0 hide, 1 show
    // var p = [1,1, 1,1, 1,1]
    
    var index = [];
    if ( p[0] === 1 ) index.push( 0, 2, 1, 2, 3, 1 );
    if ( p[1] === 1 ) index.push( 4, 6, 5, 6, 7, 5 );
    if ( p[2] === 1 ) index.push( 8, 10, 9, 10, 11, 9 );
    if ( p[3] === 1 ) index.push( 12, 14, 13, 14, 15, 13 );
    if ( p[4] === 1 ) index.push( 16, 18, 17, 18, 19, 17 );
    if ( p[5] === 1 ) index.push( 20, 22, 21, 22, 23, 21 );
    geometry.setIndex( index );

    return geometry;

}
