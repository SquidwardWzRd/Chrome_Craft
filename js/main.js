// IMPORTS
import * as THREE from '/node_modules/three/build/three.module.js';
import { BufferGeometryUtils } from "/node_modules/three/examples/jsm/utils/BufferGeometryUtils.js";
import {terrainGen, terrainGen2} from '/js/worldGen2.js';
import {calc_velocity, calc_SENS_x, calc_SENS_y} from '/js/movement.js';
import Stats from '/node_modules/three/examples/jsm/libs/stats.module.js'


// Setting up the THREE.js window
const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(47, 194, 247)");

// Set up the camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

renderer.shadowMap.enabled = true;

// STATS JS
var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

// GLOBALS
var velocity = new THREE.Vector3(0,0,0);
const moveSpeed = 5;
const MaxSpeed = 10;

// Camera VARS
var mouse_locked = false;
var x = 0;
var y = 0;
var pitch = 0;
var yaw = 0;
var viewVector = new THREE.Vector3(1,0,0);
const SENS = 10;

// Key Pressed Values
var w = false;
var a = false;
var s = false;
var d = false;
var alt = false;
var shift = false;

// Gameloop Value
var GameRunning = true;

// GENERATE WORLD
chunk = {x:16, y:10, z:16};
terrainGen2(scene, 200, 10, 200, '/AsepriteSaves/Grass.png', -1, 1 )
//terrainGen(scene, 100, 10, 100, '/AsepriteSaves/Grass.png', 1, 1 )
//terrainGen(scene, 100, 10, 100, '/AsepriteSaves/Grass.png', -1, -1 )
//terrainGen(scene, 100, 10, 100, '/AsepriteSaves/Grass.png', 1, -1 )

// BLENDER CUBE *** IMPORTANT *** *** DO NOT DELETE ***
var geom = new THREE.BoxGeometry();
const texture = new THREE.TextureLoader().load( '/AsepriteSaves/Block.png' );
var material = new THREE.MeshStandardMaterial( { map: texture} );
var cu = new THREE.Mesh(geom, material);
cu.translateY(20);
cu.castShadow = true;
cu.receiveShadow = true;
scene.add(cu);


// Merge Testing
var mat = new THREE.MeshBasicMaterial({
    color: "white",
    wireframe: true,
});
var geom1 = new THREE.BoxGeometry();
var geom2 = new THREE.BoxGeometry();
geom1.translate(20,20,0);
geom2.translate(19,20,0);
var geoms = [geom1, geom2];
var mg = BufferGeometryUtils.mergeBufferGeometries(geoms);
var mm = new THREE.Mesh(mg, mat);
//mm.position.set(10,10,0);
mm.castShadow = true;
mm.receiveShadow = true;
scene.add(mm);



// SCENE LIGHTING
const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(0, 200, 0);
light.target.position.set(-50, 0, 20);
light.castShadow = true;
scene.add(light);
scene.add(light.target);
const ambient = new THREE.AmbientLight( 0x404040, 0.5 ); // soft white light
scene.add( ambient );



// Setting a defualt camera position with default block in view
camera.position.y = 20;

// Sets up the Delta Value
var clock = new THREE.Clock();
var delta = 0;


function Gameloop() {

    delta = clock.getDelta();

    stats.begin();

    // Input Collection
    document.addEventListener('keydown', function(event) {
        if(event.key == 'w' || event.key == 'W') {
            w = true;
        } 
        if(event.key == 's' || event.key == 'S') {
            s = true;
        }
        if(event.key == 'a' || event.key == 'A') {
            a = true;
        }
        if(event.key == 'd' || event.key == 'D') {
            d = true;
        }
        if(event.key == 'v' || event.key == 'V') {
            alt = true;
        }
        if(event.key == 'Shift') {
            shift = true;
        }
    });

    document.addEventListener('keyup', function(event) {
        if(event.key == 'w' || event.key == 'W') {
            w = false;
        } 
        if(event.key == 's' || event.key == 'S') {
            s = false;
        }
        if(event.key == 'a' || event.key == 'A') {
            a = false;
        }
        if(event.key == 'd' || event.key == 'D') {
            d = false;
        }
        if(event.key == 'v' || event.key == 'V') {
            alt = false;
        }
        if(event.key == 'Shift') {
            shift = false;
        }
        // DEBUG FEATURE
        if(event.key == 'p'){ // Logs draw calls
            console.log(renderer.info.render.calls);
        }
    });

    if (w == true){
        velocity.z -= moveSpeed;
    }
    if (s == true){
        velocity.z += moveSpeed;
    }
    if (a == true){
        velocity.x -= moveSpeed;
    }
    if (d == true){
        velocity.x += moveSpeed;
    }
    if (alt == true){
        velocity.y += moveSpeed;
    }
    if (shift == true){
        velocity.y -= moveSpeed;
    }
    velocity = calc_velocity(velocity, MaxSpeed); // Calculate movement

    // Mouse Input Collection
    document.addEventListener('mousedown', function(event){
        document.body.requestPointerLock();
    });

    document.addEventListener('mousemove', function(event){
        x = event.movementX;
        y = event.movementY;
    });
    // Sensitivity adjustment
    /* x = calc_SENS_x(x,SENS);
    y = calc_SENS_y(y,SENS); */

    



    // Adjust the Camera Position based off of Velocity
    camera.translateZ(velocity.z * delta);
    camera.translateX(velocity.x * delta);
    camera.translateY(velocity.y * delta);
    velocity.x = 0;
    velocity.z = 0;
    velocity.y = 0;
    
    // Rotates LEFT and RIGHT based on world axis
    pitch += -y*delta;
    yaw += -x*delta;
    pitch = Math.max(Math.min(pitch,-0.01),-3.13);
    viewVector.setFromSpherical(new THREE.Spherical(1,pitch,yaw));

    camera.lookAt(viewVector.add(camera.position));
    
    x=0;
    y=0;


    // Render the scene and call it a day
    renderer.render( scene, camera );

    stats.end();

    requestAnimationFrame(Gameloop);
}

Gameloop();
