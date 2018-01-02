<template>
  <transition name="fade">
    <div class="container">
      <div class="panel">
        <h1>Sign In</h1>
        <div class="sign_in_form">
          <v-form>
            <v-text-field
              label="Name"
              v-model="name"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              required
            ></v-text-field>
            <v-btn class="send-button" @click="signIn">Sign In</v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

// FormのデザインにVuetifyを使用したが、Markdownのデザインが崩れたため無しに。

import axios from 'axios'
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'SignIn',
  data () {
    return {
      name: "",
      password: ""
    }
  },
  methods: {
    async signIn () {
      console.log("hello")
      try {
        const response = await AuthenticationService.signIn({
          name: this.name,
          pwd: this.password
        })
        console.log(response)
        console.log(response.data.token)
        console.log(response.data.user)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        console.log("setToken")
      } catch(error) {
        console.log(error)
        this.error = error
      }
    }
  }
}
</script>

<style scoped>

.container {
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.panel {
  width: 75vw;
  height: 350px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.35);
  text-align: left;
}

.input_text-field {
  width: 90%;
  margin: 20px auto;
}

.sign_in_form {
  padding: 20px 50px;
}

h1 {
  padding-top: 50px;
  padding-left: 50px;
}

.send-button {
  position: relative;
}
</style>