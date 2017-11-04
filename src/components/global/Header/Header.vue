<template>
  <div class="main-header">
    <ul class="button-group">
      <li><router-link to="/">Feeds</router-link></li>
      <li><router-link to="/markdown">New</router-link></li>
    </ul>
  </div>
</template>


<style scoped>

.main-header {
  height: 50px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0 10px 0 0;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}

li {
  height: 100%;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all .3s;
}

li:hover {
  background: #ECF4FF;
}

</style>

<script>

</script>
