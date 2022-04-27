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
  console.log(color.red(msg));
 ```
