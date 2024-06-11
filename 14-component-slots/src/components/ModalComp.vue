<template>
  <div class="container">
    <div class="header">
      <h1>
        <slot name="title" />
      </h1>
    </div>
    <hr />
    <div class="content my-2">
      <slot name="content" />
    </div>
    <div class="content my-2">
      <slot name="content2" />
    </div>
    <!-- default'u name olmadan da kullanabilriiz -->
    <slot name="default" />
    <br />
    <slot />

    <hr />

    <div class="footer text-right">
      <button>kapat</button>
      <button class="green">kaydet</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>
