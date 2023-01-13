import "./style.css";
import * as THREE from "three";
import * as dat from "lil-gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { CSS3DRenderer, CSS3DSprite, CSS3DObject } from "three-css3d";

// Canvas
const canvas = document.querySelector("canvas.scene");

// Scene
const scene = new THREE.Scene();

/**
 * Loaders
 */
// Texture loader
const textureLoader = new THREE.TextureLoader();

// Draco loader
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("draco/");

// GLTF loader
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

//Model gltf
gltfLoader.load("interrogation2.glb", (gltf) => {
  scene.add(gltf.scene);
});

//Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//Lights
const directionalLight = new THREE.DirectionalLight("#ffffff", 0.25);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);
const ambientLight = new THREE.AmbientLight("#ffffff", 1);
scene.add(ambientLight);
// Camera
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 15;
camera.position.y = 15;
camera.position.z = 22;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

//CSS3D Renderer

const cssRenderer = new CSS3DRenderer({
  canvas: canvas,
  alpha: true,
});
cssRenderer.setSize(sizes.width, sizes.height / 2);

document.body.appendChild(cssRenderer.domElement);

const element = document.createElement("div");
element.innerHTML = "htmlContent";
element.className = "infoClass";
element.style.color = "white";
element.style.backgroundColor = "blue";

const objectHTML = new CSS3DObject(element);
objectHTML.position.set(0, 0, 10);
scene.add(objectHTML);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputEncoding = THREE.sRGBEncoding;

//Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);
  cssRenderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
