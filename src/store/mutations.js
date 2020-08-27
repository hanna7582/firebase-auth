// import _ from 'lodash';

const mutations = {
  setUser(state, payload){
    console.log('payload', payload);
    if(payload==null){
      state.user=null;
    }else{
      state.user={
        name : payload.displayName,
        email : payload.email,
        photoUrl : payload.photoURL,
        emailVerified : payload.emailVerified,
        uid : payload.uid,  
      }
    }
  }
}

export default mutations;