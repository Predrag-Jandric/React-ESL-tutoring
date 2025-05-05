// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { useRef, forwardRef } from "react";
// import { motion } from "framer-motion";
// import { heroVariants } from "../../../utils/animations";

// model component to load 3D object from GLTF file
// const Model = forwardRef((props, ref) => {
//   const { scene } = useGLTF("/assets/hero/react_logo2.glb");
//   return <primitive object={scene} ref={ref} {...props} />;
// });

// Model.displayName = "Model";

// rotatingModel component for rotation animation
// function RotatingModel() {
//   const modelRef = useRef();

//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y -= 0.007; // rotation speed
//     }
//   });

//   return <Model ref={modelRef} />;
// }

// export default function ThreeDObject() {
//   return (
//     <motion.div
//       initial={heroVariants.initial}
//       animate={heroVariants.animate}
//       transition={{ duration: 0.5, delay: 1 }}
//       className="relative mb-10 size-80 md:mb-0 lg:size-96" // make it a relative container for overlay
//     >
//       {/* 3D Canvas */}
//       <Canvas className="absolute inset-0">
//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />
//         <RotatingModel />
//         <OrbitControls
//           enablePan={false}
//           enableZoom={false}
//           enableRotate={true}
//           rotateSpeed={0.1}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//       </Canvas>

//       {/* transparent overlay div */}
//       <div className="absolute inset-0 z-10">
//         {/* can add more UI elements here if needed */}
//       </div>
//     </motion.div>
//   );
// }
