<template>
  <transition appear name="fade" mode="out-in">
    <slot />
  </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-out,
    transform 0.15s cubic-bezier(0.18, 0.89, 0.32, 1.28) !important;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(0.2rem);
}
</style>
