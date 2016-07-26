# ng2-material-tooltip

stand alone basic angular2 tooltip. Uses material design tooltip guidelines:

https://material.google.com/components/tooltips.html

##Usages
`npm install --save ng2-material-tooltip`

```javascript
import {TooltipComponent} from "ng2-material-tooltip/dist/index";
```

```html
<button ng2-md-tooltip="lorem ipsum" placement="right">Demo right</button>
```

`placement` = `top|left|right|bottom`

             
## Getting started with the examples in demo folder

1. Install dependencies and start compiling:

```
npm install
```

2. Optionally run if you want to watch for changes in the file system - e.g. when editing

```
./node_modules/.bin/webpack --watch
```

3. Optionally start the static resources server (and visit http://localhost:8080/demo

```
     npm start
```

or use a server of your choice and open index.html in any browser
