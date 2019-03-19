# Points of Light Docs

## Setup

This site is built upon [VuePress 1.x](https://v1.vuepress.vuejs.org).

### Dependencies

* [Node Version Manager](https://github.com/creationix/nvm) >= 0.34
* [Node](https://nodejs.org) >= 8
* [VuePress](https://v1.vuepress.vuejs.org) >= 1.x

## Getting Started

### macOS with Homebrew

Install nvm and Node:

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
nvm install node
nvm use node
```

Clone the repo and install packages:

```bash
git clone git@github.com:pointsoflight/docs.git docs
cd docs
npm install
```

Build and watch:

```bash
npm run dev:docs
open http://localhost:8080
```

## Deployment

Deploys to Heroku via [GitHub Integration](https://devcenter.heroku.com/articles/github-integration)
