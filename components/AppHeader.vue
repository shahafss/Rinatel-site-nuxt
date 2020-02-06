<template>
  <div class="header">
    <div class="logo-container">
      <img class="logo-img" src="/RinatelBarLogo.png" alt="" />
    </div>
    <div class="contact-dropdown" v-on-clickaway="onBlur">
      <button
        @click="toggleDropdown = !toggleDropdown"
        :style="{ display: 'flex' }"
        class="btn btn-primary"
      >
        לקביעת תור לחצו
      </button>
      <AppFade fadeMode="fade">
        <div v-if="toggleDropdown" class="form-container">
          <validation-observer v-if="!isEmailSent" v-slot="{ invalid }">
            <form action="">
              <div class="form-group form-inputs">
                <ValidationProvider
                  class="v-provider"
                  tag="div"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <input
                    v-model="client.name"
                    type="text"
                    dir="rtl"
                    placeholder="שם:"
                    onfocus="this.placeholder = '' "
                    onblur="this.placeholder = 'שם:' "
                    class="form-control"
                  />
                  <AppFade fadeMode="fade">
                    <div v-if="errors.length" class="error">
                      {{ errors[0] }}
                    </div>
                  </AppFade>
                </ValidationProvider>
                <ValidationProvider
                  class="v-provider"
                  tag="div"
                  rules="email|required"
                  v-slot="{ errors }"
                >
                  <input
                    v-model="client.email"
                    type="text"
                    dir="rtl"
                    placeholder="אימייל:"
                    onfocus="this.placeholder = '' "
                    onblur="this.placeholder = 'אימייל:' "
                    class="form-control"
                    name="email"
                  />
                  <AppFade fadeMode="fade">
                    <div v-if="errors.length" class="error">
                      {{ errors[0] }}
                    </div>
                  </AppFade>
                </ValidationProvider>
                <ValidationProvider
                  class="v-provider"
                  tag="div"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <input
                    v-model="client.phone"
                    type="number"
                    dir="rtl"
                    placeholder="טלפון:"
                    onfocus="this.placeholder = '' "
                    onblur="this.placeholder = 'טלפון:' "
                    class="form-control"
                    name="phone"
                  />
                  <AppFade fadeMode="fade">
                    <div v-if="errors.length" class="error">
                      {{ errors[0] }}
                    </div>
                  </AppFade>
                </ValidationProvider>
                <ValidationProvider tag="div" class="v-provider">
                  <input
                    v-model="client.message"
                    type="text"
                    dir="rtl"
                    placeholder="הודעה:"
                    onfocus="this.placeholder = '' "
                    onblur="this.placeholder = 'הודעה' "
                    class="form-control"
                    name="message"
                  />
                </ValidationProvider>
              </div>
              <button
                @click.prevent="submit"
                class="send-btn btn btn-primary"
                :disabled="invalid"
              >
                שלח
              </button>
            </form>
          </validation-observer>
          <div v-else>
            <h1>Email sent!</h1>
          </div>
        </div>
      </AppFade>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mixin as clickaway } from "vue-clickaway";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import AppFade from "@/components/AppFade";

export default {
  data() {
    return {
      client: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      isEmailSent: false,
      toggleDropdown: false
    };
  },
  mixins: [clickaway],
  methods: {
    submit() {
      axios
        .post(
          "http://localhost:8080/admin/new-client",
          JSON.stringify(this.client),
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log("response-> ", res);
          this.isEmailSent = true;
        })
        .catch(err => console.log("error --> ", err));

      // axios({
      //   method: "post",
      //   url: "http://localhost:8080/admin/new-client",
      //   data: "asda",
      //   headers: { "Content-Type": "application/json" }
      // })
      //   .then(res => console.log("response-> ", res))
      //   .catch(err => console.log("error message --> ", err));
    },
    onBlur() {
      if (this.toggleDropdown) this.toggleDropdown = !this.toggleDropdown;
    }
  },
  components: {
    ValidationObserver,
    ValidationProvider,
    AppFade
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
  .contact-dropdown {
    width: 8.4rem;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
    .form-container {
      height: 20rem;
      width: 20rem;
      background-color: white;
      padding: 15px;
      padding-top: 0;
      border: 1px solid rgba(0, 0, 0, 0.342);
      border-radius: 4px;
      .form-inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .v-provider {
        width: 100%;
        input {
          margin-top: 1.5rem;
          border: 0;
          border-radius: 0;
          border-bottom-right-radius: 8px;
          border-bottom: 1px solid black;
        }
        .error {
          color: #ff0000;
          position: absolute;
          width: 100%;
          right: 0;
          left: 60%;
          white-space: nowrap;
        }
      }
    }
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 0.5s;
  }
  .fade-leave {
    // opacity: 1;
  }
  .fade-leave-active {
    transition: opacity 0.5s;
    opacity: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
}
</style>
