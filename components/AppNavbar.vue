<template>
  <header>
    <nav class="containerr">
      <!-- <li> -->
      <nuxt-link to="/about">
        <div @click="selectTab('about')" class="nav-about">
          אודות רינתאל
        </div>
      </nuxt-link>
      <!-- </li> -->
      <!-- <li> -->
      <nuxt-link to="/acu">
        <div @click="selectTab('acu')" class="nav-acu">
          דיקור סיני
        </div>
      </nuxt-link>
      <!-- </li> -->
      <!-- <li> -->
      <nuxt-link to="/">
        <div @click="selectTab('home')" class="nav-home">
          דף הבית
        </div>
      </nuxt-link>
      <!-- </li> -->
      <nuxt-link class="nav-logo" to="/">
        <div>
          <img class="logo" src="/RinatelBarLogo.png" alt="" />
        </div>
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  // scrollToTop: false,
  data() {
    return {};
  },
  methods: {
    selectTab(tab) {
      this.isActive = tab;
      this.$emit("tabSelected", tab);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
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
    background-color: whitesmoke;
  }
  .nav-home:hover,
  .nav-acu:hover,
  .nav-about:hover {
    background-color: #7cb342;
    color: white;
    transition: 0.5s background-color;
  }
  .nuxt-link-exact-active {
    color: white;
    transition: 0.5s border-bottom;
    background: rgb(15, 112, 20);
  }
  .nav-logo {
    background-color: whitesmoke;
    border: 0;
    .logo {
      width: 5rem;
      margin: 0 1.5rem;
    }
  }

  a {
    display: inline-block;
    position: relative;
    padding-bottom: 3px;
  }
  a:last-child {
    margin-right: 0;
    flex: 0;
    padding: 0;
  }

  a:after {
    content: "";
    display: block;
    margin: auto;
    height: 3px;
    width: 0px;
    background: transparent;
    transition: width 0.5s ease, background-color 0.5s ease;
  }
  a:hover:after {
    width: 100%;
    background: rgb(15, 112, 20);
  }
  a:last-of-type:hover:after {
    background: transparent;
  }
}
</style>
