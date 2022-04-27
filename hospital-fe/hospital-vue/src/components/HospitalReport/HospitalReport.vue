<template>
  <div class="bg-light-grey block-h w">
    <h2>Hospital reports:</h2>
    <div v-for="report in reports" :key="report">
      <p class="bg-grey w section-h py-2 my-2 fs-14">
        <span class="bg-yellow">After Quarantine -></span>
        {{report.after}}
        <br/>
        <span>Quarantine -></span>
        {{report.before}}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '../../assets/base.css'

export default defineComponent({
  name: 'HospitalReport',
  data () {
    return {
      reports: [
        {
          before: { F: 0, H: 2, D: 0, T: 0, X: 1 },
          after: { F: 0, H: 2, D: 0, T: 0, X: 3 }
        },
        {
          before: { F: 0, H: 2, D: 0, T: 0, X: 1 },
          after: { F: 0, H: 2, D: 0, T: 0, X: 3 }
        },
        {
          before: { F: 0, H: 2, D: 0, T: 0, X: 1 },
          after: { F: 0, H: 2, D: 0, T: 0, X: 3 }
        },
        {
          before: { F: 0, H: 2, D: 0, T: 0, X: 1 },
          after: { F: 0, H: 2, D: 0, T: 0, X: 3 }
        },
        {
          before: { F: 0, H: 2, D: 0, T: 0, X: 1 },
          after: { F: 0, H: 2, D: 0, T: 0, X: 3 }
        },
        {
          before: { F: 0, H: 2, D: 0, T: 0, X: 1 },
          after: { F: 0, H: 2, D: 0, T: 0, X: 3 }
        },
        {
          before: { F: 0, H: 2, D: 0, T: 0, X: 1 },
          after: { F: 0, H: 2, D: 0, T: 0, X: 3 }
        },
        {
          before: { F: 0, H: 2, D: 0, T: 0, X: 1 },
          after: { F: 0, H: 2, D: 0, T: 0, X: 3 }
        },
        {
          before: { F: 0, H: 2, D: 0, T: 0, X: 1 },
          after: { F: 0, H: 2, D: 0, T: 0, X: 3 }
        },
        {
          before: { F: 0, H: 2, D: 0, T: 0, X: 1 },
          after: { F: 0, H: 2, D: 0, T: 0, X: 3 }
        }
      ]
    }
  }
})
</script>

<style scoped>
  .bg-light-grey {
    background-color: #D4D4D4;
  }
  .bg-yellow {
    background-color: #d7ff6994;
  }
  .bg-grey {
    background-color: #C4C4C4;
  }
  .block-h {
    heigth: 61.375rem;
  }
  .w {
    width: 24.375rem;
    height: 100vh;
  }
  .section-h {
    height: fit-content;
  }
</style>
