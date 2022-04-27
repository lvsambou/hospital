<template>
  <button
    :class="`${color} ${btnSize === 'small' ? 'wh-small' : 'wh-large'} drop-shadow b-radius fs-18 fw-800 wh-line`" type="button" :id="btnName"
  >
    {{btnName}}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '../../assets/base.css'

export default defineComponent({
  name: 'SimpleButton',
  props: ['color', 'btnSize', 'btnName']
})
</script>

<style scoped>
  .wh-line{
    border:none;
  }
  .wh-line:hover {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  .wh-large {
    width: 16.813rem;
    height: 3.563rem;
  }
  .wh-small {
    width: 11.813rem;
    height: 3.563rem;
  }

  .drop-shadow {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .green {
    background-color: #6BE78D;
  }
  .blue {
    background-color: #47B7F6;
  }

  .b-radius {
  border-radius: 1.2rem!important;
  }
</style>
