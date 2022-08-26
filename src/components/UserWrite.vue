<template>
  <div id="WriteMain">
    <mavon-editor v-model="value" @save="$save" placeholder=" "/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
 export default {
     name: 'UserWrite',
     data () {
         return {
             value: this.$route.params.value
         }
     },

     computed: {
      ...mapState({
        message: state => {
          return state.message
        }
      })
     }, 

     methods: {
      $save(v) {
        const title = window.prompt("请输入标题");
        // eslint-disable-next-line no-unused-vars
        this.$store.dispatch('updateUserMessage', {title, v})
      }
     },
 }
</script>

<style>
 #WriteMain {
    width:92%;
    height: 88%;
    justify-content: center;
    margin-top: 2%;
    display: flex;
 }

 #WriteMain > div {
  width: 100%;
  height: 100%;
 } 
</style>