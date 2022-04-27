<template>
  <div class="wh d-flex">
    <img class="logo-wh" alt="hospital-logo" src="../../assets/img/hospital.png"/>
    <h1 class="l-space ml-2">OSPITAL INN</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '../../assets/base.css'

export default defineComponent({
  name: 'PageHeader'
})
</script>

<style scoped>
  .wh {
    width: 35.375rem;
    height: 5.813rem;
  }
  .logo-wh {
    height:5.813rem;
    width: 5.813rem;
  }
  .l-space {
    letter-spacing: 1rem;
  }
</style>
