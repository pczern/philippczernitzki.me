---
title: Integrating PrismJS for Code Formatting in GatsbyJS
date: "2018-30-30T02:14:00.000Z"
published: true
---

Today I have implemented PrismJS into my GatsbyJS blog, through the help of `gatsby-remark-prismjs`.
If you want to know how it works, checkout the docs <a target="_blank" href="https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/">here</a>.
Additionally I installed the Git Theme from PrismJS:

`yarn add prism-themes`

then I import it in my `layouts/index.jsx`:

`import 'prism-themes/themes/prism-ghcolors.css'`

now the css is available on every page. To make it look a little bit cooler I also added the following to my global css:

```css
.gatsby-highlight {
  border-radius: 0.3em;
  overflow: auto;
}

.gatsby-highlight pre[class*='language-'] {
  overflow: initial;
  float: left;
  min-width: 100%;
}

.gatsby-highlight-code-line {
  background-color: #feb;
  display: block;
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  border-left: 0.25em solid #f99;
  font-size: 0.85em;
}

code[class*='language-'],
pre[class*='language-'] {
  font-family: monospace;
  font-size: 0.9em;
  line-height: 1.5;
}

pre[class*='language-'] {
  border: 1px solid #f7f7f7;
  background-color: #f7f7f7;
  border-radius: 4px;
}

:not(pre) > code[class*='language-'] {
  border: 1px solid #f7f7f7;
  background-color: #f7f7f7;
}

.token.function,
.token.deleted,
.language-autohotkey .token.tag {
  color: #05539a;
}

.token.important,
.token.function,
.token.bold {
  font-weight: 500;
}
```

Some of this css was required because of problems in formatting. Check out the docs of `gatsby-remark-prismjs` <a target="_blank" href="https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/">here</a>

Happily we can now see good looking code on this blog :D

```javascript
console.log('This code styling looks awesome')

function isCodeStylingAwesome(bool) {
  while (bool) {
    console.log('Code styling is awesome')
  }
}
isCodeStylingAwesome(true)
```
