<template>
  <div class="secondary-button2-container" v-bind:class="rootClassName">
    <button class="secondary-button2-button TextXS button">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'SecondaryButton2',
  props: {
    button: {
      type: String,
      default: 'Button',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.secondary-button2-container {
  display: flex;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.secondary-button2-button {
  color: #000000;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);
  transition: 0.3s;
  line-height: 1;
  padding-top: var(--dl-space-space-halfunit1);
  padding-left: var(--dl-space-space-unit1);
  padding-right: var(--dl-space-space-unit1);
  padding-bottom: var(--dl-space-space-halfunit1);
  text-transform: uppercase;
  background-color: #fe4164;
  -webkit-tap-highlight-color: transparent;
}
.secondary-button2-button:hover {
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);
}
.secondary-button2-button:active {
  background-color: var(--dl-color-secondary-100);
}






</style>
