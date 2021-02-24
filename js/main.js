// Setting up the THREE.js window
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// GLOBALS
velocity = new THREE.Vector3(0,0,0);
const moveSpeed = 5;
const MaxSpeed = 10;
const FRICTION = 0.2;

mouse_locked = false;
var x = 0;
var y = 0;
const MAX_ANGLE = 2;
const MIN_ANGLE = -2;
const SENS = 5;

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
// nothing

// Setting a defualt camera position with default block in view
camera.position.z = 5;

// Sets up the Delta Value
var clock = new THREE.Clock();
var delta = 0;

  
function lockChangeAlert() {
    if(document.pointerLockElement === document.body ||
    document.mozPointerLockElement === document.body) {
      mouse_locked = true;
    } else {
      mouse_locked = false;
    }
}

log(camera.rotation);

function Gameloop() {

    delta = clock.getDelta();

    // Input Collection
    document.addEventListener('keydown', function(event) {
        if(event.key == 'w') {
            w = true;
        } 
        if(event.key == 's') {
            s = true;
        }
        if(event.key == 'a') {
            a = true;
        }
        if(event.key == 'd') {
            d = true;
        }
        if(event.key == 'v') {
            alt = true;
        }
        if(event.key == 'Shift') {
            shift = true;
        }
    });

    document.addEventListener('keyup', function(event) {
        if(event.key == 'w') {
            w = false;
        } 
        if(event.key == 's') {
            s = false;
        }
        if(event.key == 'a') {
            a = false;
        }
        if(event.key == 'd') {
            d = false;
        }
        if(event.key == 'v') {
            alt = false;
        }
        if(event.key == 'Shift') {
            shift = false;
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
    velocity = calc_velocity(velocity, MaxSpeed);


    // Checking the mouse_locked Value
    if ("onpointerlockchange" in document) {
        document.addEventListener('pointerlockchange', lockChangeAlert, false);
    } else if ("onmozpointerlockchange" in document) {
        document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
    }

    // Mouse Input Collection
    document.addEventListener('mousedown', function(event){
        if (mouse_locked == false){
            document.body.requestPointerLock();
        }
    });

    if (mouse_locked == true){
        document.addEventListener('mousemove', function(event){
            x = event.movementX;
            y = event.movementY;

        });
    }
    // Sensitivity adjustment
    x = calc_SENS_x(x,SENS);
    y = calc_SENS_y(y,SENS);

    



    // Adjust the Camera Position based off of Velocity
    camera.translateZ(velocity.z * delta);
    camera.translateX(velocity.x * delta);
    camera.translateY(velocity.y * delta);
    velocity.x = 0;
    velocity.z = 0;
    velocity.y = 0;
    
    // Rotates LEFT and RIGHT based on world axis
    camera.rotateOnWorldAxis(new THREE.Vector3(0,1,0), -1*x * delta);

    // Rotates UP and DOWN based on local axis
    camera.rotateX(-1*y * delta);
    //camera.rotateZ();
    
    x=0;
    y=0;


    // Render the scene and call it a day
    renderer.render( scene, camera );
    requestAnimationFrame(Gameloop);
}

Gameloop();
