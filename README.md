# duc
Package to detect if url has changed

## Usage

#### Install

```
npm install duc
```

#### Tag script

Include tag
```
<script src="dist/duc.min.js" type="text/javascript"></script>
```

Example code
```
duc.change(function(url) {
    console.log(url);
});
```

#### Requirejs

main.js
```
paths: {
    duc: 'dist/duc.min'
},
shim: {
    duc: {
        exports: 'duc'
    }
}
```

yourfile.js
```
requirejs(['duc'], function() {
	duc.change(function(url) {
        	console.log(url);
    	});
});
```