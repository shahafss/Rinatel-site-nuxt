<template>
  <div class="app">
    <app-home></app-home>
  </div>
</template>

<script>
import AppHome from "@/components/AppHome.vue";
import AppAcu from "@/components/AppAcu.vue";
import AppAbout from "@/components/AppAbout.vue";
import AppSlider from "@/components/AppSlider.vue";

export default {
  data() {
    return {};
  },
  components: {
    appHome: AppHome,
    appAcu: AppAcu,
    appAbout: AppAbout
  },
  methods: {}
};
</script>

<style lang="scss"></style>
