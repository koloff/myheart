export default class {
  constructor(name) {
    this._name = name;
    this._csvName = `csv_logs_${name}`;
  }

  get name() {
    return this._name;
  }

  get csvName() {
    return this._csvName;
  }


  getCsvContent() {
    return localStorage.getItem(this.csvName);
  }

  writeLine(line) {
    console.log(line);
    let lineToAdd = '';
    if (this.getCsvContent() !== null) {
      lineToAdd = this.getCsvContent() + `\n${line}`;
    } else {
      lineToAdd = `${line}`;
    }
    localStorage.setItem(this.csvName, lineToAdd);
  }

  getLines() {
    return this.getCsvContent().split('\n');
  }
}