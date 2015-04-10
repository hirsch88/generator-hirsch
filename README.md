# generator-hirsch 

[![NPM version](https://img.shields.io/npm/v/generator-hirsch.svg?style=flat)](https://www.npmjs.com/package/generator-hirsch)

> [Yeoman](http://yeoman.io) generator

> Create a module or route based AngularJS Application. 



## Prerequisites
1. Install [Node.js](http://nodejs.org) 
	- on OSX use [homebrew](http://brew.sh) `brew install node`
	- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`
	
2. Install Yeoman `npm install -g yo`

3. Install these NPM packages globally

    ```
    npm install -g bower gulp nodemon        
    ```

## Get Started
1. Install generator-hirsch
    ```
    npm install -g generator-hirsch
    ```

2. Create a new folder and change directory to it
    ```
    mkdir myApp
    cd myApp
    ```

3. Run the generator
    ```
    yo hirsch
    ```
    
## Exploring Hirsch
### Templating
- `yo hirsch:module myModule`
	
	Adds a new module to your project and also the karma tests
	
- `yo hirsch:service myService`
	
	Adds a new service to the chosen module of your project and also some karma tests

- `yo hirsch:filter myFilter`
	
	Adds a new filter to the chosen module of your project and also some karma tests

- `yo hirsch:directive myDirective`
	
	Adds a new directive to the chosen module of your project and also some karma tests

### Task Listing
#### Building
- `gulp`
	
	Injects all JS files into your index.html, generates a css from your less and start a watcher for further changes to restart the process
	
- `gulp build`
	
	Injects all JS files into your index.html and generates a css from your less
	
- `gulp index`
	
	Injects all JS files into your index.html
	
- `gulp style`
	
	Generates a css from your less
	
- `gulp dist`
	
	This generates a minified app
	
		
#### Servers
- `gulp serve`
	
	Starts a express server at localhost:3000 to visit your app

#### Testing
- `gulp test`
	
	Runs all your karma tests
	
- `gulp test:unit`
	
	Runs all your unit karma tests
	    
- `gulp test:midway`
	
	Runs all your midway karma tests

## License

MIT
