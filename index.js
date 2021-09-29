const isNumRecursion = (input, keypad, result = '') => {
    let char = input.slice(0,1)
    let numbers = ''
    if(!isNaN(parseInt(char))){
        numbers = char.toString()
    }
    if(keypad === true && isNaN(parseInt(char))){
        let lowerCaseChar = char.toLowerCase()
        if(["a", "b", "c"].indexOf(lowerCaseChar) !== -1){
            numbers = 2
        }
        if(["d", "e", "f"].indexOf(lowerCaseChar) !== -1){
            numbers = 3
        }
        if(["g", "h", "i"].indexOf(lowerCaseChar)!==-1){
            numbers = 4
        }
        if(["j", "k", "l"].indexOf(lowerCaseChar) !== -1){
            numbers = 5
        }
        if(["m", "n", "o"].indexOf(lowerCaseChar) !== -1){
            numbers = 6
        }
        if(["p", "q", "r","s"].indexOf(lowerCaseChar) !== -1){
            numbers = 7
        }
        if(["t", "u", "v"].indexOf(lowerCaseChar) !== -1){
            numbers = 8
        }
        if(["w", "x", "y","z"].indexOf(lowerCaseChar) !== -1){
            numbers = 9
        }
    }
    if(input.length > 0){
       return isNumRecursion(input.slice(1), keypad, `${result}${numbers}` )
    } else {
        return result.split('')
    }
}

const phoneNumResult = (numArray, value = [], isReactApp) => {
    const currNum = numArray.shift()
    const octothorpIndex = value.indexOf('#')
    if(octothorpIndex !== -1){
        value.splice(octothorpIndex,1, currNum)
    }
    if(numArray.length === 0 && value.indexOf("#") !== -1 && isReactApp){
        console.log("here")
        return value.join("").split("#")[0]
    }
    if(numArray.length === 0 || octothorpIndex === -1){
        return value.join('')
    }
    return phoneNumResult(numArray, value, isReactApp)
}


const formatNumEntry = (inputString, formatTemplate = "(###) ###-####", keypadBool = false, isReactApp = false) => {
    let phoneNum = inputString
    let template = formatTemplate == null ? ("(###) ###-####").split("") : formatTemplate.split("")
    let keypad = keypadBool
    if(typeof keypad !== "boolean"){
        keypad = false
    }
    if(typeof phoneNum !== "string" && typeof phoneNum !== "number" || phoneNum == null || phoneNum==false){
        return "Error: Input must be a string or number"
    }
    if(typeof phoneNum === "number"){
        phoneNum = phoneNum.toString()
    }
    const parsedPhoneNum = isNumRecursion(phoneNum, keypad)
    const formatTele = phoneNumResult(parsedPhoneNum, template, isReactApp)
    return(formatTele)
}

const allDigitsEntered = (input) => {
    if(typeof input !== "string" && typeof input !== "number" || input == null || input == false ){
        return false
    }
    console.log(input)
    return input.toString().split("").indexOf('#') === -1
}

module.exports = {formatNumEntry, allDigitsEntered}