<template>
  <div class="main-header">
    <ul class="button-group">
      <li class="logo"><router-link to="/">Diary</router-link></li>
      <li><router-link to="/" class="link">Feeds</router-link></li>
      <li v-if="$store.state.isUserLoggedIn">
        <router-link to="/markdown" class="link">New</router-link>
      </li>
    </ul>
  </div>
</template>


<style scoped>

.main-header {
  position: fixed;
  width: 100%;
  height: 50px;
  background: rgba(0,150,120,0.75);
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);
  z-index: 999;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}

li {
  width: 80px;
  cursor: pointer;
  transition: all .3s;
}

li:first-child {
  padding-left: 10px;
  padding-right: 10px;
  margin-right: auto;
}

li:hover {
  background: #77C5A9;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo a {
  color: white;
}

.link {
  color: white;
  height: 100%;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>

<script>

</script>
