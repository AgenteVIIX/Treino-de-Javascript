<template>
    <div class="login">
        <form action="">
            <input type="text" placeholder="Email" v-model="email">
            <br>
            <input type="text" placeholder="Nome de usuário" v-model="name">
            <br>
            <input type="text" placeholder="Idade" v-model="age">
            <br>
            <input type="text" placeholder="Senha" v-model="password">
            <br>
            <input type="text" placeholder="Confirme a senha">
            <button @click="tratamento()" type="submit">Cadastrar</button>
        </form>
    </div>
</template>


<script>
import {mapActions} from 'vuex'

export default {
  name: 'App',
  methods: {
      ...mapActions(['createUsuario']),
      tratamento() {
          this.createUsuario({
            name: this.name,
            age: this.age, 
            email: this.email,
            password: this.password
            })
      }
  },
  data() {
    return{
        name: '',
        age: '',
        email: '',
        password: ''
    } 
  }
}
</script>