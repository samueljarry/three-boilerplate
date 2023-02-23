import Experience from "../Experience.js";
import {AmbientLight, BoxGeometry, Mesh, MeshStandardMaterial, PointLight} from "three";

export default class Environment
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time

        this.setAmbientLight()
        this.setPointLight()
    }

    setPointLight()
    {
        this.pointLight = new PointLight()
        this.pointLight.position.set(10,10,10)
        this.scene.add(this.pointLight)
    }

    setAmbientLight()
    {
        this.ambientLight = new AmbientLight()
        this.scene.add(this.ambientLight)
    }

    update()
    {
    }
}