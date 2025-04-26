
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


type ModelProps = {
	url: string,
}


function Model({ url }: ModelProps) {

	const gltf = useLoader(GLTFLoader, url)
	return <primitive object={gltf.scene} />

}