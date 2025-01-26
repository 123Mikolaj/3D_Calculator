import Keypad3D from '../../src/components/Keypad3D';

describe('Keypad3D', () => {
    let keypad;

    beforeEach(() => {
        keypad = new Keypad3D();
    });

    test('should map key to correct value', () => {
        expect(keypad.mapKeyToValue('Key 1')).toBe('1');
        expect(keypad.mapKeyToValue('Key 2')).toBe('2');
        expect(keypad.mapKeyToValue('Key C')).toBe('C');
    });    

    test('should handle key press correctly', () => {
        const mockHandleKeyPress = jest.fn();
        keypad.handleKeyPress = mockHandleKeyPress;

        keypad.handleKeyPress('1');
        expect(mockHandleKeyPress).toHaveBeenCalledWith('1');
    });
});
