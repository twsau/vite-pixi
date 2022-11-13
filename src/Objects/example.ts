import { Graphics } from "pixi.js";

export class Example extends Graphics {
  constructor() {
    super();
    this.beginFill(0x00ffff).drawRect(-50, -50, 100, 100).endFill();
  }

  update(delta: number) {
    this.rotation += 0.01 * delta;
  }
}
