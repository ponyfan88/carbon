import * as THREE from "three";

let scene, camera, renderer, sphere, composer;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        85,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const loader = new THREE.TextureLoader();
    const earthTexture = loader.load("../../assets/pages/default/earth/earth_hd.jpg");
    const material = new THREE.MeshBasicMaterial({ map: earthTexture });

    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    sphere.rotation.y = 1.5 * Math.PI; //starts over africa, panning to NA

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.domElement.id = "c";

    camera.position.z = 15;
}

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.001;
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate();