import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Axis Helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Plane
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0x999999, side: THREE.DoubleSide, wireframe: true});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = Math.PI / 2;
scene.add(plane);

// Function to generate z = f(x, y)
const fun = (x, y) => {
    // Example function: cone shape z = sqrt(x^2 + y^2)
    return Math.sqrt(x*x + y*y);
};

// Generate vertices
const generateVertices = () => {
    const vertices = [];
    const min_x = -1, max_x = 1, step = 0.1;
    for (let x = min_x; x <= max_x; x += step) {
        for (let y = min_x; y <= max_x; y += step) {
            const z = fun(x, y);
            vertices.push(new THREE.Vector3(x, y, z));
        }
    }
    return vertices;
};

const vertices = generateVertices();

// Create geometry and add vertices
const geometry = new THREE.BufferGeometry().setFromPoints(vertices);

// Create material
const material = new THREE.PointsMaterial({color: 0xff0000, size: 0.05});
const points = new THREE.Points(geometry, material);
scene.add(points);

// Camera position
camera.position.z = 5;

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Render loop
const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();
