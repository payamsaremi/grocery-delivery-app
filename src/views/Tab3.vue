<template>
  <base-layout>
  <input type="text" v-model="user.name">
  <input type="text" v-model="user.lastName">
  <input type="email" v-model="user.email">
  <input type="text" v-model="user.phoneNumber">

  <button class="bg-green-200 p-4 m-1"  @click.prevent="addUser()">Add User</button>
  
  <div v-if="!users.length">Loading users....</div>
  <div v-for="item in users" :key="item.id">
    {{item.name}} | {{item.lastName}} | {{item.email}} | {{item.phoneNumber}}
  </div>

  </base-layout>
</template>

<script>
import BaseLayout from '../components/base/BaseLayout.vue'
import { createUser, useLoadUsers, getUser } from '../firestore.js'
export default {
  components: { BaseLayout },
  data(){
    return {
      user: {
        name:'',
        lastName: '',
        email:'',
        phoneNumber:''
      }
    }
  },
  setup(){
    const users = useLoadUsers()
    return { users }
  },
  methods:{
    addUser(){
      createUser(this.user)
      this.user = ''
    },
    getUserById(id){
      return getUser(id)
    }
  }
}
</script>

<style>

</style>