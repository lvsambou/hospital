<template>
  <div class="wh-1 d-flex ml-8 pt-15">
    <img class="pr-logo absolute m-neg" alt="patients-report-image" src="../../assets/img/patients-report.png"/>

    <div class="wh-2 b-line-1 d-flex justify-center items-center">
      <div class="wh-3 mt-4">
        <div class="wh-diseases d-flex flex-wrap justify-between">
          <state-card state="Fever" cardSize="large" :inValue="H"/>
          <state-card state="Diabetics" cardSize="large" :inValue="H"/>
          <state-card state="Tuberculosis" cardSize="large" :inValue="H"/>
          <state-card state="Healthy" cardSize="large" :inValue="H"/>
        </div>

        <state-card state="Dead" cardSize="small" :inValue="H"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StateCard from '../StateCard/StateCard.vue'
import '../../assets/base.css'

export default defineComponent({
  name: 'PatientsReport',
  props: ['healthy'],
  components: {
    StateCard
  },
  data () {
    return {
      H: this.healthy
    }
  },
  methods: {
    // setData (data: Record<string, number>, key: string) {
    //   console.log(data)
    //   const value = data[key] ? data[key] : 0
    //   return value
    // },
    // async setInValue () {
    //   const value = await this.patientsReport
    //   console.log(value)
    //   return value
    // },
    // async setH () {
    //   const value = await this.healthy
    //   console.log(value)
    //   return value
    // }
  }
  // watch: {
  //   async getData () {
  //     const data = await this.healthy
  //     this.H = data
  //   }
  // },
  // computed: {
  //   setValue () {
  //     return this.H
  //   }
  // }
})
</script>

<style scoped>
  .wh-1 {
    width: 30.875rem;
    height: fit-content;
  }
  .wh-2 {
    width: 30rem;
    height: 27.563rem;
  }
  .wh-3 {
    width: 23.313rem;
    height: 21.875rem;
  }
  .wh-diseases {
    width: 23.313rem;
    height: 16.313rem;
  }
  .w-disease {
    width: 9.188rem;
    height: fit-content;
  }
  .w-dead {
    width: 5.313rem;
    height: fit-content;
  }

  .pr-logo {
    width: 6.563rem;
    height: 5.875rem;
  }
  .m-neg {
    margin-top: -4.3rem;
    margin-left: -1rem;
  }
</style>
