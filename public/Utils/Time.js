import EventEmitter from "./EventEmitter.js";
import {Clock} from "three";

export default class Time extends EventEmitter
{
    constructor()
    {
        super()

        this.clock = new Clock()

        window.requestAnimationFrame(() => this.tick())
    }

    tick()
    {
        const currentTime = Date.now()
        this.delta = currentTime - this.current // Delta Time
        this.current = currentTime // Current Time

        this.elapsed = this.clock.getElapsedTime() // Elapsed Time

        this.trigger('tick')
        window.requestAnimationFrame(() => this.tick())
    }
}