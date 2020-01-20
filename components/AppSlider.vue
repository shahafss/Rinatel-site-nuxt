<template>
  <div class="slider-container">
    <div class="slider">
      <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i">
          <img :src="currentImg" />
        </div>
      </transition-group>
    </div>
    <div class="prev" @click="prev">&#10094;</div>
    <div class="next" @click="next">&#10095;</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/acupuncture_img_01.jpg",
        "/acupuncture_img_02.jpg",
        "/acupuncture_img_03.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 5000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>
<style lang="scss" scoped>
.slider-container {
  position: relative;
  .slider {
    width: 100%;
    height: 25rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  height: 25rem;
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 10rem;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  text-decoration: none;
  user-select: none;
  background-color: rgba(0, 0, 0, 0.425);
}

.next {
  right: 0;
  border-radius: 4px 0 0 4px;
}

.prev {
  left: 0;
  border-radius: 0 4px 4px 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
