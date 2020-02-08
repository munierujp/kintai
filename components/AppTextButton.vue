<template>
  <v-btn
    :color="color"
    @click="click"
    text
    outlined
    class="app-text-button"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    }
  },
  methods: {
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-text-button {
  text-transform: none;
}
</style>
