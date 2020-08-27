<template>
  <div v-if="user !== null">
    이 페이지는 로그인해야 볼 수 있습니다.
    {{user.name | nullCheck}}
    {{user.email | nullCheck}}
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
  },
  filters: {
    nullCheck: function(value) {
      return value == null? '-': value;
    }
  },
  mounted () { 
    console.log('mounted');    
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.setUser({
          name : user.displayName,
          email : user.email,
          photoUrl : user.photoURL,
          emailVerified : user.emailVerified,
          uid : user.uid,      
        })   
      }
    });
  },
}
</script>

<style>

</style>