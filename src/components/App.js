import { Application } from 'https://unpkg.com/@splinetool/runtime@1.9.48/build/runtime.js';
import Calculator from './Calculator.js';
import Display from './Display.js';
import Keypad3D from './Keypad3D.js';

class App {
  constructor() {
    this.canvas = document.getElementById('canvas3d');
    this.app = new Application(this.canvas);

    this.calculator = new Calculator();
    this.display = new Display(this.app);
    this.keypad3d = new Keypad3D(this.app, this.display, this.calculator);
  }

  initialize() {
    this.app.load('https://prod.spline.design/yAsSiPBQjdkhtTcP/scene.splinecode').then(() => {
      this.app.setVariables({ textDisplay: '0' });
      console.log("Model 3D załadowany i zmienna textDisplay ustawiona.");

      this.app.addEventListener('mouseDown', this.keypad3d.handleMouseDown.bind(this.keypad3d));
    });
  }
}

export default App;
