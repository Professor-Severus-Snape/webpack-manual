// ---------- общие настройки для webpack: ----------
// const path = require('path'); // пакет из node.js для работы с абс. и отн. путями
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключение плагина для работы с html
const MiniCSSExtractPlugin = require('mini-css-extract-plugin'); // подключение плагина для работы с css

module.exports = {
  // mode: 'production', // режим сборки (production || development)

  // entry: './src/index.js', // точка входа по умолчанию

  // output: {
  //   // АБСОЛЮТНЫЙ! путь (__dirname указывает на текущую папку) - путь по умолчанию:
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'main.js' // имя выходного файла по умолчанию
  // },

  module: {
    // правила обучения webpack:
    rules: [
      {
        test: /\.js$/, // регулярное выражение для файлов с расширением .js
        exclude: /node_modules/, // чтобы не обрабатывались файлы в этой папке
        loader: 'babel-loader', // загрузчик для работы с js-файлами
      },
      {
        test: /\.txt$/, // регулярное выражение для файлов с расширением .txt
        loader: 'raw-loader', // загрузчик для работы с txt-файлами
      },
      {
        test: /\.css$/, // регулярное выражение для файлов с расширением .css
        use: [MiniCSSExtractPlugin.loader, 'css-loader'], // загрузчики для работы с css (указываются в обратном порядке):
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html', // !!! с другим именем не работает webpack-dev-server !!!
    }),
    new MiniCSSExtractPlugin(),
  ],

  devServer: {
    open: true, // чтобы сразу открывалась веб-страница
  },
};
