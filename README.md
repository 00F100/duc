# duc

Package to detect if url has changed

## Usage

#### Install

```
$ npm install duc
```

#### Tag script

Include tag
```
<script src="dist/duc.min.js" type="text/javascript"></script>
```

#### How to use
```
var looptime = 500; // ms
var callback = function (currentPage, lastPage) {
	console.log(lastPage);
	console.log(currentPage);
}
duc.change(callback, looptime);
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
    var looptime = 500; // ms
	var callback = function (currentPage, lastPage) {
		console.log(lastPage);
		console.log(currentPage);
	}
	duc.change(callback, looptime);
});
```

#### Develop

Run Grunt Watch and edit file [duc.js](https://github.com/00F100/duc/blob/master/src/duc.js)

```
$ npm install
$ node_modules/.bin/grunt watch
```


#### Features

##### 1.2.0
+ Configure time to loop
+ Return current and last URL inside callback

##### 1.0.5
+ Add license

##### 1.0.0
+ Detect URL change
+ Execute callback