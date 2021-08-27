import * as THREE from '/node_modules/three/build/three.module.js';
//alright that's enough work for today


//Will have separate constructors for items, entities, etc.
function Block(id, data, chunk, x, y, z) {
    this.id = id;
    this.data = data;
    this.chunk = chunk;
    this.x = x;
    this.y = y;
    this.z = z;

    this.create = function() {

    };
    this.destroy = function() {

    };

    
}