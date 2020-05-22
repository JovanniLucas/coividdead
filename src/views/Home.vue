<template>
  <div class="home-view">
    <b-navbar variant="primary" type="dark" fixed="top">
      <b-navbar-brand href="/">
        <img src="@/assets/skull.svg"/> Covid Dead
      </b-navbar-brand>
    </b-navbar>
    <div class="wraper">
      <div class="content">
        <b-container class="bv-example-row">
          <b-card title="Covid's probability of death calculator">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-row>
                <b-col>
                  <!--Gender -->
                  <b-form-group id="input-group-3" label="Gender:" label-for="input-3">
                    <b-form-select id="input-3" v-model="form.gender" :options="gender" required></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col>
                  <!--Age -->
                  <b-form-group label="Age:">
                    <b-form-input type="number" />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <!--Intubated -->
                  <b-form-group label="Intubated:">
                    <b-form-radio-group
                      v-model="selected"
                      :options="options"
                      buttons
                      button-variant="outline-primary"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col>
                  <!--Neumonia -->
                  <b-form-group label="Neumonia:">
                    <b-form-radio-group
                      v-model="selected"
                      :options="options"
                      buttons
                      button-variant="outline-primary"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col>
                  <!--Pregnancy -->
                  <b-form-group label="Pregnancy:">
                    <b-form-radio-group
                      v-model="selected"
                      :options="options"
                      buttons
                      button-variant="outline-primary"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col>
                  <!--Diabetes-->
                  <b-form-group label="Diabetes:">
                    <b-form-radio-group
                      v-model="selected"
                      :options="options"
                      buttons
                      button-variant="outline-primary"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <!--Epoc-->
                  <b-form-group label="EPOC:">
                    <b-form-radio-group
                      v-model="selected"
                      :options="options"
                      buttons
                      button-variant="outline-primary"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col>
                  <!--Asma -->
                  <b-form-group label="Asthma:">
                    <b-form-radio-group
                      v-model="selected"
                      :options="options"
                      buttons
                      button-variant="outline-primary"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col>
                  <!--immunosuppressed-->
                  <b-form-group label="Immunosuppressed:">
                    <b-form-radio-group
                      v-model="selected"
                      :options="options"
                      buttons
                      button-variant="outline-primary"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col>
                  <!--Hypertension-->
                  <b-form-group label="Hypertension:">
                    <b-form-radio-group
                      v-model="selected"
                      :options="options"
                      buttons
                      button-variant="outline-primary"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <!-- Another complication -->
                  <b-form-group label="Another complication:">
                    <b-form-radio-group
                      v-model="selected"
                      :options="options"
                      buttons
                      button-variant="outline-primary"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col>
                  <!--Cardiovascular-->
                  <b-form-group label="Cardiovascular:">
                    <b-form-radio-group
                      v-model="selected"
                      :options="options"
                      buttons
                      button-variant="outline-primary"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col>
                  <!-- Obesity -->
                  <b-form-group label="Obesity:">
                    <b-form-radio-group
                      v-model="selected"
                      :options="options"
                      buttons
                      button-variant="outline-primary"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col>
                  <!-- Renal_Chronicle -->
                  <b-form-group label="Renal Chronicle:">
                    <b-form-radio-group
                      v-model="selected"
                      :options="options"
                      buttons
                      button-variant="outline-primary"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <!-- Smoking -->
                  <b-form-group label="Smoking:">
                    <b-form-radio-group
                      v-model="selected"
                      :options="options"
                      buttons
                      button-variant="outline-primary"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col>
                  <!-- ICU -->
                  <b-form-group label="ICU:">
                    <b-form-radio-group
                      v-model="selected"
                      :options="options"
                      buttons
                      button-variant="outline-primary"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col></b-col>
                <b-col></b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button block type="submit" variant="primary">Submit</b-button>
                </b-col>
                <b-col>
                  <b-button block type="reset" variant="danger">Reset</b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-container>
      </div>
    </div>

    <b-navbar variant="secondary" type="ligth" fixed="bottom">
      <b-nav-form right>
        <b-button variant="success" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      form: {
        gender: null,

        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      gender: [{ text: "Select One", value: null }, "Male", "Female"],
      show: true,
      selected: "radio1",
      options: [
        { text: "Yes", value: "1" },
        { text: "No", value: "2" }
      ]
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.home-view .wraper {
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding-right: 10px;
  padding-left: 10px;
}

.home-view .content {
  padding-top: 66px;
  height: 100vh;
  padding-bottom: 56px;
  overflow: scroll;
}

.home-view .wraper-bar {
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
}
</style>
