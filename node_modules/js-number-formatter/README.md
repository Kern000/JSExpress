# Number Formatter
#### A javascript module that scans through string to remove non-numerals and formats out any found numbers based on configuration passed to it.

# 💾 Setup
You need to have NodeJS installed on your computer before using <code>npm</code>.
Open a terminal/command prompt and enter the codes below to install the package:
```javascript
npm install js-number-formatter
```

# 🔨 Usage
```javascript
// -- Require the module
const { JS_NumberFormat } = require('js-number-formatter')

const value = '3.142857'

const options = {
  // ... check the parameters section for more info on options
}

// -- Call function and pass the value to format and options to it or just the value
JS_NumberFormat(value, options)
```

# 📙 Parameters
<table>
  <thead>
    <td>Parameter</td>
    <td>Description</td>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>The value to format which can be a number or string</td>
    </tr>
    <tr>
      <td>options</td>
      <td>
        <ul>
          <li>
            <code>op_ReturnZeroIfNoDigit</code><br/>
            <b>true</b> by default<br/>
            Returns zero '0' if string contains no digits
          </li>
          <li>
            <code>op_ReturnAbsoluteNumber</code><br/>
            <b>true</b> by default<br/>
            Return the absolute number without possible preceeding zeros '0'
          </li>
          <li>
            <code>op_AllowSign</code><br/>
            <b>true</b> by default<br/>
            Allows sign (-) if true, removes any present sign if false
          </li>
          <li>
            <code>op_AllowDecimal</code><br/>
            <b>true</b> by default<br/>
            If decimal should be allowed or not
          </li>
          <li>
            <code>op_ForceDecimal</code><br/>
            <b>true</b> by default<br/>
            Forces decimal even if string contains no decimal points (but only if op_AllowDecimal is true)
          </li>
          <li>
            <code>op_AppendZeroToDecimal</code><br/>
            <b>true</b> by default<br/>
            Appends zero '0' to result if just one digit is found after the last decimal point
          </li>
          <li>
            <code>op_DecimalDelimiterChar</code><br/>
            <b>'.'</b> by default<br/>
            Character to use im place of the decimal period symbol
          </li>
          <li>
            <code>op_DelimiterChar</code><br/>
            <b>','</b> by default<br/>
            Thousands separator
          </li>
          <li>
            <code>op_AddSpaceToDelimiter</code><br/>
            <b>false</b> by default<br/>
            Thousands character spacing with ' '
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

# 🎨 Examples
```javascript
JS_NumberFormat(3892) // Result: 3,892.00

JS_NumberFormat('140hajs7') // Result: 1,407.00

JS_NumberFormat("you can't be serious ...") // Result: 0

JS_NumberFormat("Hello World 20-06-2019", {
  op_AllowSign: false
}) // Result: 20,062,019.00

JS_NumberFormat('-00034dj^nkjlsd$knls4h%bj.34.5', {
  // -- Returns zero '0' if string contains no digits
  // default: true, [test: '-00034.dj^nkjls.d$knls.4h%bj345' | true: -34.4345 | false: -34.4345]
  op_ReturnZeroIfNoDigit: true,
  // -- Return the absolute number without possible preceeding zeros '0'
  // default: true, [test: '-00034.dj^nkjls.d$knls.4h%bj345' | true: -34.4345 | false: -00,034.4345]
  op_ReturnAbsoluteNumber: true,
  // -- Allows sign (-) if true, removes any present sign if false
  // default: true [test: '-00034.dj^nkjls.d$knls.4h%bj345' | true = -34.4345 | false = 34.4345]
  op_AllowSign: true, 
  // -- If decimal should be allowed or not
  // default: true [test: '-00034.dj^nkjls.d$knls.4h%bj345' | true = -34.4345 | false = -34]
  op_AllowDecimal: true, 
  // -- Forces decimal even if string contains no decimal points (but only if op_AllowDecimal is true)
  // default: true [test: '-00034dj^nkjlsd$knls4h%bj345' | true: -344,345.00 | false: -344,345]
  op_ForceDecimal: true, 
  // -- Appends zero '0' to result if just one digit is found after the last decimal point
  // default: true [test: '-00034dj^nkjlsd$knls4h%bj34.5' | true: -34,434.50 | false: -34,434.5]
  op_AppendZeroToDecimal: true,
  // -- Character to use im place of the decimal period symbol
  // default: '.'
  op_DecimalDelimiterChar: '.',
  // -- Thousands separator
  // default: ','
  op_DelimiterChar: ',',
  // -- Thousands character spacing with ' '
  // default: false [test: '-00034dj^nkjlsd$knls4h%bj.34.5' | true: -34, 434.50 | false: -34,434.50]
  op_AddSpaceToDelimiter: true
})
```
