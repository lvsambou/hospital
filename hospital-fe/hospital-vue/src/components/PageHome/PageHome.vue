<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '../PageHeader/PageHeader.vue'
import SimpleButton from '../SimpleButton/SimpleButton.vue'
import { Quarantine, PatientsRegister } from 'hospital-lib'
import { aggregateReports } from './helper'
import '../../assets/base.css'

export default defineComponent({
  name: 'PageHome',
  components: {
    PageHeader,
    SimpleButton
  },
  data () {
    return {
      drugs: '',
      patients: { F: 0, H: 0, D: 0, T: 0, X: 0 },
      checked: false,
      reports: [
        { before: {}, after: {} }
      ]
    }
  },
  methods: {
    async getData (url: string) {
      const response = await window.fetch(url, {
        method: 'GET'
      })
      const data = await response.json()
      if (response.ok) {
        console.log(data)
        return data
      } else {
        return 'nothing'
      }
    },
    async getHospitalData () {
      const patients = await this.getData('http://localhost:7200/patients')
      const drugs = await this.getData('http://localhost:7200/drugs')
      const patientsReport = { F: 0, H: 2, D: 0, T: 0, X: 3 }
      this.patients = patients ? this.formatToObject(patients, patientsReport) : { F: 0, H: 0, D: 0, T: 0, X: 0 }
      this.drugs = drugs
    },
    cure (patients: PatientsRegister, drugs: string) {
      const quarantine = new Quarantine(patients)
      quarantine.setDrugs(this.createDrugsArray(drugs))
      quarantine.wait40Days()
      const data = quarantine.report()
      this.reports = aggregateReports({
        before: patients,
        after: data
      }).reverse()
    },
    createDrugsArray (drugs: string) {
      const newObj = {
        As: drugs.includes('As'),
        An: drugs.includes('An'),
        I: drugs.includes('I'),
        P: drugs.includes('P')
      }
      const drugsArray: Array<string> = []
      Object.entries(newObj).forEach(entry => {
        const [key, value] = entry
        if (value === true) {
          drugsArray.push(key)
        }
      })
      return drugsArray
    },
    formatToObject (data: string, obj: Record<string, number>): { F: number; H: number; D: number; T: number; X: number; } {
      const newObj = obj
      Object.keys(obj).forEach(key => {
        const count = data.split(key).length - 1
        newObj[key] += count
      })
      return newObj as { F: number; H: number; D: number; T: number; X: number; }
    },
    isChecked (data: string) {
      return this.drugs.includes(data)
    }
  }
})
</script>

