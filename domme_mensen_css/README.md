# Hoi Ben jij ook dom?

Slimme mensen gebruiken een Preprocessor zoals SCSS of SASS.

Maar als je hier bent, ben je waarschijnlijk dom en struggle je al met CSS.

*Introducing tailwind*

Tailwind is a CSS utility-first framework, or in other words a PostCSS plugin. This means that you can still use it with SCSS or any other preprocessor as it is *not* a preprocessor of its own. 

The main functionality of tailwind is to build websites fast with building blocks without comprosing customizability like bootstrap. With tailwind plugins you can even add more functionality for what you like, or you can write regular css.

# How to use tailwind and daisyui for CSS?


**Step pre-1:**
Install nodejs from their [website](https://nodejs.org/en/). This automatically also installs NPM, the javascript package manager which is required for tailwindcss.


**Step 1:**
Install tailwindcss:

```npm install -D tailwindcss```


**Step 2:**
Initialise tailwind css in your working directory:

```npx tailwindcss init```

Also set it up in your project, but this depends on your language so check this [link](https://tailwindcss.com/docs/installation)


**Step 3:**
Install daisyui:

```npm i daisyui```

**Step 4:**
In the `tailwind.config.js` file add Daisyui under plugins like this:

```plugins: [require("daisyui")],```

**Step 5:**
Run Tailwind watch:
```npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch```