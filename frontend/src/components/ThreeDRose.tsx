import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function RoseModel() {
    const { scene } = useGLTF("assets/Rose3.gltf");

    const glowMesh = scene.getObjectByName("Part_2");

    if (glowMesh) {
        glowMesh.children.forEach(function (c) {
            if (c instanceof THREE.Mesh) {
                c.material.emissive.set("#ff22aa");
                c.material.emissiveIntensity = 2;
            }
        });
    }

    const glowMesh2 = scene.getObjectByName("Part_3");

    if (glowMesh2) {
        glowMesh2.children.forEach(function (c) {
            if (c instanceof THREE.Mesh) {
                c.material.emissive.set("#00ff55");
                c.material.emissiveIntensity = 2;
            }
        });
    }

    return <primitive object={scene} />;
}

function ThreeDScene() {
    return (
        <Canvas>
            <RoseModel />
        </Canvas>
    );
}

export default ThreeDScene;
