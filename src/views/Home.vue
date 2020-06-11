<template>
  <div class="home-view">
    <div class="loader" v-if="loading">
      <b-spinner variant="primary" type="grow" label="Spinning" style="width: 3rem; height: 3rem;" class="mr-5"></b-spinner> 
      <b-spinner variant="primary" type="grow" label="Spinning" style="width: 3rem; height: 3rem;" class="mr-5"></b-spinner> 
      <b-spinner variant="primary" type="grow" label="Spinning" style="width: 3rem; height: 3rem;"></b-spinner>
    </div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-card-group deck class="mb-4">
        <b-card title="Covid's probability of death calculator">
          <b-row>
            <b-col sm="12">
              <!--Gender -->
              <b-form-group label="Gender:">
                <b-form-select v-model="form.Features[0].SEXO" :options="gender" required></b-form-select>
              </b-form-group>
            </b-col>
            <b-col ms="12">
              <!--Age -->
              <b-form-group label="Age:">
                <b-form-input type="number" v-model="form.Features[0].EDAD" required />
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
        <transition name="fade">
          <b-card title="Result" v-if="result">
            <b-card-body>
              <h3>{{ result.message }}</h3>
              <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>
            </b-card-body>
          </b-card>
        </transition>
      </b-card-group>
      <b-card-group deck>
        <b-card title="Features">
          <b-row>
            <!--Intubated -->
            <b-col sm="12" md="6" lg="3">
              <b-form-group label="Intubated:">
                <b-form-radio-group
                  v-model="form.Features[0].INTUBADO"
                  :options="options"
                  buttons
                  button-variant="outline-primary"
                  required
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
            <!--Neumonia -->
            <b-col sm="12" md="6" lg="3">
              <b-form-group label="Neumonia:">
                <b-form-radio-group
                  v-model="form.Features[0].NEUMONIA"
                  :options="options"
                  buttons
                  button-variant="outline-primary"
                  required
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="3">
              <!--Pregnancy -->
              <b-form-group label="Pregnancy:">
                <b-form-radio-group
                  v-model="form.Features[0].EMBARAZO"
                  :options="options"
                  buttons
                  button-variant="outline-primary"
                  required
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="3">
              <!--Diabetes-->
              <b-form-group label="Diabetes:">
                <b-form-radio-group
                  v-model="form.Features[0].DIABETES"
                  :options="options"
                  buttons
                  button-variant="outline-primary"
                  required
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="6" lg="3">
              <!--Epoc-->
              <b-form-group label="EPOC:">
                <b-form-radio-group
                  v-model="form.Features[0].EPOC"
                  :options="options"
                  buttons
                  button-variant="outline-primary"
                  required
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="3">
              <!--Asma -->
              <b-form-group label="Asthma:">
                <b-form-radio-group
                  v-model="form.Features[0].ASMA"
                  :options="options"
                  buttons
                  button-variant="outline-primary"
                  required
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="3">
              <!--immunosuppressed-->
              <b-form-group label="Immunosuppressed:">
                <b-form-radio-group
                  v-model="form.Features[0].INMUSUPR"
                  :options="options"
                  buttons
                  button-variant="outline-primary"
                  required
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="3">
              <!--Hypertension-->
              <b-form-group label="Hypertension:">
                <b-form-radio-group
                  v-model="form.Features[0].HIPERTENSION"
                  :options="options"
                  buttons
                  button-variant="outline-primary"
                  required
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="6" lg="3">
              <!-- Another complication -->
              <b-form-group label="Another complication:">
                <b-form-radio-group
                  v-model="form.Features[0].OTRA_COM"
                  :options="options"
                  buttons
                  button-variant="outline-primary"
                  required
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="3">
              <!--Cardiovascular-->
              <b-form-group label="Cardiovascular:">
                <b-form-radio-group
                  v-model="form.Features[0].CARDIOVASCULAR"
                  :options="options"
                  buttons
                  button-variant="outline-primary"
                  required
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="3">
              <!-- Obesity -->
              <b-form-group label="Obesity:">
                <b-form-radio-group
                  v-model="form.Features[0].OBESIDAD"
                  :options="options"
                  buttons
                  button-variant="outline-primary"
                  required
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="3">
              <!-- Renal_Chronicle -->
              <b-form-group label="Renal Chronicle:">
                <b-form-radio-group
                  v-model="form.Features[0].RENAL_CRONICA"
                  :options="options"
                  buttons
                  button-variant="outline-primary"
                  required
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="6" lg="3">
              <!-- Smoking -->
              <b-form-group label="Smoking:">
                <b-form-radio-group
                  v-model="form.Features[0].TABAQUISMO"
                  :options="options"
                  buttons
                  button-variant="outline-primary"
                  required
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6" lg="3">
              <!-- ICU -->
              <b-form-group label="ICU:">
                <b-form-radio-group
                  v-model="form.Features[0].UCI"
                  :options="options"
                  buttons
                  button-variant="outline-primary"
                  required
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button block type="submit" variant="success">Submit</b-button>
            </b-col>
            <b-col>
              <b-button block type="reset" variant="danger">Reset</b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      show: true,
      gender: [
        { text: "Select One", value: null },
        { text: "Male", value: 1 },
        { text: "Female", value: 2 }
      ],
      options: [
        { text: "Yes", value: "1" },
        { text: "No", value: "2" }
      ],
      result: null,
      loading: false,
      form: {
        Features: [
          {
            SEXO: null,
            INTUBADO: null,
            NEUMONIA: null,
            EDAD: null,
            EMBARAZO: null,
            DIABETES: null,
            EPOC: null,
            ASMA: null,
            INMUSUPR: null,
            HIPERTENSION: null,
            OTRA_COM: null,
            CARDIOVASCULAR: null,
            OBESIDAD: null,
            RENAL_CRONICA: null,
            TABAQUISMO: null,
            UCI: null
          }
        ]
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.loading = true;
      this.$api
        .getPredictDeadCovid(this.form)
        .then(response => {
          this.loading = false;
          this.result = response.data;
        })
        .catch(error => {
          this.loading = false;
          console.log(error);
        });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.Features[0] = {
        SEXO: null,
        INTUBADO: null,
        NEUMONIA: null,
        EDAD: null,
        EMBARAZO: null,
        DIABETES: null,
        EPOC: null,
        ASMA: null,
        INMUSUPR: null,
        HIPERTENSION: null,
        OTRA_COM: null,
        CARDIOVASCULAR: null,
        OBESIDAD: null,
        RENAL_CRONICA: null,
        TABAQUISMO: null,
        UCI: null
      };

      this.$nextTick(() => {
        this.result = null;
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.loader {
  display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 324;
    background: #1515158f;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
