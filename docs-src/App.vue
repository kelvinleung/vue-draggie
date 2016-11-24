<template>
  <div id="app">
    <p>{{ items }}</p>
    <div class="column"
      v-for="(item, index) in items"
      v-draggie="{swap: swapEls, id: index}"
    ><h1>{{ item }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      items: ['第一个', '第二个', '第三个', '第四个', '第五个', '第六个']
    }
  },
  methods: {
    swapEls: function (dragged, dropped) {
      let temp = this.items[dragged.id]
      this.$set(this.items, dragged.id, this.items[dropped.id])
      this.$set(this.items, dropped.id, temp)
    }
  }
}
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#app {
  padding: 16px;
  margin: 20px auto;
  width: 600px;
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
}
.column {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: element;
  background-color: #996699;
  margin: 10px auto;
  height: 68px;
  cursor: move;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
}
.column h1 {
  color: #fff;
  font-size: 18px;
  line-height: 68px;
}
.column.start {
  opacity: 0.5;
  transform: scale(0.98, 0.98);
}
.column.enter {
  background-color: #552255;
}
</style>
