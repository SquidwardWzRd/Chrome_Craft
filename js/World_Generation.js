
function gen_world(world, x,y){
    //       0 1  2 3  4 5
    var p = [1,1, 1,1, 1,1];

    // TODO:
    // Add a less garbage face removal


    // WORLD GEN
    for (let k = 0; k<y; k++){
        for(let i = 0; i<x; i++){
            for (let v = 0; v<world.length; v++){
                if (world[v].position.x == world[i].position.x +1 || world[v].position.x == world[i].position.x -1){
                    p[0] = 0;
                    p[1] = 0;
                } 
                if (world[v].position.z == world[i].position.z +1 || world[v].position.z == world[i].position.z -1){
                    p[4] = 0;
                    p[5] = 0;
                }
                if (world[v].position.y == world[i].position.y +1 || world[v].position.y == world[i].position.y -1){
                    p[2] = 0;
                    p[3] = 0;
                }
            }
            world.push(createCube('/AsepriteSaves/Grass.png',p));
            scene.add(world[world.length -1]);
            world[world.length -1].translateX(i);
            world[world.length -1].translateZ(k);
            p = [1,1, 1,1, 1,1];
        }
        for(let i = 0; i<x; i++){
            for (let v = 0; v<world.length; v++){
                if (world[v].position.x == world[i].position.x +1 || world[v].position.x == world[i].position.x -1){
                    p[0] = 0;
                    p[1] = 0;
                } 
                if (world[v].position.z == world[i].position.z +1 || world[v].position.z == world[i].position.z -1){
                    p[4] = 0;
                    p[5] = 0;
                }
                if (world[v].position.y == world[i].position.y +1 || world[v].position.y == world[i].position.y -1){
                    p[2] = 0;
                    p[3] = 0;
                }
            }



            world.push(createCube('/AsepriteSaves/Grass.png',p));
            scene.add(world[world.length -1]);
            world[world.length -1].translateX(-1*i);
            world[world.length -1].translateZ(k);
            p = [1,1, 1,1, 1,1];
        }
        for(let i = 0; i<x; i++){
            for (let v = 0; v<world.length; v++){
                if (world[v].position.x == world[i].position.x +1 || world[v].position.x == world[i].position.x -1){
                    p[0] = 0;
                    p[1] = 0;
                } 
                if (world[v].position.z == world[i].position.z +1 || world[v].position.z == world[i].position.z -1){
                    p[4] = 0;
                    p[5] = 0;
                }
                if (world[v].position.y == world[i].position.y +1 || world[v].position.y == world[i].position.y -1){
                    p[2] = 0;
                    p[3] = 0;
                }
            }


            world.push(createCube('/AsepriteSaves/Grass.png',p));
            scene.add(world[world.length -1]);
            world[world.length -1].translateX(i);
            world[world.length -1].translateZ(-1*k);
            p = [1,1, 1,1, 1,1];
        }
        for(let i = 0; i<x; i++){
            for (let v = 0; v<world.length; v++){
                if (world[v].position.x == world[i].position.x +1 || world[v].position.x == world[i].position.x -1){
                    p[0] = 0;
                    p[1] = 0;
                } 
                if (world[v].position.z == world[i].position.z +1 || world[v].position.z == world[i].position.z -1){
                    p[4] = 0;
                    p[5] = 0;
                }
                if (world[v].position.y == world[i].position.y +1 || world[v].position.y == world[i].position.y -1){
                    p[2] = 0;
                    p[3] = 0;
                }
            }


            world.push(createCube('/AsepriteSaves/Grass.png',p));
            scene.add(world[world.length -1]);
            world[world.length -1].translateX(-1*i);
            world[world.length -1].translateZ(-1*k);
            p = [1,1, 1,1, 1,1];
        }
    }
}