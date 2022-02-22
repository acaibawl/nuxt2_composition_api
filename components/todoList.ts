import { watch } from '@vue/composition-api';
import state from '../store/store';
import Component from "./component";

export default class TodoList implements Component {
  render() {
    const ul = document.createElement('ul');
    watch(state.todoList, () => {
      ul.innerHTML = '';
      for(const TodoItem of state.todoList.value) {
        const li = document.createElement('li');
        li.textContent = `${TodoItem.title}`;
        ul.appendChild(li);
      }
    });
    return ul;
  }
}
