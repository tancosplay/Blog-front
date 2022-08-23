<template>
  <div id="wrap">
      <div id="top">
        <div id="top-left">
          <font-awesome-icon icon="fa-solid fa-circle-user" size="lg" />
          <span id="UserIndexName">{{$route.params.UserInputName}}</span>
        </div>
        <div id="top-right">
          <router-link  :to="{name: 'UserView'}" v-if="write_read">
            <font-awesome-icon icon="fa-solid fa-book-open" size="10x"/></router-link>
          <router-link :to="{name: 'UserWrite', params:{value: ' '}}" v-if="!write_read">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" size="10x"/>
          </router-link>
          <router-link :to="{name: 'UsersLogin'}">
            <font-awesome-icon icon="fas fa-reply" size="10x"/>
          </router-link>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
 export default {
     name: 'UserPageIndex',
     data () {
         return {
             write_read: false,
             value: '',
             userMessage: {}
         }
     },
     watch: {
      $route: {
        handler(oldValue, newValue) {
          console.log(oldValue, newValue)
          if (oldValue.name == 'UserWrite') {
            console.log(newValue);
            this.write_read = true
          } else if (newValue.name == 'UserView') {
            this.write_read = false
          }
        }
      }
     },

     mounted() {
      this.$store.dispatch('setUserMessage', this.$route.params.UserInputName)
     }
 }
</script>

<style>
 html {
   width: 100%;
   height: 100%;
 }
 
 div {
   margin-left: auto;
   margin-right: auto;
   padding: 0;
 }

 #wrap {
  height: 100%;
  width: 100%;
 }

 #top {
    width: 100%;
    margin-top: 0;
    background-color: rgba(250, 250, 255, 0.5);
    padding: 0.7%;
    display: flex;
 }
 
 #top-left {
  width: 10%;
  margin-right: 0;
  margin-left: 3%;
  justify-content: start;
 }

 #top-right {
  display: inline;
  justify-content: end;
  margin-right: 2%;
 }

 #top-right > a {
  margin-left: 20px;
 }

 .UserFunc {
  display: inline;
  padding-right: 30px;
 }

 #UserIndexName {
  margin-left: 10%;
  font-size: 0.5em;
 }

 #main {
    height: 88%;
    justify-content: center;
    margin-top: 2%;
    margin-left: 2%;
    margin-right: 2%;
    display: flex;
 }

 #left {
   width: 20%;
   margin-right: 20px;
   margin-left: 0;
   display: inline;
   background-color: aliceblue;
   border-radius: 8px;
   background-color: rgba(250, 250, 250, 0.6);
 }
 
 #right > div {
  width: 100%;
  height: 100%;
 } 

 ul{
  list-style-type: none;
  margin: 0px;
 }
 
 li {
  margin-left: -90%;
 }

 hr {
  margin-left: -10%;
 }

 #right {
   width: 80%;
   margin-left: 20px;
   display: inline;
   background-color: aliceblue;
   border-radius: 8px;
   background-color: rgba(250, 250, 250, 0.6);
 }
</style>