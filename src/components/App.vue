<template>
  <div>

    <div id="log_factors_modal" class="ui modal basic">
      <log-factors></log-factors>
    </div>
    <div id="measure_blood_pressure_modal" class="ui modal basic">
      <measure-blood-pressure></measure-blood-pressure>
    </div>


    <div class="ui divider hidden"></div>
    <h1 class="header" style="margin: 0">Hello, Tony!</h1>
    <h2 class="subheader" style="margin: 7px">Don't know how to use Myheart? Watch the <u>tutorial</u>.</h2>


    <div class="ui divider hidden huge"></div>

    <div class="ui grid centered">
      <div class="row">

        <div class="column four wide home-btn-col">
          <button @click="showModal('log_factors')" style="background: #f26202" class="home-btn">
            <i class="ui icon food"></i>
            Log foods and activities
          </button>
        </div>

        <div class="column four wide home-btn-col">
          <button @click="showModal('measure_blood_pressure')" style="background: #16ab39" class="home-btn">
            <i class="ui icon heartbeat"></i>
            Measure blood pressure
          </button>
        </div>

      </div>

      <div class="row">

        <div class="column four wide home-btn-col">
          <button style="background: #00B5AD" class="home-btn">
            <i class="ui icon file"></i>
            Your results
          </button>
        </div>

        <div class="column four wide home-btn-col">
          <button style="background: #2185D0" class="home-btn">
            <i class="ui icon sign out"></i>
            Logout
          </button>
        </div>

      </div>
    </div>

    <div class="ui divider huge hidden"></div>
    <h2 class="subheader" style="margin: 7px">Have questions? <u>Contact us</u>!</h2>


  </div>
</template>

<script>

  import LogFactors from './log/LogFactors.vue';
  import MeasureBloodPressure from './log/MeasureBloodPressure.vue';
  import CsvLocalstorage from '../repositories/csv-localstorage';
  import FactorsLog from '../logs/factors-log';
  import CsvLogsParser from '../logs/csv-logs-parser';

  export default {
    name: 'App',
    components: {LogFactors, MeasureBloodPressure},
    data() {
      return {
      }
    },
    mounted() {

      let parser = new CsvLogsParser('test');
      let line = parser.parseLine(parser.csvLines[1]);

    },
    methods: {
      showModal(type) {
        this.view = type;
        $(`#${type}_modal`).modal('show');
      }
    }
  }
</script>

<style>
  .home-btn-col {
    min-width: 160px;
  }

  .home-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 1.2rem;
    height: 100%;
    width: 100%;
    min-height: 100px;
    margin: 5px;
    border: 0;
    border-radius: 3px;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 1px 1px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.25);
  }

  .home-btn:hover {
    box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.2);
  }

</style>