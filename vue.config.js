module.exports = {
  // Import scss variables
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/scss/mixins/main";
          @import "~@/scss/variables/main";
        `
      }
    }
  },
  devServer: {
    proxy: {
      '^/api': {
        target: `${process.env.VUE_APP_API_URL}:${process.env.VUE_APP_API_PORT}`
      }
    }
  },
  chainWebpack: config => {
    // Disable prefetch scripts
    config.plugins.delete('prefetch')
  }
}
