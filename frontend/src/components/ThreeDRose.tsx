import { Canvas } from "@react-three/fiber";
import { useGLTF, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function RoseModel() {
    const { scene } = useGLTF("assets/Rose3.gltf");
}

function ThreeDScene() {
    return <Canvas></Canvas>;
}

export default ThreeDScene;
