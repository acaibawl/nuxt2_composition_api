<template>
  <div>
    <h1>記事個別ページ {{ post.id }}</h1>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <p>メソッドで生成：{{ test().body }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Post } from '../../models/post';

export default Vue.extend({
  async asyncData({ $axios, params, error }) {
    const response = await $axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .catch(err => {
        // axiosの結果がエラーの場合の処理。変数responseにエラー内容を詰める
        return err.response;
      });

    if (response.status !== 200) {
      // エラーの場合はここでerrorメソッドを呼んでリターンする
      error({
        statusCode: response.status,
        message: response.message || '',
      });
      return;
    }
    
    return { post: response.data as Post}
  },
  data() {
    return {
      post: {} as Post,
    }
  },
  // thisを使うのにveturでエラーを出さないために、headメソッドの戻り型をアノテーションする
  head(): {title: string} {
    return {
      title: this.post.title,
    }
  },
  methods: {
    // headメソッドと同じ理由で、メソッドの戻り型をアノテーションする
    test() :Post {
      const aaa = this.post;
      return aaa;
    },
  }
})
</script>
