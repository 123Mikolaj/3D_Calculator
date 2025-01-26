class Display {
  constructor() {
    this.currentText = '0';
  }

  setText(app, text) {
    this.currentText = text;
    app.setVariables({ textDisplay: this.currentText });
  }

  getText() {
    return this.currentText;
  }

  clearText() {
    this.currentText = '';
  }
}

export default Display;
