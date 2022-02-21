import { ref, onMounted, onUnmounted } from '@vue/composition-api';

// 本来コンポーネントのsetupで記述する内容を外部moduleとして記述できる
export function useMousePosition () {
  const x = ref(0);
  const y = ref(0);

  const update = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  onMounted(() => {
    window.addEventListener('mousemove', update);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });

  return { x, y };
}
