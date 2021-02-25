class cube {
    constructor(p){
        this.p = p;

    }
    createCube(texture_path){
        const texture = new THREE.TextureLoader().load( texture_path );
        // Wireframe
        const material = new THREE.MeshBasicMaterial( { map: texture, wireframe: true} );
        var geometry = new THREE.BoxBufferGeometry();
    
        // IMPORTANT                              X      Y      Z
        var p = this.p; // This is just sus
        p = [ 1, 1,  1, 1,  1, 1 ]; // planes px,nx, py,ny, pz,nz  -> 0 hide, 1 show
    
        var index = [];
        if ( p[0] === 1 ) index.push( 0, 2, 1, 2, 3, 1 );
        if ( p[1] === 1 ) index.push( 4, 6, 5, 6, 7, 5 );
        if ( p[2] === 1 ) index.push( 8, 10, 9, 10, 11, 9 );
        if ( p[3] === 1 ) index.push( 12, 14, 13, 14, 15, 13 );
        if ( p[4] === 1 ) index.push( 16, 18, 17, 18, 19, 17 );
        if ( p[5] === 1 ) index.push( 20, 22, 21, 22, 23, 21 );
        geometry.setIndex( index );
        const cube = new THREE.Mesh( geometry, material );
        
        return cube;
    }
}