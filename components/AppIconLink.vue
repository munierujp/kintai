<template>
  <router-link
    :to="to"
    class="app-icon-link"
  >
    <v-icon>{{ icon }}</v-icon>
  </router-link>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    to: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.app-icon-link {
  text-decoration: none;
}
</style>
