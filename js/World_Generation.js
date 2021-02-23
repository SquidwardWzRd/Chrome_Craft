// First we are going to try to create a flat 1 block tall world

function Generate_World(LENX, LENZ/*, STARTPOS*/){
    var WORLD_MAP = [];
    var tmp_pos=[0,0];
    
    for (let y=0; y< LENZ; y++){
        tmp_pos[1] = y;
        for (let i = 0; i<LENX; i++){
            tmp_pos[0] = i
            WORLD_MAP.push(createCube('/AsepriteSaves/Grass.png', (1,1,1)));
            scene.add(WORLD_MAP[i]);
            WORLD_MAP[i].translateX(tmp_pos[0]);
            WORLD_MAP[i].translateZ(tmp_pos[1]);
        }
    }
    


}