import colors from 'vuetify/es5/util/colors'

/*
** vuetify module configuration
** https://github.com/nuxt-community/vuetify-module
*/
export default {
  customVariables: [
    '~/assets/variables.scss'
  ],
  theme: {
    themes: {
      light: {
        primary: colors.grey.darken4,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  }
}
