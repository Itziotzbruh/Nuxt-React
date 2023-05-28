<template>
  <div class="outline-gray-button2-container" v-bind:class="rootClassName">
    <button class="outline-gray-button2-button ButtonSmall button">
      {{ button }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'OutlineGrayButton2',
  props: {
    rootClassName: String,
    button: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style scoped>
.outline-gray-button2-container {
  display: flex;
  position: relative;
}
.outline-gray-button2-button {
  color: #000000;
  outlinr: none;
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-color: var(--dl-color-secondary-200);
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
  background-color: #00f57a;
}
.outline-gray-button2-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}
@media(max-width: 991px) {
  .outline-gray-button2-button {
    color: #000000;
    background-color: #00ff2c;
  }
}
</style>
