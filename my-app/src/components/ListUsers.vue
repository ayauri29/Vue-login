<template lang="pug">
  div.container
    h2 Usuarios
    el-button(v-on:click="getUs") Ver Usuarios
    el-card.box-card
      div.clearfix(slot="header")
        span Lista de usuarios
      div(v-for="user of users")
        el-card
          p {{ user.email }} {{user.fecha}}  
    el-button(v-on:click="logOut") Salir
</template>

<script>
import firebase from "firebase";
// import {db} from "../firebase";
// import "firebase/firestore";

export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    getUs(){
      firebase.firestore().collection('users').onSnapshot(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.data())
            this.users.push(doc.data())
            console.log(this.users)
          })
        })
    },
    logOut() {
      firebase.auth().signOut().then(() => {
            
            this.$router.replace('login');
        })
    },
  }
};
</script>

<style scoped lang="stylus">
.container
  display flex
  flex-direction column
  align-items center
  .box-card
    width 480px
    margin 2%
    .clearfix
      &:after
        display table
        content ""
</style>
