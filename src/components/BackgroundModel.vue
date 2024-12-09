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
      if (this.light) {
        this.lightTargetPositionZ = 0;
      }
    });
    EventBus.on("goAbout", () => {
      if (this.light) {
        this.lightTargetPositionZ = 15;
      }
    });
    EventBus.on("goPortfolio", () => {
      if (this.light) {
        this.lightTargetPositionZ = 40;
      }
    });
    EventBus.on("goContact", () => {
      if (this.light) {
        this.lightTargetPositionZ = 100;
      }
    });
    EventBus.on("setCarRed", () => {
      if (this.car) {
        this.car.traverse((child) => {
          if (child.isMesh) {
            child.material.color.set(0xff0000);
          }
        });
      }
    });
    EventBus.on("setCarBlack", () => {
      if (this.car) {
        this.car.traverse((child) => {
          if (child.isMesh) {
            child.material.color.set(0x000000);
          }
        });
      }
    });
    EventBus.on("setCarPink", () => {
      if (this.car) {
        this.car.traverse((child) => {
          if (child.isMesh) {
            child.material.color.set(0xff00ff);
          }
        });
      }
    });
    EventBus.on("setCarWhite", () => {
      if (this.car) {
        this.car.traverse((child) => {
          if (child.isMesh) {
            child.material.color.set(0xffffff);
          }
        });
      }
    });
    EventBus.on("setCarRandom", () => {
      if (this.car) {
        this.car.traverse((child) => {
          if (child.isMesh) {
            child.material.color.set(Math.floor(Math.random() * 16777215));
          }
        });
      }
    });
  },
  data () {
    return {
      car: null,
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
      camera.position.x = -17.5;
      camera.position.z = -9.5;
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
        "/models/source/AE86B.glb",
        (gltf) => {
          car_model = gltf.scene;

          scene.add(car_model);

          gltf.scene.scale.set(1, 1, 1);

          this.car = car_model;
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
      const light = new THREE.DirectionalLight(0xffffff, 2);
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

        light.position.y = 15
        // light.position.z += 0.1;
        if (this.lightTargetPositionZ !== this.light.position.z) {
          this.moveLightToZ(this.lightTargetPositionZ);
        }

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
      let speed = 0.5;
      if (this.light.position.z < zValue) {
        this.light.position.z += speed;
      } else if (this.light.position.z > zValue) {
        this.light.position.z -= speed;
      }
    }
  },
  watch: {
    rotationPercent(newVal) {
      if (newVal === 0 || isNaN(newVal)) {
          this.camera.position.x = -17.5;
          this.camera.position.z = -9.5;
          this.camera.position.y = 7;
          this.camera.lookAt(0, 0, 0);
          return;
      }
      const radius = 20; // Distance from the car
      const angle = (-(newVal/2)-.33) * 2 * Math.PI; // Convert percent to radians
      this.camera.position.x = Math.sin(angle) * radius;
      this.camera.position.z = Math.cos(angle) * radius;
      this.camera.position.y = 7; // Keep the y position constant
      if (this.car) {
        this.camera.lookAt(this.car.position);
      } else {
        this.camera.lookAt(0, 0, 0);
      }
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
    right: 2.5vh;
  }
  
}
</style>
