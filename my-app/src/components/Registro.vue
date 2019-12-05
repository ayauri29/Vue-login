<template lang="pug">
  div.container
    img.logo(src="@/assets/logo.png")
    h2 SIGN UP
    el-form(@submit.prevent="register")
      el-form-item(label="Correo electrónico")
        el-input(type="text" placeholder="email" v-model="usuario")
      el-form-item(label="Contraseña")
        el-input(type="text" placeholder="password" v-model="contrasena" show-password)
      el-button(@click="register") Registrar
      p ¿Ya tienes una cuenta? 
        router-link(to="/login" tag="a") Ingresa
      
</template>

<script>
import firebase from "firebase";
// import "firebase/firestore";

export default {
  data() {
    
    return {
      usuario: "",
      contrasena: "",
      fecha: new Date().toString(),
    };
  },
  methods: {
    createUsers(){
      console.log(this.usuario, this.password)
      firebase.firestore().collection('users').add({
        email: this.usuario,
        fecha: this.fecha,
      })
      .then(user => alert('usuario creado' + user))
      .catch(e => alert(e))
    },
    register() {
      console.log('entre');
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.usuario, this.contrasena)
        .then(user => {
          this.createUsers();
          alert('usuario registrado' + user);
        })
        .catch(error  => {
          console.error(error);
        });
    },
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
