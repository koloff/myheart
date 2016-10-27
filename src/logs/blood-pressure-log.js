export default class {
  constructor(systolic, diastolic) {
    console.log(arguments);
    this._systolic = systolic | 0;
    this._diastolic = diastolic | 0;
  }

  get systolic() {
    return this._systolic;
  }
  get diastolic() {
    return this._diastolic;
  }

  toCsvLine() {
    let date = new Date().toJSON();
    return `${date},blood_pressure,"${this.systolic},${this.diastolic}",`;
  }
}
