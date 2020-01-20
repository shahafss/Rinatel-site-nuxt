<template>
  <div class="footer-container">
    <div class="footer-address">
      <fa class="icon" :icon="['fas', 'map-marker-alt']" />
      <div>כתובת: מושב עין-עירון, נוף הזריחה 1</div>
    </div>
    <div class="footer-phone">
      <fa class="icon" :icon="['fas', 'phone-alt']" />
      <div>טלפון: 052-6677855</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-container {
  position: absolute;
  width: 100%;
  height: 15rem;
  background-color: #36383963;
  .footer-address,
  .footer-phone {
    color: white;
    text-align: end;
    margin-top: 2rem;
    font-size: 18px;
    display: flex;
    flex-direction: row-reverse;
  }
  .footer-address {
    margin-right: 2rem;
  }
  .footer-phone {
    margin-right: 1.8rem;
  }
  .icon {
    align-self: center;
    margin-left: 1rem;
  }
}
</style>
