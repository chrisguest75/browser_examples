# TAILWIND CSS

A skeleton usng tailwind with raw html.  

NOTES:

* You have to point to the html file in you `tailwind.config.js`

## Prereqs

```sh
code --install-extension bradlc.vscode-tailwindcss
```

## Install

```sh
nvm use
npm install

# build and watch styles
npx tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch
```

## Browse

Use the live-server extension to view.  

## Recreate

```sh
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init

npm run build:css
```

## Resources

* Get started with Tailwind CSS [here](https://tailwindcss.com/docs/installation)  
* Tailwind Flex: How to use Tailwind CSS Flex [here](https://www.devwares.com/blog/how-to-use-tailwind-css-flex/)  
* How to use Tailwind CSS in HTML [here](https://www.devwares.com/blog/how-to-use-tailwind-css-in-HTML)  
* A tool for transforming CSS with JavaScript [here](https://postcss.org/)
* PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. [here](https://www.npmjs.com/package/autoprefixer)
