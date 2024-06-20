<template>
  <div>
    <h1>app</h1>

    <Teleport to="#modal-area">
      <img src="./assets/vue.svg" alt="" />
    </Teleport>

    <Teleport to="#modal-area">
      <h1>modal-area teleport</h1>
    </Teleport>
  </div>
</template>
<script>
export default {};
</script>
