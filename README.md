# Настройка webpack

1. инициализация npm: `npm init`
2. установка webpack: `npm i -D webpack webpack-cli`
3. скрипт в package.json: `"build": "webpack --mode production"`
4. создание файла конфигурации `webpack.config.js` с содержимым: `module.exports = {}`
5. создание папки `src/` и точки входа в ней - `index.js`
6. запуск webpack: `npm run build`
7. в конфигурационном файле обучить webpack работе с файлами `html`:
  * создать файл `index.html` в `src/`
  * установка плагина: `npm i -D html-webpack-plugin`
  * подключение плагина в конфигурационном файле:
    - `const HtmlWebpackPlugin = require('html-webpack-plugin');`
    - в plugins: `new HtmlWebpackPlugin({template: './src/index.html', filename: 'index.html'})`
8. в конфигурационном файле обучить webpack работе с файлами `css`:
  * создать файл `style.css` в `src/css/`
  * подключение стилей в точке входа: `import './css/style.css';`
  * установка css-загрузчика: `npm i -D css-loader`
  * установка плагина: `npm i -D mini-css-extract-plugin`
  * обучение webpack в `rules`: `{test: /\.css$/, use: [MiniCSSExtractPlugin.loader, 'css-loader']}`
  * подключение плагина в конфигурационном файле:
    - `const MiniCSSExtractPlugin = require('mini-css-extract-plugin');`
    - в plugins: `new MiniCSSExtractPlugin()`
9. настройка сервера:
  * установка сервера: `npm i -D webpack-dev-server`
  * скрипт в package.json: `"start": "webpack serve --mode development"`
10. настройка babel:
  * установка babel: `npm i -D @babel/core @babel/cli @babel/preset-env` и `npm i core-js@3`
  * создать файл конфигурации: `babel.config.json`
  * создать файл: `.browserslistrc`
  * установка babel-загрузчика:`npm i -D babel-loader`
  * обучение webpack в `rules`: `{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},`
11. настройка webpack-merge:
  * установка webpack-merge: `npm i -D webpack-merge`
  * создание файлов: `webpack.common.config.js`, `webpack.production.config.js` и `webpack.development.config.js`
  * подключение этих файлов в `webpack.config.js`и перенос логики
  * изменение скрипта start: `"start": "webpack serve --env development",`
  * изменение скрипта build: `"build": "webpack --env production",`