<template>
  <div class="outline-gray-button1-container">
    <button class="outline-gray-button1-button Content">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'OutlineGrayButton1',
  props: {
    button: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style scoped>
.outline-gray-button1-container {
  display: flex;
  position: relative;
}
.outline-gray-button1-button {
  color: #ffffff;
  outlinr: none;
  font-style: normal;
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-color: var(--dl-color-secondary-200);
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  letter-spacing: -0.025rem;
  padding-bottom: var(--dl-space-space-triplequarterunit);
  background-color: #2b2b2b;
}
</style>
