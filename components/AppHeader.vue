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
        <form action="http://localhost:8080/admin/new-client" method="POST">
          <div class="form-group">
            <input
              v-model="user.name"
              type="text"
              dir="rtl"
              placeholder="שם:"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'שם:'"
              class="form-control"
              name="name"
            />
            <input
              v-model="user.email"
              type="text"
              dir="rtl"
              placeholder="אימייל:"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'אימייל:'"
              class="form-control"
              name="email"
            />
            <input
              v-model="user.phone"
              type="text"
              dir="rtl"
              placeholder="טלפון:"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'טלפון:'"
              class="form-control"
              name="phone"
            />
            <input
              v-model="user.message"
              type="text"
              dir="rtl"
              placeholder="הודעה:"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'הודעה:'"
              class="form-control"
              name="message"
            />
          </div>
          <button @click.prevent="submit" class="send-btn btn btn-primary">
            שלח
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
        message: ""
      }
    };
  },
  methods: {
    submit() {
      axios
        .post(
          "http://localhost:8080/admin/new-client",
          JSON.stringify(this.user),
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => console.log("response-> ", res))
        .catch(err => console.log("error message --> ", err));

      // axios({
      //   method: "post",
      //   url: "http://localhost:8080/admin/new-client",
      //   data: "asda",
      //   headers: { "Content-Type": "application/json" }
      // })
      //   .then(res => console.log("response-> ", res))
      //   .catch(err => console.log("error message --> ", err));
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
