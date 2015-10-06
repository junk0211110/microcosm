# <a href="http://microcosm.site" target="_blank">microcosm</a>
A starter project to help you create, build and deploy your own simple, static and responsive microsite.

Uses the responsive CSS of skeleton. Visit <a href="http://getskeleton.com" target="_blank">getskeleton.com</a> for the details.

## Getting started

There are 2 ways to get started:
- You can visit <a href="http://microcosm.site" target="_blank">microcosm</a> for the .zip and all the instructions
- You can also clone this repo

### What's in the repo?

Skeleton's css, a starter index.html and most importantly, all of the tools required for a sane and painless workflow.

- Gulp manages your server, creates your build and watches for any changes
- Browsersync let's you interact with your site simultaneously, on multiple browsers

### Prerequisites

Install <a href="http://nodejs.org" target="_blank">node</a>, join <a
href="https://github.com/join" target="_blank">github</a>, set up <a
href="https://help.github.com/articles/set-up-git/"
target="_blank">git</a> and create your <a
href="https://pages.github.com/" target="_blank">site
repository</a>.

### Instructions

If you plan on deploying your site to github, clone this repository into your username.github.io folder.

```
$ git clone git@github.com:yethon/microcosm.git
```

You should now have a folder with the following structure:

```
folder/
└── username.github.io/
  ├── assets/
  │   ├── img/
  │   │   ├── GitHub-Mark-Light.png
  │   │   ├── blurred_lines-min.jpeg
  │   │   └── favicon.png
  │   ├── index.html
  │   ├── js/
  │   │   └── functions.js
  │   └── styles/
  │       ├── microcosm.scss
  │       ├── normalize.css
  │       └── skeleton.css
  └── tasks/
  ├── gulpfile.js
  ├── package.json
```

Install and Serve!

```
$ npm install
$ gulp serve
```

Make all of your changes in the assets/ folder.

Maintain the established file structure or update the gulp tasks to handle any changes.

When you're ready to deploy:

```
$ git add . -u
$ git commit -m 'My Microsite'
$ git push
```

*If you'd like to deploy your site elsewhere, it's packaged in the dist/ folder. It's always minfied and up to date! Just copy & paste whenever you're ready.*

## License

[open-source MIT license](https://github.com/dhg/Skeleton/blob/master/LICENSE.md)

## FYI

- Icon from <a href="https://thenounproject.com/GregSuj/collection/beyond-the-infinite/" target="_blank">Beyond the Infinite</a> collection created by <a href="http://gregory.sujkowski.fr/" target="_blank">Gregory
Sujkowski</a>
