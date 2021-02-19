
// Setting up the THREE.js window
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// GLOBALS
var velocity = new THREE.Vector3(0,0,0);
moveSpeed = 0.001;

var GameRunning = true;

// Simplifying the cube creation process and creating a default cube
const cube = createCube('/AsepriteSaves/Block.png', (1,1,1));
scene.add( cube );

// Setting a defualt camera position with default block in view
camera.position.z = 5;


function Gameloop() {
    //Game logic here

    // Input Collection
    document.addEventListener('keydown', function(event) {
        if(event.key == 'w') {
            velocity.z -= 1; 
        }
        if(event.key == 's') {
            velocity.z += 1;
        }
        if(event.key == 'a') {
            velocity.x -= 1;
        }
        if(event.key == 'd') {
            velocity.x += 1;
        }
    });


    camera.translateX(velocity.x * moveSpeed);
    camera.translateZ(velocity.z * moveSpeed);
    console.log(camera.position);
    // Reset the velocity values:
    velocity.x = 0;
    velocity.z = 0;


    // Rotate the default cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;



    renderer.render( scene, camera );
    requestAnimationFrame(Gameloop);
}

Gameloop();
