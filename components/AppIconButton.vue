<template>
  <v-btn
    :disabled="disabled"
    :to="to"
    @click="click"
    icon
  >
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    to: {
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
