# format-telephone

Format-telephone provides a quick way to convert a string into a formatted telephone number. It also provides a way to convert an alphanumeric string into a normal phone number (eg 1-800-CALL-ATT into 1-800-225-5288). 

## Installation

```bash
npm install format-telephone
```

## Usage

```javascript
const {formatPhoneNum, allDigitsEntered} = require ('format-telephone')

// Convert String or Number
formatPhoneNum("5552220000") // Returns (555) 222-0000

// Convert String or Number with Template
formatPhoneNum("5552220000", "###-###-####") // Returns 555-222-0000

// Convert Keypad Entry with Template 
formatPhoneNum("800CALLATT", "###.###.####", true) // Returns 800.225.5288

// Verify that Enough Digits have been Entered
allDigitsEntered("(555) 222-#### ") // Returns false
allDigitsEntered("(555) 222-0000 ") // Returns true
```
## Variables

```javascript
formatPhoneNum(input, template, keypad)
// input: String or Number input.
// template: String containing octothorps (#).      Default --> "(###) ###-####"
// keypad: Boolean.                                 Default --> false
// returns string

allDigitsEntered(input)
// input: String or Number input
// returns boolean --> false indicates not enough digits have been entered

```
## Edge Cases

```javascript
// Too many digits
formatPhoneNum(999111111111111111,"###-####") // Returns 999-1111

// Not enough digits
formatPhoneNum(1234) // Returns (123) 4##-####

// No octothorps in template
formatPhoneNum("555 2222", "xxx-xxxx") // Returns xxx-xxxx

// Not Indicating a Keypad Entry
formatPhoneNum("800CALLATT", null, false) // Returns (800) ###-####
```



## License
[MIT](https://choosealicense.com/licenses/mit/)