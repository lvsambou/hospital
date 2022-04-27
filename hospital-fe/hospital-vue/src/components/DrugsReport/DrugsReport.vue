<template>
<div class="wh-1 d-flex ml-36">
  <img class="phcy-logo absolute m-neg" alt="pharmacy-icon" src="../../assets/img/pharmacy.png"/>

  <div class="wh-2 b-line-1 d-flex">
      <div class="wh-3 mt-6 ml-8 d-flex flex-wrap justify-between">
        <medecine-card item="Aspirin" :inValue="drugsValue" :isChecked="true"/>
        <medecine-card item="Antibiotic" :inValue="drugsValue" :isChecked="setChecked(false)"/>
        <medecine-card item="Insulin" :inValue="drugsValue" :isChecked="setChecked(true)"/>
        <medecine-card item="Paracetamol" :inValue="drugsValue" :isChecked="setChecked(false)"/>
      </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MedecineCard from '../MedecineCard/MedecineCard.vue'
import '../../assets/base.css'

export default defineComponent({
  name: 'DrugsReport',
  components: {
    MedecineCard
  },
  data () {
    return {
      drugsValue: 'As'
    }
  },
  methods: {
    setChecked (isChecked: boolean) {
      return isChecked
    }
  }
})
</script>

<style scoped>
  .wh-1 {
    width: 20.313rem;
    height: fit-content;
  }
  .wh-2 {
    width: 15.188rem;
    height: 31.875rem;
  }
  .wh-3 {
    width: 7.063rem;
    height: 23.875rem;
  }

  .m-neg {
    margin-left: -5rem;
  }

  .phcy-logo {
    width: 5.125rem;
    height: 5.063rem;
  }
</style>
