<template>
  <div ref="threeCanvas" class="three-container"></div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default {
  name: "BackgroundModel",
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      // Create the scene
      const scene = new THREE.Scene();

      // Create the camera
      const camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = -20;
      camera.position.y = 7;
      camera.position.x = 0;
      camera.lookAt(0, 0, 0);

      // Create the renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setClearColor(0xffffff, 1); 
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.threeCanvas.appendChild(renderer.domElement);

      // Car Model
      const loader = new GLTFLoader();

      // Load Model
      let car_model = null;
      loader.load(
        "/models/source/AE86A.glb",
        function (gltf) {
          car_model = gltf.scene;


          // let randomColor = Math.floor(Math.random() * 16777215); // Don't use this right now?
          let randomColor = 0xffffff;

          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              child.material.color.set(randomColor);
            }
          });

          scene.add(car_model);

          gltf.scene.position.set(-40, 0, -45); // -40, 0, -45 is "zero" position

          gltf.scene.scale.set(1, 1, 1);
        },
        undefined,
        (error) => {
          console.error(
            "An error happened while loading the GLB model:",
            error
          );
        }
      );

      // Add lighting above the car
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(0, 1, 1).normalize();
      // light.castShadow = true;
      scene.add(light);

      // Spotlight
      const spotLight = new THREE.SpotLight(0xffffff); 
      spotLight.position.set(0, 5, 5);
      spotLight.castShadow = true; 
      scene.add(spotLight);


      // Animate the cube (rotation)
      const animate = function () {
        requestAnimationFrame(animate);
        // controls.update();
        // this.moveCar(); 

        // rotate the light around the car
        // light.position.x = Math.sin(Date.now() * 0.001) * 2;
        // light.position.z = Math.cos(Date.now() * 0.001) * 2;

        // Pass light over the car, look like it's driving
        light.position.y = 15
        light.position.z += 0.1;

        // If the light is too far, reset it
        if (light.position.z > 100) {
          light.position.z = -100;
        }
        // Rotate the camera around the car
        // camera.position.x = Math.sin(Date.now() * 0.0002) * 20;
        // camera.position.z = Math.cos(Date.now() * 0.0002) * 20;

        // Rotate Camera to aim at the side of the car
        camera.position.x = -15;
        camera.position.z = -10;
        camera.position.y = 7;
        
        camera.lookAt(0, 0, 0);

        // Copy camera position to spotlight
        spotLight.position.copy(camera.position);

        renderer.render(scene, camera);
      };
      animate();

      // Handle window resizing
      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      // Listen for key events
      window.addEventListener("keydown", this.handleKeyDown);
      window.addEventListener("keyup", this.handleKeyUp);
    },
  },
};
</script>

<style scoped>
.three-container {
  max-width: 100vw;
  max-height: 45vh;
  position: relative;
  top: -50px;
  z-index: -1;
}
</style>
