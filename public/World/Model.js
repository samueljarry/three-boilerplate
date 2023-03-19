import Experience from "../Experience.js";
import { MeshPhysicalMaterial } from "three";

export default class Model
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.resource = this.resources.items.logo.scene

        this.setInstance()
    }

    setInstance()
    {
        this.resource.scale.set( 0.3, 0.3, 0.3 )

        this.resource.traverse(child =>
        {
            if(child.isMesh) child.material =
                new MeshPhysicalMaterial(
                    {
                        color: 0x010101,
                        iridescence: 1,
                        iridescenceIOR: 1,
                        iridescenceThicknessRange: [100, 500]
                    })
        })

        this.scene.add(this.resource)
    }

    update()
    {
        this.resource.rotation.y = this.time.elapsed
    }
}