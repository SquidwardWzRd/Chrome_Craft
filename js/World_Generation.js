function gen_world(world, x,y){
    for (let k = 0; k<y; k++){
        for(let i = 0; i<x; i++){
            world.push(createCube('/AsepriteSaves/Grass.png',1,1,1));
            scene.add(world[world.length -1]);
            world[world.length -1].translateX(i);
            world[world.length -1].translateZ(k);
        }
        for(let i = 0; i<x; i++){
            world.push(createCube('/AsepriteSaves/Grass.png',1,1,1));
            scene.add(world[world.length -1]);
            world[world.length -1].translateX(-1*i);
            world[world.length -1].translateZ(k);
        }
        for(let i = 0; i<x; i++){
            world.push(createCube('/AsepriteSaves/Grass.png',1,1,1));
            scene.add(world[world.length -1]);
            world[world.length -1].translateX(i);
            world[world.length -1].translateZ(-1*k);
        }
        for(let i = 0; i<x; i++){
            world.push(createCube('/AsepriteSaves/Grass.png',1,1,1));
            scene.add(world[world.length -1]);
            world[world.length -1].translateX(-1*i);
            world[world.length -1].translateZ(-1*k);
        }
    }
}