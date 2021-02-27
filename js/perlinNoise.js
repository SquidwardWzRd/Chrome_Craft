

//Generates a procedurally uniformly distributed unit vector. x,y,seed all seed cash() (PRNG). Multiplies vector by mag
function randomUnitVector(x,y,seed,mag) {
    let theta = Math.acos((cash(x,y,seed)&2047)/2047*2-1);  
      let phi = 2 * ((cash(x,y,seed)&2047)/2047*2-1) * Math.PI; 
   
  return new THREE.Vector3(
    Math.cos(phi) * Math.sin(theta)*mag,
      Math.sin(phi) * Math.sin(theta)*mag,
    Math.cos(theta)*mag);
}


//
function perlinNoise(x,y,seed,scale,intensity,range) {
    if (!range) {range = 255;} //RANGE MUST BE POWER OF 2 - 1! i.e: 3,7,15...63,127...
    if (!intensity) {intensity = 2;} //Intensity of noise. Too high will result in clipping. Gets fed right into randomUnitVector() as mag
    if (!scale) {scale = 10;} //Size of noise cells in coordinate points.
    
    //TODO Possibly Remove use of modulo function. Use bitwise instead.
    var xt = (x%scale)/scale; //x and y values for pixel's position inside a cell from 0-1
    var yt = (y%scale)/scale;
    
    //Create a distance vector from each corner of the cell to the point inside
    let disA = new THREE.Vector3(xt,yt,0);
    let disB = new THREE.Vector3(xt-1,yt,0);
    let disC = new THREE.Vector3(xt-1,yt-1,0);
    let disD = new THREE.Vector3(xt,yt-1,0);
    
    //Generate a random vector to assign a value (or rather gradient) to each corner of the cell
    let magA = randomUnitVector(Math.floor(x/scale)*scale,Math.floor(y/scale)*scale, seed, intensity);
    let magB = randomUnitVector(Math.ceil(x/scale)*scale,Math.floor(y/scale)*scale, seed, intensity);
    let magC = randomUnitVector(Math.ceil(x/scale)*scale,Math.ceil(y/scale)*scale, seed, intensity);
    let magD = randomUnitVector(Math.floor(x/scale)*scale,Math.ceil(y/scale)*scale, seed, intensity);
    
    //Find the dot product of the distance vector and gradient vector for each point
    let dotA = magA.dot(disA)/2+0.5;
    let dotB = magB.dot(disB)/2+0.5;
    let dotC = magC.dot(disC)/2+0.5;
    let dotD = magD.dot(disD)/2+0.5;
    
    //Interpolate the dot products based on the point's position to find the value of the point
    return THREE.MathUtils.lerp(
        THREE.MathUtils.lerp(dotA, dotB, 6*xt**5-15*xt**4+10*xt**3),
        THREE.MathUtils.lerp(dotD, dotC, 6*xt**5-15*xt**4+10*xt**3),
        6*yt**5-15*yt**4+10*yt**3
    )*range;
}


//Chaos Hash. Used as a psuedo-random number generator (PRNG). Uses coordinates and a seed to generate a deterministic random value
function cash(x, y, str) {
    var seed = 0; //modified chaos hash to accept strings
    if (typeof str === "string") {
    	for (i=0; i<str.length; i++) {
      	seed += str.charCodeAt(i)*(i+1);
      }
    } else {seed = str;}
    h = seed + x*374761393 + y*668265263; //all constants are prime
    h = (h^(h >>> 13))*1274126177;
    return h^(h >>> 16);
}





//DO NOT USE. Funny mistakes, might be cool in place of perlinNoise() for some textures.
function acidTrip(x,y,seed,scale) { //looks like acid trip
    var ptA = cash(Math.floor(x/scale)*scale,Math.floor(y/scale)*scale, seed);
    var ptB = cash(Math.ceil(x/scale)*scale,Math.floor(y/scale)*scale, seed);
    var ptC = cash(Math.ceil(x/scale)*scale,Math.ceil(y/scale)*scale, seed);
    var ptD = cash(Math.floor(x/scale)*scale,Math.ceil(y/scale)*scale, seed);
    
    return lerp(lerp(ptA, ptB, x),lerp(ptD, ptC, x), y);
    
    
  }
function plaidWorld(x,y,seed,scale) { //looks like plaid
    var ptA = cash(Math.floor(x/scale)*scale,Math.floor(y/scale)*scale, seed);
    var ptB = cash(Math.ceil(x/scale)*scale,Math.floor(y/scale)*scale, seed);
    var ptC = cash(Math.ceil(x/scale)*scale,Math.ceil(y/scale)*scale, seed);
    var ptD = cash(Math.floor(x/scale)*scale,Math.ceil(y/scale)*scale, seed);
    
    return lerp(lerp(ptA, ptB, Math.cos((x&scale)/scale)),lerp(ptD, ptC, Math.cos((x&scale)/scale)), Math.cos((y&scale)/scale));
    
   
}
