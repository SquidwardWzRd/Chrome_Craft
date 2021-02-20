
// Setting up the THREE.js window
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// GLOBALS
velocity = new THREE.Vector3(0,0,0);
const moveSpeed = 1;
const MaxSpeed = 5;
const FRICTION = 0.2;

var w = false;
var a = false;
var s = false;
var d = false;

// Gameloop Value
var GameRunning = true;

// Simplifying the cube creation process and creating a default cube
const cube = createCube('/AsepriteSaves/Block.png', (1,1,1));
scene.add( cube );

// Setting a defualt camera position with default block in view
camera.position.z = 5;

// Sets up the Delta Value
var clock = new THREE.Clock();
var delta = 0;


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


    // Making sure that we arent going over the MAX speed
    if (Math.abs(velocity.z) > MaxSpeed){
        if (velocity.z > MaxSpeed){
            velocity.z = MaxSpeed;
        }else if (velocity.z < -MaxSpeed){
            velocity.z = -MaxSpeed;
        } 
    }

    // Apply Friction on the Z axis
    if (velocity.z > 0){
        velocity.z -= FRICTION;
    } else if (velocity.z < 0) {
        velocity.z += FRICTION;
    }

    // Making sure that we dont pass maxspeed in the X value
    if (Math.abs(velocity.x) > MaxSpeed){
        if (velocity.x > MaxSpeed){
            velocity.x = MaxSpeed;
        }else if (velocity.x < -MaxSpeed){
            velocity.x = -MaxSpeed;
        } 
    }

    // Apply Friction on the X axis
    if (velocity.x > 0){
        velocity.x -= FRICTION;
    } else if (velocity.x < 0) {
        velocity.x += FRICTION;
    }
    
    // Adjust the Camera Position based off of Velocity
    camera.translateZ(velocity.z * delta);
    camera.translateX(velocity.x * delta);
    //console.log(camera.position);


    // Rotate the default cube
    cube.rotation.x += 1 * delta;
    cube.rotation.y += 1 * delta;


    // Render the scene and call it a day
    renderer.render( scene, camera );
    requestAnimationFrame(Gameloop);
}

Gameloop();
