<template>
  <div
    class="rounded-md flex justify-between items-center odd:bg-gray-600 px-2 p-1"
  >
    <label :for="`todo_${todo.id}_completed`">
      <input
        v-model="todo.completed"
        type="checkbox"
        :id="`todo_${todo.id}_completed`"
        class="mr-2"
      />
      <span class="text-lg"> {{ todo.title }} </span>
    </label>
    <button
      @click="deleteItem"
      class="bg-red-600 px-2 py-1 rounded-md active:bg-red-800"
    >
      sil
    </button>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  emits: ["delete-event"],
  setup(props, { emit }) {
    const deleteItem = () => {
      emit("delete-event", props.todo);
    };
    return { deleteItem };
  },
};
</script>
