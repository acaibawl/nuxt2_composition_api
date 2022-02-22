import { reactive } from '@vue/composition-api';

export function useCountReactive() {
  const state = reactive({
    count: 0,
  });

  // 中のプロパティはリアクティブではない
  return state;
}
