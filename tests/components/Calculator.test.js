import Calculator from '../../src/components/Calculator';
import Display from '../../src/components/Display'; 

describe('Calculator', () => {
  let calculator;
  let display;

  beforeEach(() => {
    display = new Display(); 
    calculator = new Calculator(display); 
  });

  /* ADD */
  test('should add two numbers', () => {
    calculator.calculate('1 + 2');
    expect(calculator.equals()).toBe(3);
  });

  /* SUBTRACT */
  test('should subtract two numbers', () => {
    calculator.calculate('5 - 2');
    expect(calculator.equals()).toBe(3);
  });

  /* MULTIPLY */
  test('should multiply two numbers', () => {
    calculator.calculate('2 * 3');
    expect(calculator.equals()).toBe(6);
  });

  /* DIVIDE */
  test('should divide two numbers', () => {
    calculator.calculate('6 / 2');
    expect(calculator.equals()).toBe(3);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => calculator.calculate('6 / 0')).toThrow('Cannot divide by zero');
  });

  test('should throw an error when dividing by NaN', () => {
    expect(() => calculator.calculate('6 / NaN')).toThrow('Cannot divide by NaN');
  });

  /* SQUARE ROOT */
  test('should calculate square root', () => {
    calculator.calculate('sqrt(9)');
    expect(calculator.equals()).toBe(3);
  });

  test('should throw an error for negative square root', () => {
    expect(() => calculator.calculate('sqrt(-9)')).toThrow('Cannot calculate square root of a negative number');
  });

  test('should throw an error for NaN square root', () => {
    expect(() => calculator.calculate('sqrt(NaN)')).toThrow('Invalid input for square root');
  });

  /* GET RESULT WITHOUT OPERATION */
  test('should return 0 when no operation is set', () => {
    expect(calculator.equals()).toBe(0);
  });

  /* PERCENT */
  test('should calculate percentages', () => {
    calculator.calculate('200%');
    expect(calculator.equals()).toBe(2);
  });

/* CHANGE SIGN */
test('should change the sign of the current number', () => {
  calculator.calculate('200');
  calculator.calculate('200 +/-');

  expect(calculator.equals()).toBe(-200);
});


/* CLEAR */
test('should clear the calculator', () => {
  calculator.calculate('5 + 3');
  calculator.clear();
  
  expect(calculator.equals()).toBe(0);
});

/* CLEAR ENTRY (CE) */
test('should reset the current entry', () => {
  calculator.calculate('5 + 3');
  calculator.clearEntry();
  
  expect(calculator.equals()).toBe(0);
});

});
