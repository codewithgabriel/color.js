Overview
---------
Color.js is a small Javascript framework for formating console logs in colored rendering.

Quick start
-----------
```shell
  npm install colorjs
```
or

```shell 
git clone https://github.com/codewithgabriel/colorjs.git
cp colorjs/color.js your_project_directory
```

after successful cloning, you will find color.js in colorjs directory, you can import and start using methods from Color class.

```sh
project_dir
  index.js
  color.js
```

index.js
```javascript
  const color = require('./color.js');
  let msg = "Hello from Colorjs";
  //this logs msg value with red color to the console
  console.log(color.red(msg));
  
 ```
For background 
```javascript
  const color = require('./color.js');
  let msg = "Hello from Colorjs";
  //this logs msg value with white background color to the console
  console.log(color.whitesmokebg(msg));
  
 ```
 Background and foreground
 ```javascript
  const color = require('./color.js');
  let msg = "Hello from Colorjs";
  let msg_colored = color.green(msg);
  //this logs msg value with white background color and foreground of green to the console
  console.log(color.whitesmokebg(msg_colored));
 ```
 
 italic
 ```javascript
  const color = require('./color.js');
  let msg = "Hello from Colorjs";
  let msg_colored = color.green(msg);
  //this logs msg value with italic format to the console
  console.log(color.italic(msg_colored));
 ```

blink
 ```javascript
  const color = require('./color.js');
  let msg = "Hello from Colorjs";
  let msg_colored = color.green(msg);
  //this logs msg value with blinking format to the console
  console.log(color.blink(msg_colored));
  ```
  
  Methods Definitions
  -------------------
  ```javascript
    yellow() //formet console with yello color
 
   
    bold() //format console with bold
    lightblack () //format console with lightblack
    blink() //makes console log blink
    underline() //underline the given content
    italic() //format console in italic
    whitebg() //gives with background to console log
    deepblack() //format console deepblack
    red = (value)=>{
        return `\x1b[31m${value}${this.end()}`.trim()
    }
    green = (value)=>{
        return `\x1b[32m${value}${this.end()}`.trim()
    }
    blue = (value)=>{
        return `\x1b[34m${value}${this.end()}`.trim()
    }
    purple = (value)=>{
        return `\x1b[35m${value}${this.end()}`.trim()
    }
    lightblue = (value)=>{
        return `\x1b[36m${value}${this.end()}`.trim()
    }
    lightredbg = (value)=>{
        return `\x1b[41m${value}${this.end()}`.trim()
    }
    lightgreenbg = (value)=>{
        return `\x1b[42m${value}${this.end()}`.trim()
    }
    yellowbg = (value)=>{
        return `\x1b[43m${value}${this.end()}`.trim()
    }

    lightbluebg = (value)=>{
        return `\x1b[44m${value}${this.end()}`.trim()
    }
    purplebg = (value)=>{
        return `\x1b[45m${value}${this.end()}`.trim()
    }
    lighterbluebg = (value)=>{
        return `\x1b[46m${value}${this.end()}`.trim()
    }
    
    whitesmokebg = (value)=>{
        return `\x1b[47m${value}${this.end()}`.trim()
    }
    blur = (value)=>{
        return `\x1b[90m${value}${this.end()}`.trim()
    }
    deepred = (value)=>{
        return `\x1b[91m${value}${this.end()}`.trim()
    }
    deepgreen = (value)=>{
        return `\x1b[92m${value}${this.end()}`.trim()
    }

    deepyellow = (value)=>{
        return `\x1b[93m${value}${this.end()}`.trim()
    }
    deepblue = (value)=>{
        return `\x1b[94m${value}${this.end()}`.trim()
    }
    
    deeppurple = (value)=>{
        return `\x1b[95m${value}${this.end()}`.trim()
    }
    blurblue = (value)=>{
        return `\x1b[96m${value}${this.end()}`.trim()
    }
    greenbg = (value)=>{
        return `\x1b[100m${value}${this.end()}`.trim()
    }
    redbg = (value)=>{
        return `\x1b[101m${value}${this.end()}`.trim()
    }
    greenbglight = (value)=>{
        return `\x1b[102m${value}${this.end()}`.trim()
    }
    deepyellowbg = (value)=>{
        return `\x1b[103m${value}${this.end()}`.trim()
    }
    bluebg = (value)=>{
        return `\x1b[104m${value}${this.end()}`.trim()
    }
    purplebgdeep = (value)=>{
        return `\x1b[105m${value}${this.end()}`.trim()
    }
    lightbluebgmid = (value)=>{
        return `\x1b[106m${value}${this.end()}`.trim()
    }
    whitebgdeep = (value)=>{
        return `\x1b[107m${value}${this.end()}`.trim()
    }
    secret = (value) => {
        return `\x1b[30m${value}` 
    }
    secretpurple =(value)=>{
        return this.secretpurplebg(`\x1b[35m${value}`)
    }
    secretpurplebg =(value)=>{
        return `\x1b[45m ${value}`
    }

    secretred = (value)=>{
        return this.secretredbg(`\x1b[31m${value}`)
    }
    secretredbg = (value)=>{
        return `\x1b[41m${value}`
    }
