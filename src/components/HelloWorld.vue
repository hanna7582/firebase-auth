<template>
  <div class="hello">
    <div>
      <label>아이디</label>
      <input type="text" v-model="email"/>
    </div>
    <div>
      <label>패스워드</label>
      <input type="password" v-model="password"/>
    </div>
    <div>
      <button @click="signIn()">로그인</button>
      <button @click="signUp()">가입하기</button>
    </div>    
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email:'seocho@gmail.com',
      password:'seocho01!!',
    }
  },
  methods: {
    signUp () {
      console.log('signUp email:', this.email)
      console.log('signUp password:', this.password)
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
          alert('가입되었습니다.')
        })
        .catch((error) => {
          console.log(error)
        })        
    },
    signIn(){
      console.log('signIn email:', this.email)
      console.log('signIn password:', this.password)
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then( res => {
        console.log('signin', res);              
        this.$router.push({
          path:`/list`,
        })
      })
      .catch(function(error) {
        console.log(error);        
        if(error.code=='auth/user-not-found'){
          alert('회원가입하세요.');          
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
