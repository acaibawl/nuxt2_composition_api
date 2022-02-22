import { reactive, toRefs } from '@vue/composition-api';

export function useCountReactiveToRefs() {
  const state = reactive({
    countReactive: 0,
  });

  // 中のプロパティもリアクティブになる
  return toRefs(state);
}
