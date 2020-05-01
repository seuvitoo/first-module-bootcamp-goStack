const path = require('path')

module.exports = {
  //arquivo de entrada vai
  entry: path.resolve(__dirname, 'src', 'index.js'),

  //qual arquivo vai ser gerado depois de convertido
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  // serviço para rodar igual o nodemon
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },

  //regras

  module: {
    rules: [
      //cada objeto é um loader, como expressão regular.
      // instrução: Toda vez que tive um arquivo na minha aplicação que não estiver em node_modules
      //converte ele pra mim usando o babel-loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use:
          { loader: 'file-loader' },

      }
    ]
  }

}