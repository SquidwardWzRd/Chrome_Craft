function terrainGen(world, x,y) {

    for (let k = 0; k<y; k++){
         for(let i = 0; i<x; i++){
            let p = [1,1, 1,1, 1,1];
            world.push(createCube('/AsepriteSaves/Grass.png',p));
            scene.add(world[world.length -1]);
            world[world.length -1].translateX(-1*i);
            world[world.length -1].translateZ(k);
            world[world.length -1].translateY(Math.round(perlinNoise(i,k,"pog",10,2,15)));  //remove 'pog' with a customizable seed
         }
    }
}