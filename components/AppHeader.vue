<template>
  <div class="header">
    <div class="logo-container">
      <img class="logo-img" src="/RinatelBarLogo.png" alt="" />
    </div>
    <div class="dropdown">
      <button
        class="call-btn btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        לקביעת תור לחצו
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <form action="">
          <div class="form-group">
            <input
              type="text"
              dir="rtl"
              placeholder="שם:"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'שם:'"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              dir="rtl"
              placeholder="אימייל:"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'אימייל:'"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              dir="rtl"
              placeholder="טלפון:"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'טלפון:'"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              dir="rtl"
              placeholder="הודעה:"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'הודעה:'"
            />
          </div>
          <div class="form-group">
            <button @click.prevent="submit" class="send-btn btn btn-primary">
              שלח
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      var link = "mailto:shahaflidor@gmail.com?&subject=jajaja&body=wawawawa";
      window.location.href = link;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 13rem;
  text-align: center;
  background-color: #f7ca7c;
  .logo-img {
    margin-top: 1rem;
    height: 10rem;
  }
  .call-btn {
    position: absolute;
    bottom: 8rem;
    left: 0.6rem;
  }
  .dropdown-menu {
    padding: 1rem;
    width: 25rem;
    input {
      width: 100%;
      border: 0;
      border-bottom: 1px solid #a4a4a4;
    }
    .send-btn {
      width: 100%;
    }
  }
}
</style>
