<template>
  <div id="header">
    <h1>firebase auth</h1>    
    <button @click="logout" v-if="user!==null">로그아웃</button>
    <button @click="unsubscribe" v-if="user!==null">회원탈퇴</button>
  </div>
</template>

<script>

import firebase from 'firebase'
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
     ...mapState([
      'user',
    ]),    
  },  
  methods: {
    ...mapMutations([
      'setUser',
    ]),
    logout() {      
      firebase.auth().signOut().then(() => {
        this.setUser(null);   
        this.$router.push({
          path:`/hello`,
        })
      }).catch(function(error) {
        console.log(error);
      });
    },
    unsubscribe(){
      var user = firebase.auth().currentUser;
      user.delete().then(() => {
        alert('탈퇴하였습니다.');
        this.$router.push({
          path:`/hello`,
        })
      }).catch(function(error) {
        console.log(error);
      });
    }
  },
}
</script>

<style>

</style>