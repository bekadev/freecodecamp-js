// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132


function validatePIN (pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false
  }

  for (let i = 0; i < pin.length; i++){
    if(!'1234567890'.includes(pin[i])){
      return false

    }
  }

  return true
}