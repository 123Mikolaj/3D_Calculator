import Display from '../../src/components/Display';

describe('Display', () => {
    let display;
    let app;

    beforeEach(() => {
        app = { setVariables: jest.fn() };
        display = new Display();
    });

    test('should set text correctly', () => {
        display.setText(app, '123');
        expect(display.getText()).toBe('123');
        expect(app.setVariables).toHaveBeenCalledWith({ textDisplay: '123' });
    });

    test('should clear text', () => {
        display.setText(app, '123');
        display.clearText();
        expect(display.getText()).toBe('');
    });

    test('should get current text', () => {
        display.setText(app, '456');
        expect(display.getText()).toBe('456');
    });
});
