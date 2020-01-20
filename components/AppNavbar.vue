<template>
  <header>
    <nav class="containerr">
      <nuxt-link to="/about">
        <div @click="selectTab('about')" class="nav-about">
          אודות רינתאל
        </div>
      </nuxt-link>
      <nuxt-link to="/acu">
        <div @click="selectTab('acu')" class="nav-acu">
          דיקור סיני
        </div>
      </nuxt-link>
      <nuxt-link to="/">
        <div @click="selectTab('home')" class="nav-home">
          דף הבית
        </div>
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    selectTab(tab) {
      window.scrollTo(0, 0);
      this.isActive = tab;
      this.$emit("tabSelected", tab);
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  z-index: 1;
  position: sticky;
  min-height: 60px;
  top: 0px;
  a {
    flex: 1;
    text-decoration: none;
  }
}

.containerr {
  display: flex;
  background-color: whitesmoke;
  height: 4rem;
  width: 100%;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2);
  .nav-home,
  .nav-acu,
  .nav-about {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 500;
    transition: 0.5s background-color;
    color: black;
  }
  .nav-home:hover,
  .nav-acu:hover,
  .nav-about:hover {
    background-color: #7cb342;
    color: white;
    transition: 0.5s background-color;
  }
  .nuxt-link-exact-active {
    background-color: #7cb342;
    color: white;
    border-right: 2px solid white;
    border-left: 2px solid white;
  }
}
</style>
