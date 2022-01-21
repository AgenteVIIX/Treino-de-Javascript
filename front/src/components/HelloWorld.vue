<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="num1">
    <input type="text" v-model="num2">
    <button v-on:click="somar()"></button>
    <h1>{{ result }}</h1>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0
    }
  }, 
  methods: {
    somar() {
      this.result = Number(this.num1) + Number(this.num2)
    }
  },
  props: {
    msg: String
  }
}
</script>

