# 3D Calculator Project (TDD Driven Development)

## Table of Contents

- [Application Links](#application-links)

- [General Overview](#general-overview)

- [Class and Method Responsibilities](#class-and-method-responsibilities)

- [Technologies Used](#technologies-used)

- [Unit Testing (TDD Approach)](#unit-testing-tdd-approach)

- [Class Structure](#class-structure)

## Application Links

- **Repository:** [Link do projektu](#) <!-- Podaj link do repozytorium -->

- **Live Demo:** [Link do wersji live](#) <!-- Podaj link do wersji live -->

## General Overview

3D Calculator is an interactive 3D model-based calculator that performs basic mathematical operations such as addition, subtraction, multiplication, and division. The user interface is built with Spline, responding to mouse clicks. Results are displayed on a small screen within the 3D model.

Users can input numbers and operators by clicking the appropriate 3D buttons that simulate a traditional calculator keypad. The program allows for a maximum of 9 characters on the display, and if the input exceeds this limit, the text will scroll horizontally, ensuring that all entered data remains visible.

![3D Calculator Screenshot](public/assets/3d_calculator.jpg)

## Class and Method Responsibilities

### Classes

1. **App**

   **Responsibilities:**

   - Initialize the application and load the 3D model.

   - Manage the interaction between the user interface (3D model) and the logic (Calculator and Display).

   - Set up event listeners for mouse clicks on the 3D model.

   - Pass data between the `Keypad3D`, `Display`, and `Calculator` components.

   **Methods:**

   - `initialize()` – Initializes the application and loads the 3D model.

2. **Calculator**

   **Responsibilities:**

   - Perform calculation logic.

   - Store current result.

   - Handle number and operator inputs.

   **Methods:**

   - `add()` – Adds two numbers.

   - `subtract()` – Subtracts one number from another.

   - `multiply()` – Multiplies two numbers.

   - `divide()` – Divides one number by another.

   - `sqrt()` – Calculates the square root of a number.

   - `power()` – Raises a number to a power.

   - `equals()` – Evaluates the current operation.

   - `percent()` – Calculates percentages.

   - `changeSign()` – Changes the sign of the current number.

   - `clear()` – Resets the calculator.

   - `delete()` – Deletes the last entered character.

   - `getResult()` – Retrieves the current result.

3. **Display**

   **Responsibilities:**

   - Show current result and input text.

   - Limit the number of characters to 9 and enable scrolling for overflow text.

   **Methods:**

   - `setText(text)` – Sets text on the display.

   - `clearText()` – Clears text from the display.

   - `getText()` – Retrieves current text from the display.

4. **Keypad3D**

   **Responsibilities:**

   - Manage interactions with the 3D keypad.

   - Pass data to the Calculator class after key clicks.

   **Methods:**

   - `handleMouseDown(event)` - Handles mouse presses

   - `handleKeyPress(key)` – Handles key presses.

   - `mapKeyToValue(key)` – Maps the clicked key to its corresponding value.

## Technologies Used

- **JavaScript (Vanilla JS)** – Core logic and interactivity.

- **Spline** – 3D model design and interaction.

- **Jest** – Unit testing framework.

- **HTML/CSS** – Structure and styling of the application.

## Unit Testing (TDD Approach)

**Description:**

This project follows the Test-Driven Development (TDD) methodology. Each class and method has corresponding unit tests to ensure functionality is thoroughly tested before implementation.

**Testing Goals:**

- Ensure the calculator performs accurate arithmetic operations.

- Validate that the display limits input to 9 characters and scrolls when necessary.

- Test edge cases, such as division by zero.

- Confirm that the 3D keypad correctly maps key presses to calculations.

**Test Coverage:**

- App Initialization and 3D Model Loading

- Calculator Arithmetic Operations

- Display Text Management and Scrolling

- Keypad3D Key Mapping and Interactions

## Class Structure

- **App**

  - `initialize()`

- **Calculator**

  - `calculateArithmeticOperations()`, `calculate()`, `calculateDivision()`, `calculateSquareRoot()`, `calculatePercentage()`, `equals()`, `toggleSign()`, `clear()`, `clearEntry()`

- **Display**

  - `setText(text)`, `clearText()`, `getText()`

- **Keypad3D**
  - `handleMouseDown(event)`, `handleKeyPress(key)`, `mapKeyToValue(key)`
