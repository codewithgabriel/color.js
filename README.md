Overview
---------
Color.js is a small Javascript framework for formating console logs in colored rendering.

Quick start
-----------

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
index.js
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
 
