const roundOneDecimalPlaces = function(number) {
  return Math.round((number + Number.EPSILON) * 10) / 10
};

const convertToCelsius = function(temp) {
  return roundOneDecimalPlaces((temp - 32) * 5 / 9);
};

const convertToFahrenheit = function(temp) {
  return roundOneDecimalPlaces(temp * 9 / 5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
