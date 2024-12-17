# Sleep Tracker

## Overview

This JavaScript program helps users track their sleep hours for each day of the week, calculates the total actual sleep hours, compares them with the ideal sleep hours, and logs the sleep debt. The program provides insights into whether the user got enough sleep, too much sleep, or needs more rest.

## Functionality

- 🛏️ **`getSleepHours(day)`**: Returns the actual sleep hours for each day of the week based on the input day.
- 💤 **`getActualSleepHours()`**: Calculates the total actual sleep hours for the entire week.
- 🌙 **`getIdealSleepHours(idealHoursPerNight)`**: Calculates the ideal sleep hours for the week based on the input number of hours per night.
- 📊 **`calculateSleepDebt()`**: Compares the actual sleep hours to the ideal sleep hours and logs the result:
  - If the user got the ideal amount of sleep.
  - If the user got more sleep than needed.
  - If the user needs more sleep.

## Code Breakdown

- **`getSleepHours(day)`**: This function returns the actual number of sleep hours for a given day of the week. Each day has predefined sleep hours based on a typical schedule.
- **`getActualSleepHours()`**: This function sums up the sleep hours for each day of the week to get the total actual sleep hours.
- **`getIdealSleepHours(idealHoursPerNight)`**: This function multiplies the provided ideal sleep hours per night by 7 (days in a week) to calculate the total ideal sleep hours for the week.
- **`calculateSleepDebt()`**: This function compares the actual and ideal sleep hours, logging whether the user got the right amount of sleep, more, or less.

## Example Output

The program logs the user's sleep debt, indicating whether the user needs more rest or has exceeded their ideal sleep goal. For example:

```
User should get some rest: 3 more hours.
```

### How it Works:

- 🛌 `getSleepHours()` returns the sleep hours for a specific day.
- 📅 `getActualSleepHours()` calculates the total sleep hours for the week.
- 🌙 `getIdealSleepHours()` calculates the total ideal sleep hours based on input.
- 📊 `calculateSleepDebt()` checks if the user got the right amount of sleep and logs the difference.

## Installation

To run this code, follow these steps:

1. **Clone or download the repository**:
   You can download the JavaScript file or clone the repository to your local machine.

2. **Run the code**:
   Open the `.js` file in any JavaScript environment (e.g., your browser's developer console or Node.js).

3. **View the results**:
   After running the function `calculateSleepDebt()`, the console will log whether you need more rest or if you have exceeded your ideal sleep goal.

## Customization

- You can adjust the sleep hours for each day of the week in the `getSleepHours()` function.
- You can modify the ideal sleep hours by passing a different value to the `calculateSleepDebt()` function.

## License

This project is open source and available under the [MIT License](LICENSE).
