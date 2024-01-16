# Project Setup

- bundles code, sometimes there is no html to inspect. also happens for example with a internet crawler
- translates js files into format that every browser can read
- old version react was from facebook (this one is not good)

## VITE.js

- french word for task
- is way faster than creating react folder structure from scratch
- Vite is a local development server for web applications. It also includes a tool that allows you to create a React project with a single command. It is a great tool to get started with React.

## how to SCAFFOLDING

---scaffolding--- is the process of creating a new project.

1.  scafffoldding the project
    // requires Node.js version 18+. 20+. //

2.  Terminal:

    `npm create vite@latest`

3.  specify the project name and the template you want to use

    `npm create vite@latest my-vue-app -- --template react`

4.  create-vite:

    create-vite is a tool to quickly start a project from a basic template for popular frameworks.
    popular templates:
    https://github.com/vitejs/awesome-vite#templates

5.  In a project where Vite is installed, you can use the vite binary in your npm scripts, or run it directly with npx vite.
    Vite is installed as a local dev dependency in your project, and you need to setup the following npm scripts:

         ```
         {
         "scripts": {
             "dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`
             "build": "vite build", // build for production
             "preview": "vite preview" // locally preview production build
         }
         }
         ```

         -!- vite preview is intended for previewing the build locally and not meant as a production server. -!-

    ### Building the App:

         => build-process => makes the app in a usable form

         - `command + T` => opens another tab in the terminal
         - `control + C` => stopping a running script
         => can also stop an npm install process!

         - `killall node` => stops the server running

         => closing the tab also stops the script running

6.  CREATE THE APP

    `npm run build`

7.  TESTING THE APP

    you may test it locally by running
    `npm run preview`

## Scripts

Vite has a few more npm scripts than the ones you have seen so far. Besides starting a development server and running tests, you can use them to build your app.

The most important scripts for us are:

- dev
- lint
- preview.
- build (is generally used only for production environments.)

## Folder Structure

Vite scaffolds a folder structure for you with a lot of files and folders.
Most important are `src`, `src/components`, and `public`
`page`

### Boilerplate:

html with one div , this div is the root

- => from here we render the whole app into js
- => starting file index.js or main.js is also implemented

`there is a render element which renders <App /> the main component`

- => all the files in react projects could be named .js or .jsx
- => in vite is has to be .jsx

## Adding CSS Styling

- directly import CSS files in your JavaScript files
- you have a CSS file with the same name as the component that is imported in the component's JavaScript file:

  - eg. button.js and button.css, header.js and header.css

    both each implemented into the index.js file

- CSS file naming in BEM:
  that takes the form

  `.BlockName__elementName--modifierName`

#### usually:

Importing .css files will inject its content to the page via a `<style>` tag

### ...now:

Inlining and Rebasing with --->
`@import`

- Vite is pre-configured to support CSS @import inlining via postcss-import.
- Vite aliases are also respected for CSS @import.
- all CSS url() references, even if the imported files are in different directories, are always automatically rebased to ensure correctness.

Any CSS file ending with .module.css is considered a CSS modules file.
When importing a CSS Module from a JavaScript Module, it exports an object with all mappings from local names to global names.

Importing such a file will return the corresponding module object:

```css
/* example.module.css */
.red {
  color: red;
}
/* .....and then: */
import classes from './example.module.css'
document.getElementById('foo').className = classes.red
/* or */
import styles from './style.css';
element.innerHTML = '<div class="' + styles.className + '">';
```

# Creating Components

- JSX is just a syntax extension for JavaScript and is compiled down to React.- createElement() calls (or jsx()).
- When we create an element like `<Card>Content</Card>`, we actually get an object that looks like this (simplified):

```js
{
  type: function Card(props) { /*...*/ },
  props: {
    children: "Content"
  }
}
```

## Type: rfc => have a component

- ... Rather than walking the JSX tree to collect items, [import export...]
- rely on React itself to build and efficiently update collections
- How it works:

  > 1. implementing a tiny version of the DOM with just the methods React needs (e.g. createElement, appendChild, etc.).
  > 2. Then, it uses a React portal to render the collection into this fake DOM.
  > 3. React takes care of rendering all intermediary wrapper components [...].
  > 4. This gives us access to the underlying items as if they were rendered directly to the DOM, but without needing to pay this cost for large collections.
  > 5. We use this information to construct a Collection [...].
  > 6. It requires two renders whenever something in the collection changes
  > 7. The first causes the portal to be rendered, which updates the fake DOM.
  > 8. It then needs to kick off a second render pass to render the items into the real DOM. However, because the first pass is rendering into a fake DOM, it is quite fast [...].

### process example:

- `<Button />` => this is a function call, it returns whatever the function Button() {} does
- => the function returns jsx in react and later js to browser

- the props returns an object => that's why we have to do either:

1. all the buttons props are one object
   1. eg.: props.buttontext

OR

2. {buttontext}
