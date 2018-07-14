# shopping-cart

#### Requirement Overview
1. Show a grid of items with each item has price, thumbnail & "add to cart" button.
2. clicking one item should show more info about the item (description, price, remaining stock & add to cart button)
3. When you click the add to cart button the item should be added to the cart and the stock number should be updated in the detail view of the item.
4. The cart should have a checkout button, when clicked show a successful message and clear the cart.
5. Design is left for you, it's not a design task so nothing fancy but of course responsive. But functionality is more important.

#Technology
Angular 5, SASS, Bootrap, RxJs
Jasmine, Karma for unit test
TsLint, StyleLint for code rules and styles

## Files structure
#### Project skeleton
The project was generated using Angular CLI tool with the maximum set of features from the box.
The skeleton of the project has the following files structure:
```

├── node_modules
├── src
|   ├── app
|   |   ├── api
|   |   ├── products-table
|   |   ├── app.component.html|ts|spec.ts|scss
|   |   └── app.module.ts
|   ├── index.html
|   ├── main.ts
|   ├── polyfills.ts
|   ├── styles.scss
|   ├── tsconfig.app.json
|   ├── tsconfig.spec.json
|   └── typings.d.ts
├── .angular-cli.json
├── .gitignore
├── karma.conf.json
├── package.json
├── README.md
├── tsconfig.json
└── tslint.json
```

#### Files and folders overview
`node_modules/` - all the dependencies which the project requires
`src/` - directory with source files
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`src/app/` - the main directory which incudes angular components, modules etc.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`src/app/api/` - see [api module](#api-module) section below
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`src/app/products-table/` - see [products-table module](#products-table-module) section below
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`src/app/app.component.ts` - root component of the application
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`src/app/app.module.ts` - root module class of the application
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`src/index.html` - app entry point
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`src/main.ts` - the file that bootstraps Angular app
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`src/polyfills.ts` - the file includes polyfills needed by Angular and is loaded before the app
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`src/styles.scss` - the file includes some global styles of the application
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`src/tsconfig.app.json` - typescript configuration file, describes compiler options (is extended from `../tsconfig.json`)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`src/tsconfig.app.json` - typescript configuration file for unit tests written on Jasmine (.spec files)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`src/typings.d.ts` - SystemJS module definition needed by Angular

`.angular-cli.json` - contains settings for Angular CLI tool
`.gitignore` - defines intentionally untracked files to ignore in Git CVS
`karma.conf.js` - Karma configuration one. Karma runs all the unit tests written on Jasmine
`package.json` - includes dependencies which are required in the project, defines npm scripts
`README.md` - has some internal project description
`tsconfig.json` - typescript configuration file, describes compiler options
`tslint.json` - describes the main rules of code formatting for all the typescript files in the project

##### <a name="api-module"></a>Api module
The `api` module contains singleton services whose instances will be shared throughout the application.
The preferable structure of `api` module is:
```
├── api
|   ├──  api.module.ts
|   ├──  product.service.ts|spec.ts

##### <a name="products-table-module"></a>Product table module
The `products-table` module includes re-usable product components which shows grid of items.
The  structure of `products-table` module is:
```
├── products-table
|   ├── products-table.component.html|ts|spec.ts|scss
|   ├── products-table.module.ts

## Project installation
#### Prerequisites
The following tools must be installed on your PC before start:
* NodeJS v8.9.x (or more)
* NPM v.5.5.x (or more)

Verify that you are running at least node 8.9.x and npm 5.5.x by running node -v and npm -v in a terminal/console window.
Older versions produce errors, but newer versions are fine.
Then you should also install [angular-cli](https://github.com/angular/angular-cli) and check that the command is available in terminal:
```
npm install -g @angular/cli
ng -v
```

Install the npm packages described in the package.json and verify that server starts correctly:
```shell
npm install
npm start
```
Wait untill build is completed - usually 10-15 seconds.
Last command first compiles, then simultaneously starts the server at `http://localhost:4000`.