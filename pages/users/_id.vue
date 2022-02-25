<template>
  <div>
    <h1>ユーザID: {{ userId }}</h1>
    <h1>ユーザ名: {{ userName }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { User } from '~/models/user';
import users from '~/mockData/users.json';

export default Vue.extend({
  name: 'UserIdVuew',
  data() {
    return {
      id: this.$route.params.id,
      // 本来はasyncDataで取得するusers
      users: users as User[],
    };
  },
  head(): {title: string } {
    return {
      title: this.user?.name || 'nothing',
    };
  },
  computed: {
    user(): User | undefined {
      const id = Number(this.id);
      return this.users.find(user => user.id === id);
    },
    userName(): string {
      return this.user?.name || '';
    },
    userId(): string {
      return this.user?.id.toString() || '';
    }
  },
  mounted() {
    // クライアント側だけで実行される
    console.log('mounted');
  },
  created() {
    // サーバ側とクライアント側で実行される
    console.log('created');
  },
});
</script>
