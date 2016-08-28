# A boilerplate for using MobX/React with a modular folder structure
### MobX + React + JavaScript + Aphrodite + Enzyme + Mocha + Hot-Loading + Redux DevTools

This is a boilerplate for developing with React + MobX. It uses a modular structure of folders for larger apps.

When adding a new `app`, a new folder with `routes.js`, `components/` and `models/` should be created. The routes will include the `ReactRouter` routers, models will contain the `mobx` stores, and components will contain the `react` components. The `base app` contains the initial routes and components. Each apps may have a "Base" component which will wrap the `base/BaseComponent` (or not). You can add the app entry in the `aliases` section for import sanity. 

Upon adding a new `app`, `App.js` file should be updated in the (commented out) zones to have the imports and store initializations.

A new app creation can be done by `python generate.py my-shiny-new-app` which should create the app folder, models, components, routes boilerplates and all you need then is to import the model instance and route component in the `App.js` region.

In addition, the following awesome libs are used and configured up-

* **Webpack**: `webpack.config.js` and `webpack.production.config.js` (https://webpack.github.io/)
* **Babel**: Configured to work with React, ES7 and React Hot Loader 3! (https://babeljs.io/)
* **MobX**: <3 <3 <3 (https://mobxjs.github.io/mobx/)
* **ESLint**: Configured to work with React (http://eslint.org)
* **Aphrodite**: It's inline styles, but they work! (https://github.com/Khan/aphrodite)
* **Enzyme**: JavaScript Testing utilities for React (https://github.com/airbnb/enzyme)
* **React Hot Loader 3**: Hot Loader for stateless components (https://github.com/gaearon/react-hot-boilerplate/pull/61)
* **mobx-remotedev** MobX + ReduxDevTools Extension (https://github.com/zalmoxisus/mobx-remotedev)
* **Why did you update**: no more unnecessary re-renders (https://github.com/garbles/why-did-you-update)
* **Redbox React** RSOD for React (https://github.com/commissure/redbox-react)
* **less-loader** Less loader for webpack with `AutoPrefix` and `CleanCSS` plugin

## Installation
```
git clone https://github.com/code-shoily/modular-mobx-boilerplate.git <your-project-name>
cd <your-project-name>
npm install
npm start
```

## Usage
Development Build:  ``npm start``  
Production Build: ``npm run prod``  
Testing: ``npm test`` or ``npm run test:watch`` for watching file change

## Folder Structure
```
..root
|-- static //production bundle.js, css, js, images etc
|-- src
	|-- base
	  |-- components
	    |-- Base.jsx //Base component, stuff that all childrens will have
	    |-- SampleComponent.jsx //Any components
	  |-- models
	    |-- model1.js //MobX stores, instantiated object is exported
	    |-- model2.js
		|-- tests // Test specs
		  |-- browser.js
		|-- routes.js //Routes specific to base app.
	|-- DemoApp
	  |-- components
	    |-- DemoAppBase.jsx //App-local Base component
	    |-- SampleDemoAppComponent.jsx //Any components
	  |-- models
	    |-- demo-model1.js //MobX stores, instantiated object is exported
	    |-- demo-model2.js
		|-- tests // Test specs
		  |-- demo-app.spec.js
		|-- routes.js //Routes specific to demo app
	  App.js //The place that ties in all app subroutes and models and puts them in a provider.
	  Index.jsx //The Main guy, App.js hotloading happens here alongside Redbox, a11y etc
```

## App Generation
You can create new apps by using the `generator.py` script. For example, if you create `python generator.py todo-app` then it will create a `src/todo-app` folder and spit out the following message:

```
=== === Please add the following lines in the appropriate location in src/App.js === ===


/* ------ TODO-APP APP --- --- */

import todoAppRoutes from './todo-app/routes'
import {todoAppModel} from './todo-app/models/todo-app'

=== === Add the stores and routers in appropriate locations as marked === ===
```

You can open up `src/App.js` to paste those imports and add the `todoAppModel` and `{todoAppRoutes}` in the areas marked with comments. Then you can go to `/todo-app` to see a "Hello TodoApp" message. The new folder structure comforms with the one mentioned before:

```
|-- todo-app
  |-- components
    |-- TodoAppBase.jsx
    |-- TodoAppPage.jsx
  |-- models
    |-- todo-app.js
  routes.js
```

Oops, I missed the `tests` folder!

## TODO
* Polishing up the script (I made it quickly and careless for my own projects, since it's just a code generator...)
* Creating scripts to create `stores` or `components` under an already created app model
* Putting some test cases in (I am new to the JS testing scenario)
* Make a cookbook style repository out of it with an app housing a particular recipe (i.e. OpenLayers Integration, Todo App, REST API Integration etc)

Big thanks goes to the creator of [Reaxor](https://github.com/KadoBOT/reaxor) as I took a lot of ideas for setup from there. 

This is still very much a work in progress, as I work with it and discover new stuff, I'll be extracting them into here from my projects.
