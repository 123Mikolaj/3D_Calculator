import App from '../../src/components/App';
import Display from '../../src/components/Display';
import Calculator from '../../src/components/Calculator';

// Zamockowanie klasy Application z Spline
jest.mock('https://unpkg.com/@splinetool/runtime@1.9.48/build/runtime.js', () => {
    return {
      Application: jest.fn().mockImplementation(() => {
        return {
          load: jest.fn().mockResolvedValue(),
          setVariables: jest.fn(),
          addEventListener: jest.fn()
        };
      })
    };
  });
  
  describe('App', () => {
    let app;
  
    beforeEach(() => {
      // Tworzymy instancję klasy App przed każdym testem
      app = new App();
    });
  
    test('should initialize the app correctly', async () => {
      // Ustawienie mocków
      const setVariablesMock = jest.fn();
      const addEventListenerMock = jest.fn();
  
      // Zastępujemy metodę setVariables i addEventListener, żeby sprawdzić, czy zostały wywołane
      app.app.setVariables = setVariablesMock;
      app.app.addEventListener = addEventListenerMock;
  
      // Uruchamiamy metodę initialize
      await app.initialize();
  
      // Sprawdzamy, czy metoda load została wywołana raz
      expect(app.app.load).toHaveBeenCalledTimes(1);
      
      // Sprawdzamy, czy setVariables została wywołana z odpowiednimi argumentami
      expect(setVariablesMock).toHaveBeenCalledWith({ textDisplay: '0' });
  
      // Sprawdzamy, czy addEventListener zostało wywołane z odpowiednimi argumentami
      expect(addEventListenerMock).toHaveBeenCalledWith('mouseDown', expect.any(Function));
    });
  });
