function createCube(texture_path, size){
    const texture = new THREE.TextureLoader().load( texture_path );
    const material = new THREE.MeshBasicMaterial( { map: texture } );
    const geometry = new THREE.BoxGeometry(size);
    const cube = new THREE.Mesh( geometry, material );

    return cube;
}