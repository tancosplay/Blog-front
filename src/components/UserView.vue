<template>
    <div id="main">
        <!-- 展示文章数量以及链接 -->
        <div id="left">
            <p>文章{{message.passages.length}}</p>
            <ul id="UserPassagesList">
              <li v-for="(passage, index) in message.passages" :key="index" @click.stop="showPassage(passage, $event)">
                <span class="title">{{passage.title}}</span>
                <span class="rewrite">
                    <router-link :to="{name:'UserWrite', params:{value: passage.v}}">
                        <font-awesome-icon icon="fa-solid fa-file-pen" size="10x"/>
                    </router-link>
                </span>
               </li>
            </ul>
        </div>
        <div id="right"> 
            <h4>{{title}}</h4>
            <div v-html="value"></div>
        </div>
    </div>
</template>

<script>
import {marked} from 'marked'
import { mapState } from 'vuex'

 export default {
    name: 'UserView',
    data () {
        return {
            value: '',
            title: ''
        }
    },

    computed: {
        ...mapState({
            message: state => {
                console.log(state.message)
                return state.message
            }
        })
    },

    methods: {
        showPassage(passage, event) {
             // eslint-disable-next-line no-undef
             const ul = document.getElementById('UserPassagesList')
             ul.childNodes.forEach(el => {
                if (el.classList.contains('selected')) {
                    el.classList.remove('selected')
                }
             })
             event.target.parentNode.classList.add('selected')
            this.value = marked(passage.v)
            this.title = passage.title
        }
    },

 }
</script>

<style>
    #UserPassagesList {
        align-items: center;
        padding: 0%;
    }

    #UserPassagesList > li{
        list-style: none;
        text-align: left;
        line-height: 36px;
        height: 36px;
        margin-left: 0px;
        padding: 0 5px;
        width: 100%;
        border-bottom: 1px solid #ddd;
        display: flex;
    }

    .selected {
        background-color: rgb(84, 83, 83, 0.1);
    }

    .title {
        display: inline-block;
        cursor: pointer;
        margin-right: auto;
    }

    .rewrite {
        margin-right: 2%;
        display: none;
        /* justify-content:end ; */
    }

    .selected .rewrite {
        display: block;
    }
</style>