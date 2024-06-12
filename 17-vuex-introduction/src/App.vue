<template>
  <div class="container text-center">
    {{ $store.state.user }}
    <br />
    {{ $store.state.permissions }}
    <hr />
    <ul>
      <li v-for="permission in $store.state.permissions" :key="permission">
        {{ permission }}
      </li>
      <hr />

      <li>
        {{ $store.state.user.name }}
      </li>
      <li>
        {{ $store.state.user.lname }}
      </li>
      <li>
        {{ $store.state.user.age }}
      </li>
      <hr />

      <li v-for="user in $store.state.userList" :key="user">
        {{ user }}
      </li>
      <hr />
      <WoodItemsList />
      {{
        $store.state.fullName
      }}

      <NewWoodItem />
    </ul>
    <hr />
    <div></div>
  </div>
</template>

<script>
import NewWoodItem from "./components/NewWoodItem.vue";
import WoodItemsList from "./components/WoodItemsList.vue";
export default {
  components: { WoodItemsList, NewWoodItem },
  created() {
    console.log(this.$store.state.user);
    console.log(this.$store.state.theme);
  },
};
</script>
