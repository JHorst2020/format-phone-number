# format-number-entry

Format-number-entry provides a quick way to convert a string into a formatted telephone number. It also provides a way to convert an alphanumeric string into a normal phone number (eg 1-800-CALL-ATT into 1-800-225-5288). 

However, this package is not limited to telephone numbers only. It will accept any string and convert it into any template that you enter. 

## Installation

```bash
npm install format-number-entry
```

## Usage

```javascript
const {formatNumEntry, allDigitsEntered} = require ('format-number-entry')

// Convert String or Number
formatNumEntry("555.222.0000") // Returns (555) 222-0000

// Convert ANY String with ANY Template
formatNumEntry(111223333, "###-##-####") // Returns 111-22-3333

// Convert String or Number with Template
formatNumEntry(0555222000, "###-###-####") // Returns 555-222-0000

// Convert Keypad Entry with Template 
formatNumEntry("800CALLATT", "###.###.####", true) // Returns 800.225.5288

// Verify that Enough Digits have been Entered
allDigitsEntered("(555) 222-#### ") // Returns false
allDigitsEntered("(555) 222-0000 ") // Returns true
```
## Variables

```javascript
formatNumEntry(input, template, keypad, isReactApp)
// input: String or Number input.
// template: String containing octothorps (#).      Default --> "(###) ###-####"
// keypad: Boolean.                                 Default --> false
// isReactApp: Boolean. Trims off the trailing octothorp when set to true. Default ==> false
// returns string

allDigitsEntered(input)
// input: String or Number input
// returns boolean --> false indicates not enough digits have been entered

```
## Edge Cases / Good-to-Know

```javascript
// Too many digits
formatNumEntry(999111111111111111,"###-####") // Returns 999-1111

// Not enough digits
formatNumEntry(1234) // Returns (123) 4##-####

// No octothorps in template
formatNumEntry("555 2222", "xxx-xxxx") // Returns xxx-xxxx

// Not Indicating a Keypad Entry
formatNumEntry("800CALLATT", null, false) // Returns (800) ###-####

// Leading Zeros
formatNumEntry(0001112222) // Returns (000) 111-2222

// No input
formatNumEntry() // Returns "Error: Input must be a string or number"
```
