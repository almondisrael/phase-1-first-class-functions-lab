// 1. returnFirstTwoDrivers - returns first two drivers in the array
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. returnLastTwoDrivers - returns last two drivers in the array
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. selectingDrivers - array containing the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. createFareMultiplier - higher-order function that returns a multiplier function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. fareDoubler - function that doubles a fare
const fareDoubler = createFareMultiplier(2);

// 6. fareTripler - function that triples a fare
const fareTripler = createFareMultiplier(3);

// 7. selectDifferentDrivers - selects first or last two drivers based on passed function
function selectDifferentDrivers(drivers, driverSelectorFunction) {
  return driverSelectorFunction(drivers);
}

