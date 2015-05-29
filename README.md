# generator-hirsch 

[![NPM version](https://img.shields.io/npm/v/generator-hirsch.svg?style=flat)](https://www.npmjs.com/package/generator-hirsch)

> [Yeoman](http://yeoman.io) generator

> Create a module based AngularJS Application. 

> Based on the famous style guide from John Papa [angular-styleguide](https://github.com/johnpapa/angular-styleguide)


# Table of contents

- [generator-hirsch](#generator-hirsch)
- [Prerequisites](#Prerequisites)
- [Get Started](#Get-Started)
- [Templating](#Templating)
- [App](#App)
- [License](#License)



# Prerequisites
1. Install [Node.js](http://nodejs.org) 
	- on OSX use [homebrew](http://brew.sh) `brew install node`
	- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`
	
2. Install Yeoman `npm install -g yo`

3. Install these NPM packages globally

    ```
    npm install -g bower gulp nodemon        
    ```

# Get Started
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
    yo hirsch appname
    ```
    
    
# Templating
- `yo hirsch:module myModule`
	
	Adds a new module to your project and also the karma tests
	
- `yo hirsch:view myNewView`
  	
  Adds a new view template and a controller in the view directory of the chosen module
	
- `yo hirsch:service myService`
	
	Adds a new service to the chosen module of your project and also some karma tests

- `yo hirsch:filter myFilter`
	
	Adds a new filter to the chosen module of your project and also some karma tests

- `yo hirsch:directive myDirective`
	
	Adds a new directive to the chosen module of your project and also some karma tests

	
# Styleguide
I use this style guid for my apps:
[johnpapa/angular-styleguide](https://github.com/johnpapa/angular-styleguide)
	
# App	
## App Structure
```
projectRoot/
   |
   +-- dist/ ( minified app version will placed by gulp here with the task 'gulp dist' )
   |
   +-- src/
   |   |
   |   +-- app/
   |   |   |  
   |   |   + common/  
   |   |   |   |  
   |   |   |   + directives/  
   |   |   |   + filters/  
   |   |   |   + services/  
   |   |   |   + templates/  
   |   |   |     
   |   |   + core/
   |   |   |   |
   |   |   |   + app.config.js ( 3rd party modules configurations )
   |   |   |   + app.core.js ( Defines the AngularJS modules and configures them )
   |   |   |   + app.router.js ( ui.router middleware )
   |   |   |   + app.run.js
   |   |   |   + app.util.js ( Global object to generates the server url for the current environment )
   |   |   |   + app.events.js ( Global event bus )
   |   |   |
   |   |   + <moduleName>/
   |   |   |   |
   |   |   |   + common/
   |   |   |   |   |
   |   |   |   |   + directives/  
   |   |   |   |   + filters/  
   |   |   |   |   + services/  
   |   |   |   |   + templates/  
   |   |   |   |  
   |   |   |   + views/
   |   |   |   |   |
   |   |   |   |   + <viewName>.js
   |   |   |   |   + <viewName>.html
   |   |   |   |
   |   |   |   + <moduleName>.module.js
   |   |   |
   |   |   + app.js  
   |   |
   |   +-- assets/ 
   |   |   |
   |   |   +-- css/
   |   |   +-- fonts/
   |   |   +-- i18n/
   |   |   +-- less/
   |   |   +-- medias/
   |   | 
   |   +-- lib/ ( Bower packages )
   |   +-- index.html ( "MAIN" - This is the start page of your single-page-application and has some gulp vars )
   |  
   +-- test/
   |   |
   |   + lib/
   |   + e2e/
   |   + midway/
   |   + unit/
   |
   +-- .bowerrc ( defines the location for the bower_components )
   +-- .gitignore
   +-- .jshintrc ( JSHint Syntax definiations )
   +-- bower.json
   +-- gulpfile.js ( Task Runner )
   +-- karma-midway.config.js
   +-- karma-shared.config.js
   +-- karma-unit.config.js
   +-- package.json
   +-- project.config.js ( Path definitions for gulp )
   +-- README.md ( describes the project and how to set it up )
  ```
	
## Task Runner
### Building
- `gulp`
  
  Injects all JS files into your index.html, generates a css from your less and start a watcher for further changes to restart the process
  
- `gulp help`
  
  Lists all tasks
  
- `gulp build`
  
  Injects all JS files into your index.html and generates a css from your less
  
- `gulp style`
  
  Generates a css from your less
  
- `gulp dist`
  
  This generates a minified app
  
    
## Servers (default)
- `gulp serve` 
  
  Opens the browser(localhost:3000 ) with your app and refreshes it when your source code has been modified

## Testing
- `gulp test`
  
  Runs all your karma tests
  
- `gulp test:unit`
  
  Runs all your unit karma tests
      
- `gulp test:midway`
  
  Runs all your midway karma tests

	

# License

The MIT License

Copyright (c) 2015 Gery Hirschfeld ([@hirsch88](https://twitter.com/GeryHirschfeld1))


(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


**[Back to top](#generator-hirsch)**
