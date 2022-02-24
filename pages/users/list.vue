<template>
  <div>
    <h1>ユーザ一覧</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <nuxt-link :to="`/users/${user.id}`">{{ user.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { User } from '~/models/user';
import users from '~/mockData/users.json';

export default Vue.extend({
  name: 'UserListVue',
  data() {
    return {
      users: users as User[],
    };
  }
})
</script>
