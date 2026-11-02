1. initialize the project as shown in docs
2. delete unneeded stuff
3. install [tailwind css](https://docs.astro.build/en/guides/content-collections/)
  - import it in `astro.config.mjs`
  - put it in the config export
  - make `/src/styles/global.css` file and `@import` tailwind
  - import the css file wherever you use tailwind?

.astro files are responsible for making **pages** in an Astro website. every .astro file should have this bit under the --- piece:

```astro
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} >
    <title>PAGE TITLE</title>
  </head>
  <body>
		
  </body>
</html>
```

probably figure out a reusable way to write this on every page..

yeah figure out layouts at some point that will help a LOT

Here's what i've learned about layouts:

- add a `<slot />` component to house any child elements
- you can pass props into layouts to be used in *their* HTML

- 