<template>
  <div class="container">
    <section class="row" id="landing">
      <landingComp/>
    </section>
    <section class="row" id="services"></section>
    <section class="row" id="work"></section>
    <section class="row" id="about"></section>
    <section class="row" id="skills"></section>
    <section class="row" id="testimonials"></section>
    <section class="row" id="contact"></section>
  </div>
</template>

<script>

import landingComp from '../components/landingComp.vue'

export default {
  name: 'HomeView',
  components: {
    landingComp
  }
}
</script>
