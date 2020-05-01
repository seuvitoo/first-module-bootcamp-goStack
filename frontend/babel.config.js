module.exports = {
  presets: [
    //  ele converte apenas as funcionalidades mais recente que o browser não entende.
    //  Ele entende o ambiente e converte o código baseado nisso.
    '@babel/preset-env',

    // ele add as funcionalidades do react dentro do projeto.
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}