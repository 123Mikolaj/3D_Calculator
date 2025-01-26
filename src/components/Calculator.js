class Calculator {
  constructor() {
    this.result = 0;
    this.entry = 0;
  }

  calculate(expression) {
    if (expression === '') {
      this.clear();
    } else if (expression === 'CE') {
      this.clearEntry();
    } else if (expression.includes('%')) {
      this.result = this.calculatePercentage(expression);
    } else if (expression.includes('+/-')) {  // Dodajemy obsługę zmiany znaku
      const value = parseFloat(expression.replace('+/-', '').trim());
      this.result = this.toggleSign(value);  // Zmieniamy znak
    } else if (expression.startsWith('sqrt')) {
      this.result = this.calculateSquareRoot(expression);
    } else if (expression.includes('/')) {
      this.result = this.calculateDivision(expression);
    } else {
      this.result = this.calculateArithmeticOperations(expression);
    }
    return this.result;
  }
  

// Obsługujemy wszystkie podstawowe operacje matematyczne
calculateArithmeticOperations(expression) {
  expression = expression.replace('x', '*');
  try {
    const result = eval(expression);

    return result;
  } catch (e) {
    throw new Error('Invalid input');
  }
}

  calculateDivision(expression) {
    if (expression.includes('/')) {
      const parts = expression.split('/');
      const numerator = parseFloat(parts[0].trim());
      const denominator = parseFloat(parts[1].trim());

      // Sprawdzamy przypadek dzielenia przez zero
      if (denominator === 0) {
        throw new Error('Cannot divide by zero');
      }

      // Sprawdzamy przypadek dzielenia przez NaN
      if (isNaN(numerator) || isNaN(denominator)) {
        throw new Error('Cannot divide by NaN');
      }

      return numerator / denominator;
    }

    return parseFloat(expression);
  }

  calculateSquareRoot(expression) {
    const value = parseFloat(expression.replace('sqrt(', '').replace(')', ''));
    
    // Sprawdzamy, czy wartość jest NaN
    if (isNaN(value)) {
      throw new Error('Invalid input for square root');
    }
  
    // Sprawdzamy, czy wartość jest ujemna
    if (value < 0) {
      throw new Error('Cannot calculate square root of a negative number');
    }
  
    return Math.sqrt(value);
  }
  
  calculatePercentage(expression) {
    // Usuwamy znak procentu i wykonujemy obliczenie
    const value = parseFloat(expression.split('%')[0].trim());
    return value / 100;
  }

  equals() {
    return this.result;
  }

  toggleSign(value) {
    return -value;
  }

  clear() {
    this.result = 0;
    this.entry = 0;
  }

  clearEntry() {
    this.result = 0;
    this.entry = 0;
  }
}

export default Calculator;
