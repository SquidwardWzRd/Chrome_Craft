
function createCube(texture_path, p){
    var material;

    // Error Handling with texture path
    if (texture_path == undefined){
        material = new THREE.MeshBasicMaterial( { color: 'white', wireframe: true} );
    } else {
        const texture = new THREE.TextureLoader().load( texture_path );
        // Wireframe
        material = new THREE.MeshBasicMaterial( { map: texture, wireframe: true} );
    }
    // Error Handling
    if (p == undefined){
        throw 'p is undefined';
    }else if (!Array.isArray(p)){
        throw 'p is not an array';
    }




        
    var geometry = new THREE.BoxGeometry();
    const cube = new THREE.Mesh( geometry, material );
    cube.frustumCulled = false 

    
        
    return cube;
}