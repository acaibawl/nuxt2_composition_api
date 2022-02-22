<template>
  <div>
    <!-- Aパターン カウントは増減する -->
    <h1>Aパターン</h1>
    <button @click="decrementA()">-</button>
    {{ state.count }}
    <button @click="incrementA()">+</button>

    <!-- Bパターン カウントは変動しない（reactive状態ではない） -->
    <h1>Bパターン</h1>
    <button @click="decrementB()">-</button>
    {{ count }}
    <button @click="incrementB()">+</button>

    <!-- Cパターン カウントは変動する -->
    <h1>Cパターン</h1>
    <button @click="decrementC()">-</button>
    {{ countReactive }}
    <button @click="incrementC()">+</button>
  </div>
</template>


<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useCountReactive } from '../components/CounteReactive';
import { useCountReactiveToRefs } from '../components/CounteReactiveToRefs';

export default defineComponent({
  name: 'ReactiveVue',
  setup: () => {

    // Aパターン
    // stateオブジェクトそのものを利用するパターン
    const state = useCountReactive();
    const incrementA = () => {
      state.count++;
    };
    const decrementA = () => {
      state.count--;
    }

    // Bパターン
    // stateオブジェクトが含むプロパティ(count)を利用するパターン
    let { count } = useCountReactive();
    const incrementB = () => {
      count++;
    }
    const decrementB = () => {
      count--;
    }

    // Cパターン
    // stateオブジェクトのプロパティもリアクティブなデータになるパターン
    const { countReactive } = useCountReactiveToRefs();
    const incrementC = () => {
      countReactive.value++;
    }
    const decrementC = () => {
      countReactive.value--;
    }

    return {
      state,
      incrementA,
      decrementA,
      count,
      incrementB,
      decrementB,
      countReactive,
      incrementC,
      decrementC,
    };
  },
});
</script>
