// First we are going to try to create a flat 1 block tall world

function Generate_World(LENX, LENZ/*, STARTPOS*/){
    var WORLD_MAP = [];
    
    for (let y=0; y< LENZ; y++){
        for (let i = 0; i<LENX; i++){
            WORLD_MAP.push(createCube('/AsepriteSaves/Grass.png', (1,1,1)));
            scene.add(WORLD_MAP[i]);
            WORLD_MAP[i].translateX(i+1);
            WORLD_MAP[i].translateZ(y);
        }
    }
    


}