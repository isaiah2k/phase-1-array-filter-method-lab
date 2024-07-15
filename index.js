// Filters an array of driver names to find exact matches
const findMatching = (drivers, name) => {
  // Returns an array of matching driver names 
  return drivers.filter(driver => 
    // Converts both the driver name and the search letters to lowercase and checks if the driver name starts with the given letters
    driver.toLowerCase() === name.toLowerCase())
}

// Filters an array of driver names to find those that start with a given string of letters
const fuzzyMatch = (drivers, letters) => {
  // Returns an array of driver names that start with the provided letters
  return drivers.filter(driver => 
    // Converts both the driver name and the search letters to lowercase and checks if the driver name starts with the given letters
    driver.toLowerCase().startsWith(letters.toLowerCase()))
}

// Filters an array of driver objects to find those with a `name` property that exactly matches a given name
const matchName = (drivers, name) => {
  // Returns an array of driver objects with a matching `name` property
  return drivers.filter(driver =>
    // Converts both the driver name and the search letters to lowercase and checks if the driver name starts with the given letters
    driver.name.toLowerCase() === name.toLowerCase())
}