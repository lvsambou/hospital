<template>
 <div class="w-card d-flex flex-wrap justify-between">
    <div>
      <p class="fs-10">{{item}}</p>
       <img class="icon" :alt="`${item}-icon`" :src="require(`../../assets/img/${item}.png`)"/>
    </div>
    <input class="shadow b-radius bg-white border wh-l-input mt-10" type="checkbox" :id="item" :name="item" :value="inValue" v-model="checked" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '../../assets/base.css'

export default defineComponent({
  name: 'PageHeader',
  props: ['item', 'inValue', 'isChecked'],
  data () {
    return {
      checked: this.isChecked
    }
  }
})
</script>

<style scoped>
 .w-card {
    width: 7.063rem;
    height: fit-content;
  }
  .icon {
    width: 3.313rem;
    height: 3.313rem;
  }

  .wh-l-input {
    width: 2.75rem;
    height: 2.875rem;
  }

  .shadow {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .border {
    border: 1px solid #979797
  }
</style>
