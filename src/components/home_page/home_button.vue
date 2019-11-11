<template>
  <div class="home-button-contianer">
      <button class="transition-box"><slot></slot></button>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.home-button-contianer {
  display: inline-block;
}

.transition-box {
  border: none;
  width: 150px;
  height: 50px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 10px 20px;
  overflow: hidden;
  border-radius: 16px;
  box-sizing: border-box;
  margin: 10px 10px 0 10px;
  cursor: pointer;
  outline: none
}

.transition-box:hover {
  background-color: #40e2ff;
}

.transition-box:focus {
  background-color: #409eff;
}

</style>
