
**Why Babel?**

Babel enables you writing your code in ES6. With Babel the code will get transpiled back to ES5. 
So that every browser, without having all ES6 features implemented, can intepret it.
Babel even takes the one step further. You can not only use ES6 features, but also next generations of ES.

`npm install --save-dev babel-core babel-loader babel-preset-env`

Additionaly you might want to use some more experimental features in ES6(e.g. object spread) which can get acticated via Stages. 

Dont worry, even though its experimental, its used in create-react-app by Facebook too.

`npm install --save-dev babel-preset-stage-2`

At last step, since you want to use React, you need one more configuration to transform the natural react .jsx files to .js files.

Browser doesnt support jsx natively. 

`npm install --save-dev babel-preset-react`


**Hot Module Replacement in React**

A huge development boost will give you react-hot-loader (Hot Module Replacement). 
It will shorten your feedback loop during development. 

Basically whenever you change something in your source code, the change will apply in your app running in the browser without reloading the entire page.

`npm install --save-dev react-hot-loader`


**Linting**

Coding standards
Using Airbnb coding practices

`npm install eslint eslint-config-airbnb --save-dev`

You'll also need some dependencies for working with ES6:

`npm install eslint-plugin-jsx-a11y@^2.0.0 eslint-plugin-react eslint-plugin-import babel-eslint --global`

To prevent unnecessary warnings, "func-names" is manually switched off here because Airbnb's JS style guide allows anonymous functions.

.eslintrc file looks like this

`{
  "extends": "airbnb",
  "rules": {
    "func-names": ["error", "never"]
  }
}`

to fix few eslint issues I used

https://stackoverflow.com/questions/30398825/eslint-window-is-not-defined-how-to-allow-global-variables-in-package-json

allow jsx file extensions

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In future commits
TODO:
1) CSS processing
2) Unit testing
3) Styleguide
4) Automation testing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
