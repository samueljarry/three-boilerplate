import {OrthographicCamera, PerspectiveCamera} from 'three';
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

        //this.setPerspectiveCamera()
        this.setOrthographicCamera()
        this.setOrbitControls()
    }

    setOrthographicCamera()
    {
        this.instance = new OrthographicCamera(
            this.sizes.width / -2,
            this.sizes.width / 2,
            this.sizes.height / 2,
            this.sizes.height / - 2
        )

        this.instance.position.set( 0, 0, 8 )
        this.instance.zoom = 70
        this.instance.updateProjectionMatrix()

        this.scene.add(this.instance)
    }

    setPerspectiveCamera()
    {
        this.instance = new PerspectiveCamera(
            75, // fov
            this.sizes.width / this.sizes.height, // aspect
            0.1, // near
            2000) // far

        this.instance.position.set( 0, 0, 8 )
        this.instance.updateProjectionMatrix()

        this.scene.add(this.instance)
    }

    setOrbitControls()
    {
        // Init camera controls
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true // Smoother orbit
    }

    resize()
    {
        // Preserve aspect ratio when resizing
        if(this.instance.isPerspectiveCamera)
        {
            this.instance.aspect = this.sizes.width / this.sizes.height
        }
        else if(this.instance.isOrthographicCamera)
        {
            this.instance.left = this.sizes.width / -2
            this.instance.right = this.sizes.width / 2
            this.instance.top = this.sizes.height / 2
            this.instance.bottom = this.sizes.height / -2
        }
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        // Update camera position at each frame
        this.controls.update()
    }
}