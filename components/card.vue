<template>
  <section class="card-card" v-bind:class="rootClassName">
    <div class="card-icon"></div>
    <main class="card-content">
      <h1 class="card-header">{{ Header }}</h1>
      <p class="card-description">{{ Description }}</p>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Card',
  props: {
    rootClassName: String,
    Icon: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    Header: {
      type: String,
      default: 'Sima Mosbacher',
    },
    IconAlt: {
      type: String,
      default: 'image',
    },
    Description: {
      type: String,
      default:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
    },
  },
}
</script>

<style scoped>
.card-card {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: relative;
  align-items: flex-start;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #292929;
}
.card-icon {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  padding: var(--dl-space-space-unit13);
  align-items: center;
  aspect-ratio: 1;
  border-radius: 50%;
  flex-direction: column;
  justify-content: center;
  background-color: #80FF44;
}
.card-content {
  gap: var(--dl-space-space-halfunit12);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.card-header {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.card-description {
  color: #C2C6CC;
  font-family: Poppins;
  line-height: 28px;
}

@media(max-width: 479px) {
  .card-icon {
    background-color: transparent;
  }
}
</style>
