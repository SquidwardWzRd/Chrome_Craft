import * as THREE from '/node_modules/three/build/three.module.js';
//alright that's enough work for today


//Will have separate constructors for items, entities, etc. Make sure to store within chunk data.
function Block(id, data, chunk, x, y, z) {
    this.id = id; //block type
    this.data = data; //this object should whatever the block needs i:e inventory space, script to run on interact, etc.
    this.chunk = chunk; //the chunk id the block is located in
    this.x = x; //xyz are local coordinates within the chunk, NOT world coords 
    this.y = y;
    this.z = z;

    this.create = function() { //function adds block into the world.
        //I need code here that adds the block to the chunk mesh. Some sort of function that would add it to the mesh. Not sure where to put this especially since chunks are unfinished
    };
    this.destroy = function() { //function removes block from world
        
    };

    
}