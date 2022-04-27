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
    red() //format console log with red
    green() //format console log green
    blue() //format console log wblue
    purple() //format console log purple
    lightblue // format console log light blue
    lightredbg() //format console log light red background
    lightgreenbg() //format console log with light green bg
    yellowbg() //format console log with yellow background

    lightbluebg() //format console log with light blue background
    purplebg () //format console log with purple background
    lighterbluebg () // format console log with lighter blue background
    
    whitesmokebg () //format console with lighter smoke background
    blur()
    deepred()
    deepgreen()
    deepyellow()
    deepblue()
    deeppurple()
    blurblue()
    greenbg()
    redbg()
    greenbglight()
    deepyellowbg()
    bluebg()
    purplebgdeep()
    lightbluebgmid()
    whitebgdeep() //format console log whitebg and deep
    secret() //hide console content
    secretpurple() //hide console content with  purple
    secretpurplebg() //hide console content with  background of purple

    secretred() //hide console with red
    secretredbg() ////hide console content with  background of red
