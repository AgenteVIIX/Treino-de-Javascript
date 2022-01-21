<template>
    <div class="login">
        <input type="text" placeholder="Nome de usuário">
        <br>
        <input type="text" placeholder="Senha">
        <br>
        <a @click='createAccount()'>Criar uma conta</a>
        <a >Esqueci minha senha</a>
    </div>
</template>


<script>
export default {
  name: 'App',
  methods: {
      nextpage() {
          this.$router.push('/pagefoda2')
      },
      createAccount() {
          this.$router.push('createAccount')
      }
  }
}
</script>