<template>
  <div>

    <div style="text-align: center;">
      <div class="ui segment green center aligned">
        <div style="width: 100px" class="ui input big">
          <input v-model="systolic" style="text-align: center" type="text" placeholder="SYS">
        </div>
        <h1 style="color: #777; display: inline-block; margin: 0 5px 0 5px"> / </h1>
        <div style="width: 100px" class="ui input big">
          <input v-model="diastolic" style="text-align: center" type="text" placeholder="DIA">
        </div>
        <br>
      </div>

      <br>

      <div class="ui buttons big">
        <div @click="closeModal()" class="ui button">Cancel</div>
        <div class="or"></div>
        <div @click="saveBloodPressure()" class="ui green button">Save</div>
      </div>
    </div>

  </div>
</template>

<script>

  import BloodPressureLog from '../../logs/blood-pressure-log';
  import CsvLocalstorage from '../../repositories/csv-localstorage';
  import notifier from '../../utils/notifier';

  export default {
    name: 'MeasureBloodPressure',
    data() {
      return {
        systolic: null,
        diastolic: null
      }
    },
    methods: {
      closeModal() {
        $('#measure_blood_pressure_modal').modal('hide')
      },
      saveBloodPressure() {
        try {
          let logCsvLine = new BloodPressureLog(this.systolic, this.diastolic).toCsvLine();
          console.log(logCsvLine);
          let storage = new CsvLocalstorage('test');
          storage.writeLine(logCsvLine);
          notifier('success', 'Factors logged!');
        } catch(err) {
          console.log(err);
          notifier('error', 'Factors were not logged!');
        }

        $('#log_factors_modal').modal('hide');
      }
    }
  }
</script>