<template>
  <div class="d-flex mt-neg justify-between">

    <div class="d-flex fd-c justify-center wh-1 justify-between">
      <page-header class="ml-align"/>

      <div class="d-flex mt-8">
        <div class="wh-1-pr d-flex ml-8 pt-15">
          <img class="pr-logo absolute m-neg" alt="patients-report-image" src="../../assets/img/patients-report.png"/>

          <div class="wh-2 b-line-1 d-flex justify-center items-center">
            <div class="wh-3 mt-4">
              <div class="wh-diseases d-flex flex-wrap justify-between">

                <div class="w-disease d-flex" >
                  <div>
                    <img class="d-logo"  alt="Fever-icon" src="../../assets/img/Fever.png"/>
                    <p class="fs-14 mt-neg-05">Fever</p>
                  </div>
                  <input type="text" class="fs-20 mt-10 wh-l-input shadow border b-radius text-center ml-1" v-model="patients.F"  id="" name=""/>
                </div>

                <div class="w-disease d-flex" >
                  <div>
                    <img class="d-logo"  alt="Diabetics-icon" src="../../assets/img/Diabetics.png"/>
                    <p class="fs-14 mt-neg-05">Diabetics</p>
                  </div>
                  <input type="text" class="fs-20 mt-10 wh-l-input shadow border b-radius text-center ml-1" v-model="patients.D"  id="" name=""/>
                </div>

                <div class="w-disease d-flex" >
                  <div>
                    <img class="d-logo"  alt="Tuberculosis-icon" src="../../assets/img/Tuberculosis.png"/>
                    <p class="fs-14 mt-neg-05">Tuberculosis</p>
                  </div>
                  <input type="text" class="fs-20 mt-10 wh-l-input shadow border b-radius text-center ml-1" v-model="patients.T"  id="" name=""/>
                </div>

                <div class="w-disease d-flex" >
                  <div>
                    <img class="d-logo"  alt="Healthy-icon" src="../../assets/img/Healthy.png"/>
                    <p class="fs-14 mt-neg-05">Healthy</p>
                  </div>
                  <input type="text" class="fs-20 mt-10 wh-l-input shadow border b-radius text-center ml-1" v-model="patients.H"  id="" name=""/>
                </div>

              </div>

              <div class="w-disease d-flex" >
                  <div>
                    <img class="d-icon" alt="Dead-icon" src="../../assets/img/Dead.png"/>
                    <p class="`fs-12 mt-neg-02">Dead</p>
                  </div>
                  <input type="text" class="fs-14 mt-1 wh-s-input shadow border b-radius text-center ml-1" v-model="patients.X"  id="" name=""/>
              </div>
            </div>
          </div>
        </div>

        <div class="wh-1-dr d-flex ml-36">
          <img class="phcy-logo absolute m-neg-dr" alt="pharmacy-icon" src="../../assets/img/pharmacy.png"/>

          <div class="wh-2-dr b-line-1 d-flex">
              <div class="wh-3-dr mt-6 ml-8 d-flex flex-wrap justify-between">

              <div class="w-card d-flex flex-wrap justify-between">
                  <div>
                    <p class="fs-10">Aspirin</p>
                    <img class="icon" alt="Aspirin-icon" src="../../assets/img/Aspirin.png"/>
                  </div>
                  <div class="shadow b-radius bg-white border wh-l-input mt-10 d-flex justify-center items-center">
                    <div :class="`${isChecked('As') ? 'round' : 'd-none'}`"></div>
                  </div>
              </div>

              <div class="w-card d-flex flex-wrap justify-between">
                  <div>
                    <p class="fs-10">Antibiotic</p>
                    <img class="icon" alt="Antibiotic-icon" src="../../assets/img/Antibiotic.png"/>
                  </div>
                  <div class="shadow b-radius bg-white border wh-l-input mt-10 d-flex justify-center items-center">
                    <div :class="`${isChecked('An') ? 'round' : 'd-none'}`"></div>
                  </div>
              </div>

              <div class="w-card d-flex flex-wrap justify-between">
                  <div>
                    <p class="fs-10">Insulin</p>
                    <img class="icon" alt="Insulin-icon" src="../../assets/img/Insulin.png"/>
                  </div>
                  <div class="shadow b-radius bg-white border wh-l-input mt-10 d-flex justify-center items-center">
                    <div :class="`${isChecked('I') ? 'round' : 'd-none'}`"></div>
                  </div>
              </div>

              <div class="w-card d-flex flex-wrap justify-between">
                  <div>
                    <p class="fs-10">Paracetamol</p>
                    <img class="icon" alt="Paracetamol-icon" src="../../assets/img/Paracetamol.png"/>
                  </div>
                  <div class="shadow b-radius bg-white border wh-l-input mt-10 d-flex justify-center items-center">
                    <div :class="`${isChecked('P') ? 'round' : 'd-none'}`"></div>
                  </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div class="ml-align d-flex justify-between mt-neg pt-15">
        <simple-button @click="getHospitalData"  color="blue" btnSize="large" btnName="Get Quarantine data" />
        <simple-button @click="cure(this.patients, this.drugs)" class="mr-btn" color="green" btnSize="small" btnName="Cure"/>
      </div>
    </div>

    <div class="bg-light-grey block-h w">
      <h2>Hospital reports:</h2>
      <div v-for="report in reports" :key="report">
        <p class="bg-grey w section-h py-2 my-2 fs-10">
          <span class="bg-yellow">After Quarantine -></span>
          {{report.after}}
          <br/>
          <span>Quarantine -></span>
          {{report.before}}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wh-1 {
    width: fit-content;
    height: 33rem;
  }

  .wh-btn {
    width: 38.125rem;
    height: 3.563rem;
  }

  .mt-neg {
    margin-top: -3rem;
  }

  .mb {
    margin-bottom: 3rem;
  }

  .ml-align {
    margin-left: 15rem;
  }

  .wh-1-pr {
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
  .mr-btn {
    margin-right: 5rem;
  }

  .wh-1-dr {
    width: 20.313rem;
    height: fit-content;
  }
  .wh-2-dr {
    width: 15.188rem;
    height: 31.875rem;
  }
  .wh-3-dr {
    width: 7.063rem;
    height: 23.875rem;
  }

  .m-neg-dr {
    margin-left: -5rem;
  }

  .phcy-logo {
    width: 5.125rem;
    height: 5.063rem;
  }

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

  .w-card {
    width: 7.063rem;
    height: fit-content;
  }
  .icon {
    width: 3.313rem;
    height: 3.313rem;
  }

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
  .round {
    width: 1.125rem;
    height: 1.063rem;
    background: #70F2A4;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);
    border-radius: 50%
  }
  .d-none {
    display: none;
  }
</style>
