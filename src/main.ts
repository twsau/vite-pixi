import { Application } from "pixi.js";
import { Example } from "./Objects/example";

const app = new Application({
  antialias: true,
  background: "#222",
});

const example = new Example();
example.position.set(app.screen.width / 2, app.screen.height / 2);
app.stage.addChild(example);

app.ticker.add((delta) => {
  example.update(delta);
});

document.body.appendChild(app.view);
