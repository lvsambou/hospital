<template>
  <div class="w-disease d-flex" >
    <div>
      <img :class="`${cardSize === 'large' ? 'd-logo' : 'd-icon'}`" :alt="`${state}-icon`" :src="require(`../../assets/img/${state}.png`)"/>
      <p :class="`${cardSize === 'large' ? 'fs-14 mt-neg-05' : 'fs-12 mt-neg-02'}`">{{state}}</p>
    </div>
    <input type="text" :class="`${cardSize === 'large' ? 'fs-20 mt-10 wh-l-input' : 'fs-14 mt-1 wh-s-input'}  shadow border b-radius text-center ml-1`" v-model="value"  id="" name=""/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '../../assets/base.css'

export default defineComponent({
  name: 'StateCard',
  props: ['cardSize', 'inValue', 'state'],
  data () {
    return {
      value: this.inValue
    }
  }
})
</script>

<style scoped>
 .w-disease {
    width: 9.188rem;
    height: fit-content;
  }
  .wh-l-input {
    width: 2.75rem;
    height: 2.875rem;
  }
  .wh-s-input {
    width: 1.853rem;
    height: 1.938rem;
  }

  .d-logo {
    height: 5.813rem;
    width: 5.813rem;
  }
  .d-icon {
    height: 2.875rem;
    width: 2.875rem;
  }

  .mt-neg-05 {
    margin-top: -0.5rem;
  }
  .mt-neg-02 {
    margin-top: -0.2rem;
  }

  .shadow {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .border {
    border: 1px solid #979797
  }
</style>
