class Keypad3D {
  constructor(app, display, calculator) {
    this.app = app;
    this.display = display;
    this.calculator = calculator;
  }

  handleMouseDown(event) {
    const keyName = event.target ? event.target.name : '';
    const textInput = this.app.findObjectByName('textInput');

    if (textInput) {
      console.log(`Key pressed: ${keyName}`);
      this.handleKeyPress(keyName);
    } else {
      console.log("Text field not found.");
    }
  }

  handleKeyPress(keyName) {
    let newText = '';
    const currentText = this.display.getText();

    switch (keyName) {
      case 'Key 1':
      case 'Key 2':
      case 'Key 3':
      case 'Key 4':
      case 'Key 5':
      case 'Key 6':
      case 'Key 7':
      case 'Key 8':
      case 'Key 9':
      case 'Key 0':
        newText = keyName.split(' ')[1];
        break;

      case 'Key +':
      case 'Key -':
      case 'Key x':
      case 'Key /':
        newText = ` ${keyName.split(' ')[1]} `;
        break;

      case 'Key =':
        try {
          const result = this.calculator.calculate(currentText);
          this.display.setText(this.app, result.toString());
        } catch (e) {
          console.error(e.message); // Komunikat błędu w konsoli
          this.display.setText(this.app, 'Error'); // Wyświetl komunikat na display
        }
        return;

      case 'Key C':
      case 'Key CE':
        this.calculator.clear();
        this.display.setText(this.app, '0');
        return;

      case 'Key +/-':
        const toggleSignExpression = `${currentText} +/-`;
        const result = this.calculator.calculate(toggleSignExpression);
        this.display.setText(this.app, result.toString());
        return;

      case 'Key %':
        const percentExpression = currentText + '%';
        const percentResult = this.calculator.calculate(percentExpression);
        this.display.setText(this.app, percentResult.toString());
        return;

      case 'Key pow':
        const powResult = this.calculator.calculate('pow(' + currentText + ')');
        this.display.setText(this.app, powResult.toString());
        return;

      case 'Key sqrt':
        try {
          const sqrtResult = this.calculator.calculate('sqrt(' + currentText + ')');
          this.display.setText(this.app, sqrtResult.toString());
        } catch (e) {
          console.error(e.message);
          this.display.setText(this.app, 'Error');
        }
        return;
        

      case 'Key ,':
        if (!currentText.includes('.')) {
          this.display.setText(this.app, currentText + '.');
        }
        return;

      case 'Key Backspace':
        console.log('Backspace pressed');
        if (currentText.length > 1) {
          this.display.setText(this.app, currentText.slice(0, -1));
        } else {
          this.display.setText(this.app, '0');
        }
        return;

      default:
        newText = '';
    }

    if (currentText === '0') {
      this.display.setText(this.app, newText.trim());
    } else {
      this.display.setText(this.app, currentText + newText.trim());
    }

    console.log(`Text content changed to: '${this.display.currentText + newText}'`);
  }

  mapKeyToValue(keyName) {
    const keyMapping = {
      'Key 1': '1',
      'Key 2': '2',
      'Key 3': '3',
      'Key 4': '4',
      'Key 5': '5',
      'Key 6': '6',
      'Key 7': '7',
      'Key 8': '8',
      'Key 9': '9',
      'Key 0': '0',
      'Key +': ' + ',
      'Key -': ' - ',
      'Key x': ' * ',
      'Key /': ' / ',
      'Key =': '=',
      'Key C': 'C',
      'Key CE': 'CE',
      'Key +/-': '+/-',
      'Key %': '%',
      'Key pow': 'pow',
      'Key sqrt': 'sqrt',
      'Key ,': ',',
      'Key Backspace': 'Backspace',
    };

    return keyMapping[keyName] || '';
  }
}

export default Keypad3D;
