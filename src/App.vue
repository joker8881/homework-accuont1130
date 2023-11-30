<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template class="body">
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        <div class="cBox">
          <RouterView />
        </div>
</template>

<style scoped lang="scss">
.cBox{
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>
