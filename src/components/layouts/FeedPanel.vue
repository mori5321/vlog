<template>
  <router-link :to="'/feed/'+feed.id">
    <div class="container">
      <p class="title">{{ feed.title }}</p>
      <p class="date">{{ feed.created_at }}</p>
    </div>
  </router-link>
</template>


<script>

export default {
  name: 'FeedPanel',
  props: ["feed"]
}

</script>




<style scoped>

.container {
  position: relative;
  height: 65px;
  width: 80vw;
  margin: 25px auto;
  padding-left: 8px;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
  box-shadow: 0 1px 2px rgba(0,0,0,0.26);
  cursor: pointer;
  top: 0;
  left: 0;
}

.container:hover {
  background-color: #DAFEFF;
  box-shadow: 0 3px 5px rgba(0,0,0,0.26);
  top: -3px;
  left: -3px;
}

.title {
  margin: 0;
  font-size: 18px;
  height: 100%;
  width: 70%;
  display: flex;
  align-items: center; /* 縦方向 */
  justify-content: left; /* 横方向 */
}

.date {
  position: absolute;
  font-size: 14px;
  right: 20px;
  bottom: 5px;
  margin: 0;
  color: #A7A6BB;
}

</style>