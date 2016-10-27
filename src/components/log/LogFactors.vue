<template>
  <div>

    <div style="text-align: center;">

      <div class="ui segment orange">
        <div style="margin: 0 !important;" class="ui grid stackable">
          <div style="padding: 0 !important;" class="ui column middle aligned thirteen wide">
            <div class="ui fluid multiple search selection dropdown large">
              <input type="hidden">
              <div class="default text">Foods and activities...</div>
              <div class="menu"></div>
            </div>
          </div>
          <div style="padding-left: 0" class="ui column three wide center aligned">
            <button class="ui big circular orange basic icon button">
              <i class="photo icon"></i>
            </button>
          </div>
        </div>
      </div>

      <br>

      <div class="ui buttons big">
        <div @click="closeModal()" class="ui button">Cancel</div>
        <div class="or"></div>
        <div @click="saveFactors()" class="ui orange button">Save</div>
      </div>

    </div>

  </div>
</template>

<script>
  import {fetchFoodSearch} from '../../http-apis/foods';
  import FactorsLog from '../../logs/factors-log';
  import CsvLocalstorage from '../../repositories/csv-localstorage';
  import notifier from '../../utils/notifier';


  export default {
    name: 'LogFactors',
    data() {
      return {
        data: ''
      }
    },
    methods: {
      closeModal() {
        $('#log_factors_modal').modal('hide')
      },

      saveFactors() {
        try {
          let val = $('.dropdown').dropdown('get value');
          let logCsvLine = new FactorsLog(val).toCsvLine();
          let storage = new CsvLocalstorage('test');
          storage.writeLine(logCsvLine);
          notifier('success', 'Factors logged!');
        } catch(err) {
          notifier('error', 'Factors were not logged!');
        }


        $('#log_factors_modal').modal('hide');
      }
    },
    mounted() {
      $('.dropdown').dropdown({
        allowAdditions: true,
        apiSettings: {
          allowAdditions: true,
          responseAsync: async(settings, callback) => {
            let query = settings.urlData.query;
            console.log(query);
            let response = {
              success: true,
              results: []
            };

            if (query.length >= 1) {
              response.results.push({
                name: query,
                value: query
              });

              let res = await await fetchFoodSearch(query);
              console.log(res);

              res.common.forEach((food) => {
                if (food.food_name !== query) {
                  response.results.push({
                    name: food.food_name,
                    value: food.food_name
                  })
                }
              });
            }

            callback(response);
          }
        }
      });
    }
  }
</script>