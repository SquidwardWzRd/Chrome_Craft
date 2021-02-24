function createCube(texture_path, size){
    const texture = new THREE.TextureLoader().load( texture_path );
    // Wireframe ON or OFF
    const material = new THREE.MeshBasicMaterial( { map: texture, wireframe: true} );
    const geometry = new THREE.BoxGeometry(size);
    const cube = new THREE.Mesh( geometry, material );

    return cube;
}