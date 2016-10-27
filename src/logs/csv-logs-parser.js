import CsvLocalstorage from '../repositories/csv-localstorage';
import FactorsLog from './factors-log';
import BloodPressureLog from './blood-pressure-log';

export default class {

  constructor(name) {
    this._csv = new CsvLocalstorage(name);
    this.csvLines = this._csv.getLines();
  }

  parseLine(line) {
    console.log(line);
    let values = line.split(',');
    console.log(values);

    // remove <"> if available in beginning or end
    values = values.map(value => {
      let res = value;
      if (value[0] === '"') {
        res = res.slice(1);
      }
      if (value[value.length - 1] === '"') {
        res = res.slice(0, -1);
      }
      console.log(res);
      return res;
    });

    let date = new Date(values[0]);

    if (values[1] && values[1] === 'blood_pressure') {
      // todo: parse blood pressure log
    } else if (!values[1]) {
      // todo: parse factors log
    }

  }

}