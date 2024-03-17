import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import {AnimationAction} from "three";



@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent implements AfterViewInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef | undefined;

  private glbPath = 'assets/3d/avatar_animation.glb';
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;
  private mixer!: THREE.AnimationMixer;


  constructor() {
  }

  ngAfterViewInit() {
    this.waitForDOM().then(() => {
      this.initThree();
    });
}

  waitForDOM(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        document.addEventListener('readystatechange', () => {
          if (document.readyState === 'complete') {
            resolve();
          }
        });
      }
    });
  }

  initThree() {
    if (!!window) {
      const scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(22, this.rendererContainer?.nativeElement.clientWidth / this.rendererContainer?.nativeElement.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(this.rendererContainer?.nativeElement.clientWidth, this.rendererContainer?.nativeElement.clientHeight);
      this.rendererContainer?.nativeElement.appendChild(renderer.domElement);

      // Ajouter une lumière ambiante pour éclairer la scène
      const ambientLight = new THREE.AmbientLight(0xffffff, 2); // couleur, intensité
      scene.add(ambientLight);

      // Ajouter une lumière directionnelle pour simuler la lumière du soleil
      const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // couleur, intensité
      directionalLight.position.set(1, 1, 1).normalize();
      scene.add(directionalLight);

      const loader = new GLTFLoader();
      loader.load(this.glbPath, (gltf: any) => {
        gltf.scene.traverse((child: any) => {
          console.log(child.name)
          if (child.isMesh) {
            // Vérifier et modifier les matériaux des maillages
            child.material.transparent = false; // Désactiver la transparence
            child.material.alphaTest = 0.5; // Définir le seuil de transparence
            child.material.depthWrite = true; // Activer l'écriture de profondeur
          }
        });
        scene.add(gltf.scene);

        // Récupérer le mixer pour l'animation
        this.mixer = new THREE.AnimationMixer(gltf.scene);

        // Charger et jouer l'animation
        gltf.animations.forEach((clip: any) => {
          const action : AnimationAction = this.mixer?.clipAction(clip);
          action.setLoop(THREE.LoopOnce, THREE.LoopOnce); // Définir la boucle sur une seule fois
          action.clampWhenFinished = true; // Bloquer l'animation sur sa dernière frame
          action?.play();
        });
      });

      this.camera.position.z = 5;
      this.camera.position.x = 0;
      this.camera.position.y = 1;

      scene.position.y = -1; // Ajustez cette valeur selon vos besoins

      // Ajouter des contrôles OrbitControls pour permettre d'interagir avec la caméra
      this.controls = new OrbitControls(this.camera, renderer.domElement);
      this.controls.enableDamping = true; // Ajouter un amortissement pour des mouvements fluides
      this.controls.dampingFactor = 0.25; // Facteur d'amortissement
      this.controls.rotateSpeed = 0.35; // Vitesse de rotation

      const clock = new THREE.Clock();
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, this.camera);
        const delta = clock.getDelta(); // Temps écoulé depuis le dernier appel
        this.mixer?.update(delta); // Mettre à jour toutes les animations
        this.controls.update(); // Mettre à jour les contrôles de la caméra à chaque frame
      };
      animate();
    }
  }
}
