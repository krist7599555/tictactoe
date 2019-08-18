import * as _ from 'lodash';

export default class TicTacToe {
  constructor() {
    this.table = [[null, null, null], [null, null, null], [null, null, null]];
    this.history = [_.cloneDeep(this.table)];
  }
  turn() {
    return this.history.length % 2;
  }
  move(i, j) {
    if (this.table[i][j] == null && this.win() == null) {
      this.table[i][j] = this.turn();
      this.history.push(_.cloneDeep(this.table));
    }
  }
  rollback(idx) {
    if (idx < this.history.length) {
      this.history = _.dropRight(this.history, this.history.length - idx - 1);
      this.table = _.cloneDeep(_.last(this.history));
    }
  }
  win() {
    const ar = _.concat(this.table, _.zip(...this.table), [
      [this.table[0][0], this.table[1][1], this.table[2][2]],
      [this.table[0][2], this.table[1][1], this.table[2][0]]
    ]);
    for (const ln of ar) {
      if (_.every(ln, itm => itm != null && itm == ln[0])) {
        return ln[0];
      }
    }
    return null;
  }
}
