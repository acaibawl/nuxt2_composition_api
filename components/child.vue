<template>
  <div class="">
    <h1>{{ props.msg }}</h1>
    <button @click="upperCaseMessage">To upper case</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api';

type Props = {
  msg: string;
}

export default defineComponent({
  name: 'ChildVue',
  props: {
    msg: {
      type: String,
      default: 'default Value.',
      required: true,
    },
  },
  setup: (props: Props, context: SetupContext) => {
    const upperCaseMessage = () => {
      context.emit('change-message', props.msg.toUpperCase());
    }

    return {
      props,
      upperCaseMessage
    };
  },
});
</script>
