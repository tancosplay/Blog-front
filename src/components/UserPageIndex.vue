<template>
  <div id="wrap">
      <div id="top">
        <div id="top-left">
          <font-awesome-icon icon="fa-solid fa-circle-user" size="lg" />
          <span id="UserIndexName">{{$route.params.UserInputName}}</span>
        </div>
        <div id="top-right">
          <a href="" class="UserFunc">
            <font-awesome-icon icon="fa-solid fa-book-open" size="10x" v-show="write_Read"/>
            <font-awesome-icon icon="fa-solid fa-pen-to-square" size="10x" v-show="!write_Read"/>
          </a>
          <router-link :to="{name: 'UsersLogin'}">
            <font-awesome-icon icon="fas fa-reply" size="10x"/>
          </router-link>
        </div>
    </div>
    <div id="main">
        <div id="left">
            <p>文章？？？</p>
            <ul>
              <li>关于vue</li><hr>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </div>
        <div id="right">
            文章
        </div>
    </div>
  </div>
</template>

<script>
 export default {
     name: 'UserPageIndex',
     data () {
         return {
             write_Read: false
         }
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

 .UserFunc {
  display: inline;
  margin-right: 30px;
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