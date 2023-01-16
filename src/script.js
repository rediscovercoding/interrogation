import "./style.css";
import * as THREE from "three";
import * as dat from "lil-gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/examples/jsm/renderers/CSS3DRenderer.js";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";

// // Canvas
// const canvas = document.querySelector("canvas.scene");

// // Scene
// const scene = new THREE.Scene();
// const scene2 = new THREE.Scene();

// // Texture loader
// const textureLoader = new THREE.TextureLoader();

// // Draco loader
// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath("draco/");

// // GLTF loader
// const gltfLoader = new GLTFLoader();
// gltfLoader.setDRACOLoader(dracoLoader);

// //Model gltf
// const model = gltfLoader.load("interrogation2.glb", (gltf) => {
//   scene.add(gltf.scene);
// });
// //Geometry
// const geometry = new THREE.BoxGeometry(3, 3, 3);
// const material = new THREE.MeshBasicMaterial({ color: "#ff0000" });
// const mesh = new THREE.Mesh(geometry, material);
// mesh.position.set(0, 0, 0);
// scene.add(mesh);

// //Sizes
// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };

// window.addEventListener("resize", () => {
//   // Update sizes
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;

//   // Update camera
//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();

//   // Update renderer
//   renderer.setSize(sizes.width, sizes.height);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// //Lights
// const directionalLight = new THREE.DirectionalLight("#ffffff", 0.25);
// directionalLight.position.set(1, 1, 1);
// scene.add(directionalLight);
// const ambientLight = new THREE.AmbientLight("#ffffff", 1);
// scene.add(ambientLight);

// // Camera
// const camera = new THREE.PerspectiveCamera(
//   45,
//   sizes.width / sizes.height,
//   0.1,
//   100
// );
// camera.position.x = 0;
// camera.position.y = 10;
// camera.position.z = 100;

// scene.add(camera);

// //CSS3D Renderer
// let cssDiv = document.querySelector(".cssDiv");
// const cssRenderer = new CSS3DRenderer({
//   canvas: canvas,
//   alpha: true,
// });
// cssRenderer.setSize(sizes.width, sizes.height);
// //cssRenderer.domElement.style.position = "absolute";
// cssDiv.appendChild(cssRenderer.domElement);

// const element = document.createElement("div");
// element.innerHTML = "inner HTML";
// element.className = "infoClass";
// element.style.color = "white";
// element.style.backgroundColor = "blue";

// const objectHTML = new CSS3DObject(element);
// objectHTML.position.set(0, 0, -30);
// objectHTML.width = 100;
// scene2.add(objectHTML);

// // Webgl Renderer
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
//   antialias: true,
//   alpha: true,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.domElement.style.position = "absolute";

// // Controls
// const controls = new OrbitControls(camera, cssRenderer.domElement);
// const controls2 = new OrbitControls(camera, renderer.domElement);
// // controls.enableDamping = true;

// //Animate
// const clock = new THREE.Clock();

// const nextFrame = () => {
//   const elapsedTime = clock.getElapsedTime();
//   objectHTML.rotation.y += 0.005;
//   // Update controls
//   controls.update();
//   controls2.update();

//   // Render
//   cssRenderer.render(scene2, camera);
//   renderer.render(scene, camera);

//   // Call tick again on the next frame
//   window.requestAnimationFrame(nextFrame);
// };

// nextFrame();

// //sizes
// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };
// //Select Canvas
// const canvas = document.querySelector("canvas");

// //scene
// const scene = new THREE.Scene();

// //camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.z = 5;
// scene.add(camera);

// //Trial Obj
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshNormalMaterial();
// const mesh = new THREE.Mesh(geometry, material);
// mesh.rotation.y = Math.PI * 0.25;
// mesh.rotation.x = Math.PI * 0.25;
// scene.add(mesh);
// //Webgl renderer
// const rendererWGL = new THREE.WebGLRenderer({
//   // canvas: canvas,
//   alpha: true,
// });
// rendererWGL.setSize(sizes.width, sizes.height);
// // rendererWGL.setClearColor(0xf0f0f0);

// document.body.appendChild(rendererWGL.domElement);

// //CSS3D object
// // const element = document.createElement("div");
// // element.innerHTML = "HTML";
// // const cssObj = new CSS2DObject(element);
// // cssObj.scale.set(0.025, 0.025, 0.025);
// // scene.add(cssObj);

// //CSS renderer
// let cssDiv = document.querySelector(".cssDiv");
// const cssRenderer = new CSS2DRenderer({});
// cssRenderer.setSize(sizes.width, sizes.height);
// cssRenderer.domElement.style.position = "absolute";
// cssRenderer.domElement.style.top = "0px";
// cssRenderer.domElement.style.color = "white";
// document.body.appendChild(cssRenderer.domElement);

// //Animate
// const animate = () => {
//   //rotate y axis
//   mesh.rotation.y += 0.0025;
//   // cssObj.rotation.y += 0.025;

//   //update render
//   rendererWGL.render(scene, camera);
//   cssRenderer.render(scene, camera);

//   //call request Animation frame on this function
//   window.requestAnimationFrame(animate);
// };
// animate();

//Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

//Scene
const scene = new THREE.Scene();

//Objects
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//iframe Object
const element = document.createElement("div");
element.innerHTML = '<iframe src="https://threejs.org/"  ></iframe>';

const page = new CSS3DObject(element);
page.scale.set(0.0032, 0.0063, 0.005);
page.position.z = 0.5;
page.position.x = 0;
page.position.y = -0.015;
scene.add(page);

//Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 3;
camera.position.x = 3;
camera.position.y = 3;
scene.add(camera);

//Renderers
//WebGL Renderer
const renderer1 = new THREE.WebGLRenderer();
renderer1.setSize(sizes.width, sizes.height);
document.body.appendChild(renderer1.domElement);

//CSS3D Renderer
const renderer2 = new CSS3DRenderer();
renderer2.setSize(sizes.width, sizes.height);
renderer2.domElement.style.position = "absolute";
renderer2.domElement.style.top = "0px";
renderer2.domElement.style.pointerEvents = "none";
document.body.appendChild(renderer2.domElement);

//Controls
const orbitControl = new OrbitControls(camera, renderer1.domElement);

//Render or Animate

const animate = () => {
  renderer1.render(scene, camera);
  renderer2.render(scene, camera);

  //update control
  orbitControl.update();
  //next frame
  requestAnimationFrame(animate);
};
animate();
