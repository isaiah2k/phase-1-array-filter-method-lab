const findMatching = (drivers, name) => {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = (drivers, letters) => {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()))
}

const matchName = (drivers, name) => {
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase())
}