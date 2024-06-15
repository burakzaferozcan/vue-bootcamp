<template>
  <div>
    <AppHeader></AppHeader>
    <div class="flex flex-row">
      <SideBar></SideBar>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/Account/sideBar.vue";
import AppHeader from "../components/Shared/appHeader.vue";
export default {
  components: {
    SideBar,
    AppHeader,
  },
};
</script>
