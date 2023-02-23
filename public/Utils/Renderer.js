import {ACESFilmicToneMapping, sRGBEncoding, WebGLRenderer} from "three";
import Experience from "../Experience.js";

export default class Renderer
{
    constructor()
    {
        this.experience = new Experience() // Global Access

        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes

        this.setInstance()
    }

    setInstance()
    {
        this.instance = new WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        })
        this.instance.outputEncoding = sRGBEncoding
        this.instance.toneMapping = ACESFilmicToneMapping

        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }

    resize()
    {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }

    update()
    {
        this.instance.render(this.scene, this.camera.instance)
    }
}