const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "todo1", completed: false },
        { id: 2, text: "todo2", completed: false },
        { id: 3, text: "todo3", completed: false },
        { id: 4, text: "todo4", completed: false },
      ],
    };
  },
  methods: {
    addTodo(e) {
      this.todoList.push({
        id: this.todoList.length + 1,
        text: e.target.value,
        completed: false,
      });
      e.target.value = "";
    },
    removeItem(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
  },
  computed: {
    completedItemCount() {
      return this.todoList.filter((t) => t.completed).length;
    },
    uncompletedItemCount() {
      return this.todoList.filter((t) => !t.completed).length;
    },
  },
}).mount("#app");
