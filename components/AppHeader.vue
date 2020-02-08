<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-toolbar-title>
      {{ $t('APP_NAME') }}
    </v-toolbar-title>
    <v-spacer />
    <app-icon-button
      :icon="icons.left"
      @click="toPrevMonthPage"
    />
    <app-text-button @click="toCurrentMonthPage">
      {{ $t('CURRENT_MONTH') }}
    </app-text-button>
    <app-icon-button
      :icon="icons.right"
      @click="toNextMonthPage"
    />
    <app-icon-button
      :icon="icons.settings"
      @click="openSettingDialog"
    />
    <app-setting-dialog :show.sync="showSettingDialog" />
  </v-app-bar>
</template>

<script>
import {
  addMonths,
  subMonths
} from 'date-fns'
import createDateFromYearMonthString from '~/modules/createDateFromYearMonthString'
import formatDate from '~/modules/formatDate'
import icons from '~/modules/icons'
import AppIconButton from '~/components/AppIconButton'
import AppTextButton from '~/components/AppTextButton'
import AppSettingDialog from '~/components/AppSettingDialog'

export default {
  components: {
    AppIconButton,
    AppTextButton,
    AppSettingDialog
  },
  data () {
    return {
      icons,
      showSettingDialog: false,
      date: createDateFromYearMonthString(this.$route.query.month)
    }
  },
  computed: {
    month () {
      return formatDate(this.date, 'yyyyMM')
    }
  },
  methods: {
    openSettingDialog () {
      this.showSettingDialog = true
    },
    toPrevMonthPage () {
      this.date = subMonths(this.date, 1)
      this.$router.push({ query: { month: this.month } })
    },
    toCurrentMonthPage () {
      this.date = new Date()
      this.$router.push({ query: { month: this.month } })
    },
    toNextMonthPage () {
      this.date = addMonths(this.date, 1)
      this.$router.push({ query: { month: this.month } })
    }
  }
}
</script>
