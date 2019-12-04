<template lang="pug">
  div.container
    img.logo(src="@/assets/logo.png")
    h2 SIGN IN
    el-form(@submit.prevent="login")
      el-form-item(label="Correo electrónico")
        el-input(type="text" placeholder="email" v-model="usuario")
      el-form-item(label="Contraseña")
        el-input(type="text" placeholder="password" v-model="contrasena" show-password)
      el-button(@click="login") Acceder
      p ¿No tienes una cuenta? 
        router-link(to="/registro" tag="a") Regístrate
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      usuario: "",
      contrasena: ""
    };
  },
  methods: {
    login() {
      console.log('entre');
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(user => {
          alert('usuario conectado' + user);
          this.$router.replace('list');
        })
        .catch(error  => {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped lang="stylus">
.container
  height 100%
  display flex
  flex-direction column
  align-items center
  justify-content center
  .logo
    width 10% 
  .container
    display flex
    justify-content center
    .el-button
      background-color #41b883
      border-color #41b883
</style>
