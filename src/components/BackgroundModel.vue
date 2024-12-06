<template>
  <div ref="threeCanvas" class="three-container"></div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EventBus } from '../eventBus';

export default {
  name: "BackgroundModel",
  props: {
    rotationPercent: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.initThree();
    EventBus.on("goHome", () => {
      console.log("Going Home");
      if (this.light) {
        this.lightTargetPositionZ = 0;
      }
    });
    EventBus.on("goAbout", () => {
      console.log("Going About");
      if (this.light) {
        this.lightTargetPositionZ = 15;
      }
    });
    EventBus.on("goPortfolio", () => {
      console.log("Going Portfolio");
      if (this.light) {
        this.lightTargetPositionZ = 40;
      }
    });
    EventBus.on("goContact", () => {
      console.log("Going Contact");
      if (this.light) {
        this.lightTargetPositionZ = 100;
      }
    });
  },
  data () {
    return {
      camera: null,
      light: null,
      scene: null,
      renderer: null,
      lightTargetPositionZ: 0,
    };
  },
  methods: {
    initThree() {
      // Create the scene
      const scene = new THREE.Scene();

      let initialFOV = window.innerWidth < 768 ? 95 : 55;

      // Create the camera
      const camera = new THREE.PerspectiveCamera(
        initialFOV,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.x = -15;
      camera.position.z = -10;
      camera.position.y = 7;
      camera.lookAt(0, 0, 0);

      this.camera = camera;

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
      this.light = light;


      // Animate the cube (rotation)
      const animate = () => {
        requestAnimationFrame(animate);
        // controls.update();
        // this.moveCar(); 

        // rotate the light around the car
        // light.position.x = Math.sin(Date.now() * 0.001) * 2;
        // light.position.z = Math.cos(Date.now() * 0.001) * 2;

        // Pass light over the car, look like it's driving

        light.position.y = 15
        // light.position.z += 0.1;
        if (this.lightTargetPositionZ !== this.light.position.z) {
          this.moveLightToZ(this.lightTargetPositionZ);
        }

        // Start moving the light to the target position
        //if (light.position.z < this.lightTargetPositionZ) {
        //  light.position.z += 0.1;
        //} else if (light.position.z > this.lightTargetPositionZ) {
        //  light.position.z -= 0.1;
        //}


        // Rotate the camera around the car
        // camera.position.x = Math.sin(Date.now() * 0.0002) * 20;
        // camera.position.z = Math.cos(Date.now() * 0.0002) * 20;

        // Rotate Camera to aim at the side of the car

        
        camera.lookAt(0, 0, 0);

        // Copy camera position to spotlight
        spotLight.position.copy(camera.position);

        renderer.render(scene, camera);
      };
      animate();

      // Handle window resizing
      window.addEventListener("resize", () => {
        const newFOV = window.innerWidth < 768 ? 90 : 55;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.fov = newFOV;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

    },
    moveLightToZ(zValue){
      // moves light to z value over time
      if (this.light.position.z < zValue) {
        this.light.position.z += 0.1;
      } else if (this.light.position.z > zValue) {
        this.light.position.z -= 0.1;
      }
    }
  },
  watch: {
    rotationPercent: function (newVal) {
      // Default is -15, 7, -10, Zero Rot is 0, 7, 20 so we need to adjust the x and z
      this.camera.position.x = (Math.sin(newVal*2) * 20) - 15;
      this.camera.position.z = (Math.cos(newVal*2) * 20) - 30;
      this.camera.lookAt(0, 0, 0);
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

@media screen and (max-width: 600px) {
  .three-container {
    max-height: 30vh;
    top: -20vh;
  }
  
}
</style>
