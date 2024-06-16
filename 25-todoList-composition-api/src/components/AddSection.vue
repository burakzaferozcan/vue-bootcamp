<template>
  <section class="mt-4">
    <input
      @keydown.enter="newItem"
      type="text"
      placeholder="Nedir?"
      class="w-full rounded-md px-2 py-2 bg-gray-800 border-2 border-gray-600"
    />
  </section>
</template>

<script>
export default {
  props: ["AddTodo"],
  setup(props) {
    const newItem = (event) => {
      props.AddTodo(event.target.value);
      event.target.value = "";
    };
    return {
      newItem,
    };
  },
};
</script>
