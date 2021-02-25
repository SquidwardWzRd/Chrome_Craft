
function gen_world(world, x,y){
    var p = [];
    var CUBE = new cube(p);

    // TODO:
    // Check for nieghboring voxels and remove faces based on direction


    // WORLD GEN
    for (let k = 0; k<y; k++){
        for(let i = 0; i<x; i++){
            world.push(CUBE.createCube('/AsepriteSaves/Grass.png'));
            scene.add(world[world.length -1]);
            world[world.length -1].translateX(i);
            world[world.length -1].translateZ(k);
        }
        for(let i = 0; i<x; i++){
            world.push(CUBE.createCube('/AsepriteSaves/Grass.png'));
            scene.add(world[world.length -1]);
            world[world.length -1].translateX(-1*i);
            world[world.length -1].translateZ(k);
        }
        for(let i = 0; i<x; i++){
            world.push(CUBE.createCube('/AsepriteSaves/Grass.png'));
            scene.add(world[world.length -1]);
            world[world.length -1].translateX(i);
            world[world.length -1].translateZ(-1*k);
        }
        for(let i = 0; i<x; i++){
            world.push(CUBE.createCube('/AsepriteSaves/Grass.png'));
            scene.add(world[world.length -1]);
            world[world.length -1].translateX(-1*i);
            world[world.length -1].translateZ(-1*k);
        }
    }
}