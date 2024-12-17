// Function to return sleep hours for each day
const getSleepHours = (day) => {
  switch (day.toLowerCase()) {
    case "monday":
      return 8;
    case "tuesday":
      return 4;
    case "wednesday":
      return 9;
    case "thursday": // Fixed typo here
      return 10;
    case "friday":
      return 11;
    case "saturday":
      return 6;
    case "sunday":
      return 5;
    default:
      return 0; // Added default case to handle invalid inputs
  }
};

// Function to calculate the total actual sleep hours for the week
const getActualSleepHours = () => {
  return 8 + 4 + 9 + 10 + 11 + 6 + 5; // Literal values added up directly
};

// Function to calculate the ideal sleep hours for the week based on input hours per night
const getIdealSleepHours = (idealHoursPerNight) => {
  return idealHoursPerNight * 7; // Ideal sleep hours per week based on the input value
};

// Function to calculate sleep debt and log the result
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8); // Pass the ideal hours per night (e.g., 8 hours)

  // Check if the user got the ideal amount of sleep
  if (actualSleepHours === idealSleepHours) {
    console.log(
      "The user got a perfect amount of sleep: " +
        (actualSleepHours - idealSleepHours) +
        " hours."
    );
  }

  // Check if the user got more sleep than needed
  if (actualSleepHours > idealSleepHours) {
    console.log(
      "The user got more sleep than needed: " +
        (actualSleepHours - idealSleepHours) +
        " hours."
    );
  }

  // Check if the user needs more sleep
  if (actualSleepHours < idealSleepHours) {
    console.log(
      "User should get some rest: " +
        (idealSleepHours - actualSleepHours) +
        " more hours."
    );
  }
};

// Run the function
calculateSleepDebt();
