<template>
  <div class="tictactoe">
    <div style="width: max-700px">
      <div style="height: 50px">{{tictactoe.win() != null ?`${tictactoe.win()} is win` : ``}}</div>
      <TicTacToeTable
        class="is-large"
        style="display: flex; justify-content: center"
        :table="tictactoe.table"
        :key="tictactoe.history.length"
        @press="press"
      />
      <br />
      <hr style="margin-left: 30vw; margin-right: 30vw" />
      <br />
      <div class="tictactoe-history">
        <div v-for="(t, i) in tictactoe.history" :key="t.id">
          <button class="button" @click="rollback(i)">
            <TicTacToeTable class="is-small" disabled :table="t" :key="t.id" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import TicTacToe from "./TicTacToe";
import TicTacToeTable from "./TicTacToeTable.vue";
export default {
  components: {
    TicTacToeTable
  },
  data() {
    return {
      tictactoe: Vue.observable(new TicTacToe())
    };
  },
  methods: {
    press({ i, j }) {
      this.tictactoe.move(i, j);
    },
    rollback(idx) {
      this.tictactoe.rollback(idx);
    }
  },
  watch: {
    tictactoe: {
      deep: true,
      handler(nw) {
        console.log("change");
        this.tictactoe = nw;
        this.$forceUpdate();
      }
    }
  }
};
</script>

<style scoped>
.button {
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
}
.tictactoe-history {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 500px;
}
</style>
