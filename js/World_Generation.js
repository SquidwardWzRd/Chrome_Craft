// Literally Nothing

class VoxelWorld{
    constructor(size_x, size_y){
        this.size_x;
        this.size_y;
    }
    create_world(size_x, size_y) {
        var voxels = [];
        for (let i = 0; i<size_x; i++){
            voxels.push([createCube('/AsepriteSaves/Grass.png', new THREE.Vector3(1,1,1)), i])
        }
        console.table(voxels);
    }
}