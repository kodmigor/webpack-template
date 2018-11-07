# webpack-template

simple webpack config

## platform

nodejs

## languages

- html
- sass
- js-native

## webpack loaders

- babel-loader
- style-loader
- css-loader
- sass-loader

## webpack plugins

- mini-css-extract-plugin
- html-webpack-plugin
- clean-webpack-plugin

## run scripts

```bash
npm run ...
```

| linux | windows   |
| ----- | --------- |
| dev   | dev_win   |
| build | build_win |

---

### dev / dev_win

#### command

webpack-dev-server

#### mode

development (sets by NODE_ENV=development)

#### webpack flags

- --config (with webpack.config.js)
- --open

---

### build / build_win

#### command

webpack

#### mode

production (sets by NODE_ENV=development)

#### webpack flags

- --config (with webpack.config.js)
