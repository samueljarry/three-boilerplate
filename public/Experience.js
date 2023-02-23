import { Scene } from "three";
import Camera from "./Camera.js";
import Sizes from "./Utils/Sizes.js";
import Renderer from "./Utils/Renderer.js";
import Time from "./Utils/Time.js";
import World from "./World/World.js";
import Resources from "./Utils/Resources.js";
import Sources from "./sources.js";

let instance = null

export default class Experience
{
    constructor(canvas)
    {
        // Prevent infinite draw calls when accessing Experience
        if(instance)
        {
            return instance
        }

        instance = this

        // Global access
        window.experience = this

        this.resources = new Resources(Sources)
        this.time = new Time()
        this.canvas = canvas
        this.sizes = new Sizes()
        this.scene = new Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        // Update viewport size based values on resize
        this.sizes.on('resize', () => this.resize() )

        // Time based functions
        this.time.on('tick', () => this.update())
    }

    resize()
    {
        this.camera.resize()
        this.renderer.resize()
    }

    update()
    {
        this.camera.update()
        this.world.update()
        this.renderer.update()
    }
}