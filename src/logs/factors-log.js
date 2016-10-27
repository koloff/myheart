export default class {
  constructor(factors) {
    if (typeof factors === 'string') {
      this._factors = this.parseFactorsString(factors);
    } else {
      this._factors = factors;
    }
  }

  get factors() {
    console.log(this._factors);
    return this._factors;
  }

  parseFactorsString(factorsStr) {
    let res = factorsStr.split(/[,;]+/);
    return res.map(factor => factor.trim());
  }

  toCsvLine() {
    let date = new Date().toJSON();
    return `${date},,,"${this.factors.join(',')}"`;
  }
}
