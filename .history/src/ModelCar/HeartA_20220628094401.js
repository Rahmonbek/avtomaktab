/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Azamuki (https://sketchfab.com/Azamuki)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/heart-in-love-f39ce19b92e246268f4c501b72ea7d0e
title: Heart in Love
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/heart/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={0.006}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.Heart_Heart_0.geometry} material={materials.Heart} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.Marble_Marble_0.geometry} material={materials.Marble} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/heart/scene.gltf')
