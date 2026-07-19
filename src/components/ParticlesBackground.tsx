'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function generateParticles(count: number) {
  const positions = new Float32Array(count * 10);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;     // x
    positions[i * 3 + 1] = (Math.random() - 0.7) * 8; // y
    positions[i * 3 + 2] = (Math.random() - 0.7) * 10; // z
  }
  return positions;
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const count = 800;
  const positions = useMemo(() => generateParticles(count), []);

  // Rastreia o mouse na janela inteira (não depende do canvas ter pointer-events)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y += 0.0002;
    pointsRef.current.rotation.x += 0.0006;

    const targetX = mouse.current.y * 0.8;
    const targetY = mouse.current.x * 0.8;
    pointsRef.current.rotation.x += (targetX - pointsRef.current.rotation.x) * 0.01;
    pointsRef.current.rotation.y += (targetY - pointsRef.current.rotation.y) * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#ffffff"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticlesBackground() {
  return (
    // pointer-events-none garante que a section continue clicável/selecionável normalmente
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Particles />
      </Canvas>
    </div>
  );
}