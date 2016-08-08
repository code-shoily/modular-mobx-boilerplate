# Mobx + React + JS
# modular-mobx-boilerplate

This is a boilerplate for developing with React + MobX. It uses a modular structure of folders for larger apps.

When adding a new `app`, a new folder with `routes.js`, `components/` and `models/` should be created. The routes will include the `ReactRouter` routers, models will contain the `mobx` stores, and components will contain the `react` component. The `base app` contains the initial routes and components. Each apps may have a "Base" component which will wrap the `base/BaseComponent` (or not). You can add the app entry in the `aliases` section for import sanity. 

Upon adding a new `app`, `index.jsx` file should be updated in the (commented out) zones to have the imports and store initializations.
