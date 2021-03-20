function terrainGen(world, x,y,z, seed) {

    // Error Handleing 
    if (world == undefined){
        throw 'world is undefined';
    } else if (!Array.isArray(world)){
        throw 'world is not an array';
    }
    if (x == undefined || y == undefined || z == undefined){
        throw 'X or Y or Z is undefined';
    } else if  (isNaN(x) || isNaN(y) || isNaN(z)){
        throw 'X or Y or Z is not a number';
    }
    if (seed == undefined){
        throw 'Seed is undefined';
    }


    let p = [1,1, 1,1, 1,1];
    
    for (let h = 0; h<y; h++){
        for (let k = 0; k<z; k++){
            for(let i = 0; i<x; i++){
                world.push(createCube('/AsepriteSaves/Grass.png',p));
                scene.add(world[world.length -1]);
                world[world.length -1].translateX(-1*i);
                world[world.length -1].translateZ(k);
                // -h ensures there is more depth to the terrain
                world[world.length -1].translateY(Math.round(perlinNoise(i,k,seed,10,2,15))-h);  //remove 'pog' with a customizable seed
                
            }
       }
    }
}