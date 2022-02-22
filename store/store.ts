import VueCompositionAPI, { DeepReadonly, readonly, ref, Ref, UnwrapRef } from '@vue/composition-api';
import Vue from 'vue';
Vue.use(VueCompositionAPI);

interface TodoItem {
  title: string;
  completed: boolean;
};

interface State {
  todoList: Ref<TodoItem[]>;
};

const state: State = {
  todoList: ref([]),
};

// mutations
export function addTodo(title: string) {
  state.todoList.value.push({ title, completed: false });
};

// 反復処理の型バージョンみたいなやつでstateの型をTypeScriptで拾えるようにする
// mutationを介さないstate書き換えを阻止する為にreadonlyにする
type UnwrapNestedRefs<T> = T extends Ref ? T : UnwrapRef<T>
const readonlyState: { [P in keyof State]: DeepReadonly<UnwrapNestedRefs<State[P]>> } = {
  todoList: readonly(state.todoList),
};

export default readonlyState;
