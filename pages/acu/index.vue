<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>HTTP</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="form-group">
          <label>eMail</label>
          <input type="text" class="form-control" v-model="user.email" />
        </div>
        <button @click="submit" class="btn btn-primary">Submit!</button>
        <hr />
        <button @click="fetchData" class="btn btn-primary">Get Data</button>
        <hr />
        {{ responseBody }}
        <button @click="toLocal" class="btn btn-primary">
          post to localhost
        </button>
        <hr />
        <input v-model="date" type="date" />
        <p>{{ date }}</p>
        <p>currentDate {{ currentDate.split(",")[0] }}</p>
        <p>{{ isEarlier }}</p>
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
export default {
  data() {
    return {
      date: "",
      currentDate: new Date().toLocaleString(),
      user: {
        username: "34234",
        email: "32423"
      },
      users: [],
      responseBody: ""
    };
  },
  methods: {
    submit() {
      this.$http.post("", this.user).then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    },
    fetchData() {
      this.$http
        .get("")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    },
    toLocal() {
      this.$http.get("http://localhost:3000/").then(response => {
        this.responseBody = response.body;
        console.log(response.body);
      });
    }
  },
  computed: {
    isEarlier() {
      const dateObj = new Date(this.date).toLocaleDateString().split(",")[0];
      console.log(dateObj);

      return dateObj < this.currentDate;
    }
  }
};
</script>

<style lang="scss" scoped></style>
