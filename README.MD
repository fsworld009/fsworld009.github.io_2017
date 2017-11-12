# My Portfolio Homepage

## About
This repo contains the source code of my portfolio website, you can visit the website at [https://fsworld009.github.io](https://fsworld009.github.io)

## Features
- Responsive Design
- Lazy load images
- Data generated from JSON files, I can update projects or experience later without changing any HTML or javascript

## Libraries / Frameworks
- [Vue.js](https://vuejs.org)
- [Semantic UI](https://semantic-ui.com/)
- [webpack](https://webpack.js.org/) for development and deploy final js, css, and resource files
- [git-directory-deploy](https://github.com/X1011/git-directory-deploy) for deploying files to master branch


## Project Setup
```bash
npm install
```
### Build Semantic UI
```bash
cd semantic
gulp build
```

### Startup dev server (hot reload configured)
```bash
npm run dev-server
```

### Deploy (push to origin/master branch)
```bash
npm run build
```
Go `dist` folder, check if the output is working

```bash
npm run deploy
```

## Licence
MIT