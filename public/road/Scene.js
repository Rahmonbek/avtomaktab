/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: jimbogies (https://sketchfab.com/jimbogies)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/american-road-intersection-4db8a073e970450aa4f0cfd3ee00d84c
title: American Road Intersection
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[119.82, -747.83, 80.33]} rotation={[1.45, 0.08, 0.01]} />
        <mesh geometry={nodes.Material2.geometry} material={materials.AsphaltYellow04} />
        <mesh geometry={nodes.Material2_1.geometry} material={materials.Concrete05} />
        <mesh geometry={nodes.Material2_2.geometry} material={materials.Grass02} />
        <mesh geometry={nodes.Material2_3.geometry} material={materials.AsphaltWhite04} />
        <mesh geometry={nodes.Material2_4.geometry} material={materials.Asphalt04} />
        <mesh geometry={nodes.Material2_5.geometry} material={materials.Sidewalk01} />
        <mesh geometry={nodes.Material2_6.geometry} material={materials['Metal21-basecolor']} />
        <mesh geometry={nodes.Material2_7.geometry} material={materials.Stop} />
        <mesh geometry={nodes.Material3.geometry} material={materials.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
