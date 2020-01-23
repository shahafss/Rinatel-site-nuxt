<template>
  <div class="container">
    <div class="row">
      <div
        class="content col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
      >
        <h1>HTTP</h1>
        <form action="http://localhost:8080/admin/add-product" method="POST">
          <div class="form-group">
            <!-- <label for="title">Title</label> -->
            <!-- <input type="text" name="title" id="title" /> -->
            <label for="username">Username</label>
            <input
              type="text"
              v-model="user.username"
              name="userusername"
              id="username"
              class="form-control"
            />
            <div>
              <label for="email">eMail</label>
              <input
                class="form-control"
                type="text"
                v-model="user.email"
                name="useremail"
                id="email"
              />
            </div>
          </div>
          <button @click="submit" class="btn btn-primary">Submit!</button>
        </form>

        <hr />
        <button @click="fetchData" class="btn btn-primary">Get Data</button>
        <hr />
        <button @click="toLocal" class="btn btn-primary">
          post to localhost
        </button>
        <hr />

        <ul class="list-group">
          <li class="list-group-item" v-for="(user, i) in users" :key="i">
            {{ user.username }} - {{ user.email }}
          </li>
        </ul>
        <div>
          דיקור סיני||דיקור סיני||דיקור סיני||דיקור סיני||דיקור סיני||דיקור
          סיני||דיקור סיני||דיקור סיני||דיקור סיני||דיקור סיני||דיקור
          סיני||דיקור סיני||דיקור סיני||דיקור סיני||דיקור סיני||דיקור
          סיני||דיקור סיני||דיקור סיני||דיקור סיני||דיקור סיני||דיקור
          סיני||דיקור סיני||דיקור סיני||דיקור סיני||דיקור סיני||דיקור
          סיני||דיקור סיני||דיקור סיני||דיקור סיני||דיקור סיני||דיקור
          סיני||דיקור סיני||דיקור סיני||דיקור סיני||דיקור סיני||דיקור
          סיני||דיקור סיני||דיקור סיני||
        </div>
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
        username: "34234",
        email: "32423"
      },
      users: [],
      responseBody: "",
      person: {
        name: "Viv",
        job: "Dancer",
        age: 82
      }
    };
  },
  methods: {
    submit() {
      axios
        .post("https://rinatel-site.firebaseio.com/data.json", this.user)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    fetchData() {
      axios
        .get("https://rinatel-site.firebaseio.com/data.json")
        .then(({ data }) => {
          // console.log("grgrgrgr > ", data);
          const resultArray = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            console.log(user);
            resultArray.push(user);
          }
          this.users = resultArray;
        });
    },
    toLocal() {
      axios({
        method: "post",
        url: "http://localhost:8080/admin/add-product",
        data: bodyFormData,
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*"
        }
      })
        .then(res => {
          console.log(res.config.data);
        })
        .catch(res => {
          console.log(res);
        });
      // axios.post("http://localhost:8080/admin/add-product", "pipsip");
      // .then(response => {
      //   this.responseBody = response.body;
      //   console.log("the what ", response.body);
      // });
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.row {
  justify-content: center;
  .content {
    display: flex;
    flex-direction: column;
  }
}
</style>
