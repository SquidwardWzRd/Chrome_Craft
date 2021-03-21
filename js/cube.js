
function createCube(texture_path){
    var material;

    // Error Handling with texture path
    if (texture_path == undefined){
        material = new THREE.MeshBasicMaterial( { color: 'white', wireframe: true} );
    } else {
        const texture = new THREE.TextureLoader().load( texture_path );
        // Wireframe
        material = new THREE.MeshBasicMaterial( { map: texture, wireframe: false} );
    }
    const geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3(-1, -1,  1),  // 0
        new THREE.Vector3( 1, -1,  1),  // 1
        new THREE.Vector3(-1,  1,  1),  // 2
        new THREE.Vector3( 1,  1,  1),  // 3
        new THREE.Vector3(-1, -1, -1),  // 4
        new THREE.Vector3( 1, -1, -1),  // 5
        new THREE.Vector3(-1,  1, -1),  // 6
        new THREE.Vector3( 1,  1, -1),  // 7
    );
    geometry.faces.push(
        // front
        new THREE.Face3(0, 3, 2),
        new THREE.Face3(0, 1, 3),
        // right
        new THREE.Face3(1, 7, 3),
        new THREE.Face3(1, 5, 7),
        // back
        new THREE.Face3(5, 6, 7),
        new THREE.Face3(5, 4, 6),
        // left
        new THREE.Face3(4, 2, 6),
        new THREE.Face3(4, 0, 2),
        // top
        new THREE.Face3(2, 7, 6),
        new THREE.Face3(2, 3, 7),
        // bottom
        new THREE.Face3(4, 1, 0),
        new THREE.Face3(4, 5, 1),
    );
    geometry.faceVertexUvs[0].push(
        // front
        [ new THREE.Vector2(0, 0), new THREE.Vector2(1, 1), new THREE.Vector2(0, 1) ],
        [ new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1) ],
        // right
        [ new THREE.Vector2(0, 0), new THREE.Vector2(1, 1), new THREE.Vector2(0, 1) ],
        [ new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1) ],
        // back
        [ new THREE.Vector2(0, 0), new THREE.Vector2(1, 1), new THREE.Vector2(0, 1) ],
        [ new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1) ],
        // left
        [ new THREE.Vector2(0, 0), new THREE.Vector2(1, 1), new THREE.Vector2(0, 1) ],
        [ new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1) ],
        // top
        [ new THREE.Vector2(0, 0), new THREE.Vector2(1, 1), new THREE.Vector2(0, 1) ],
        [ new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1) ],
        // bottom
        [ new THREE.Vector2(0, 0), new THREE.Vector2(1, 1), new THREE.Vector2(0, 1) ],
        [ new THREE.Vector2(0, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, 1) ],
    );
    geometry.computeFaceNormals();



    const cube = new THREE.Mesh( geometry, material );

    return cube;
}