module.exports = {
  // Import scss variables
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/css/_variables.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000/'
      }
    }
  },
  chainWebpack: config => {
    // Disable prefetch scripts
    config.plugins.delete('prefetch')
  }
}
