<template>
  <div class="tictactoe-table">
    <table v-if="table">
      <tbody>
        <tr v-for="i in 3" :key="i">
          <td
            v-for="j in 3"
            :key="j"
            @click="$emit('press', {i: i-1, j: j-1})"
            :value="table[i-1][j-1]"
          >{{table[i-1][j-1]}}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>Table Props is Empty</div>
  </div>
</template>

<script>
export default {
  props: ["table"] // 2D array contain string || null
};
</script>

<style scoped>
.tictactoe-table td {
  width: 30px;
  height: 30px;
  border: solid 1px #000;
}
.tictactoe-table.is-large td {
  width: 60px;
  height: 60px;
}
.tictactoe-table.is-small td {
  width: 13px;
  height: 13px;
}
.tictactoe-table:not([disabled]) td:hover {
  background-color: #0002;
}
td[value="0"] {
  background-color: #f180aa55;
}
td[value="1"] {
  background-color: #61c5ff55;
}
</style>
