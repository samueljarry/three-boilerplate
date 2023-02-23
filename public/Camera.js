import { PerspectiveCamera } from 'three';
import Experience from "./Experience.js";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

export default class Camera
{
    constructor()
    {
        this.experience = new Experience() // Global access
        this.scene = this.experience.scene
        this.sizes = this.experience.sizes
        this.canvas = this.experience.canvas

        this.setInstance()
        this.setOrbitControls()
    }

    setInstance()
    {
        this.instance = new PerspectiveCamera(
            75, // fov
            this.sizes.width / this.sizes.height, // aspect
            0.1, // near
            2000) // far

        this.instance.position.set( 0, 0, 8 )
        this.scene.add(this.instance)

        this.instance.updateProjectionMatrix()
    }

    setOrbitControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true // Smoother orbit
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        this.controls.update()
    }
}