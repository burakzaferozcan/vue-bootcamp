<template>
  <div>
    <AppHeader />
    <div class="flex flex-row">
      <SideBar />
      <appBookmarkList />
    </div>
  </div>
</template>

<script>
import SideBar from "../components/Home/SideBar.vue";
export default {
  components: { SideBar },
};
</script>

AppHeader
