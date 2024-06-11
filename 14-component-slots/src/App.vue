<template>
  <ModalComp>
    <template #title>
      <h3>slot ile gelen title bilgisi</h3>
    </template>
    <template #content>
      <p class="text-green">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        voluptatibus voluptatem deserunt ipsum consequuntur fugit fuga quidem
        quo vero atque fugiat, corrupti et nesciunt! Quibusdam quis facilis
        ratione praesentium quidem.
      </p>
    </template>
    <template v-slot:content2>
      <p class="text-green">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        voluptatibus voluptatem deserunt ipsum consequuntur fugit fuga quidem
        quo vero atque fugiat, corrupti et nesciunt! Quibusdam quis facilis
        ratione praesentium quidem.
      </p>
    </template>
    <template #default> bu default olarak gösterilecek </template>
  </ModalComp>
</template>

<script>
import ModalComp from "./components/ModalComp.vue";
export default {
  components: { ModalComp },
};
</script>
