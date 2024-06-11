<template>
  <div>
    <div class="container text-center">
      <h1>comp</h1>

      <div class="d-flex justify-content-between align-items-center">
        <button class="red" @click="activeComponent1 = 'RedComp'">
          RedComp
        </button>
        <button class="blue" @click="activeComponent1 = 'BlueComp'">
          BlueComp
        </button>
        <button class="green" @click="activeComponent1 = 'GreenComp'">
          GreenComp
        </button>
      </div>
      <RedComp
        class="my-2"
        v-if="activeComponent1 == 'RedComp'"
        msg="Red Component 1 "
      ></RedComp>
      <BlueComp class="my-2" v-if="activeComponent1 == 'BlueComp'"></BlueComp>
      <GreenComp class="my-2" v-if="activeComponent1 == 'GreenComp'">
        <template #greenComponent>
          <h3 class="bg-green text-white my-2">Green Component 1</h3>
        </template>
      </GreenComp>
    </div>

    <!-- dynamic component -->
    <div class="container text-center">
      <h1>dynamic component</h1>

      <div class="d-flex justify-content-between align-items-center">
        <button class="red" @click="activeComponent2 = 'RedComp'">
          RedComp
        </button>
        <button class="blue" @click="activeComponent2 = 'BlueComp'">
          BlueComp
        </button>
        <button class="green" @click="activeComponent2 = 'GreenComp'">
          GreenComp
        </button>
      </div>
      <!--? keep-alive dynamic componentin mounted olmasını önler -->
      <!--? ve 2 yeni life-cycle hook'u verir activated ve deactivated -->
      <keep-alive>
        <component :is="activeComponent2" msg="Red Component 2" class="my-2">
          <template #greenComponent>
            <h3 class="bg-green text-white my-2">Green Component 2</h3>
          </template>
        </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import BlueComp from "./components/BlueComp.vue";
import GreenComp from "./components/GreenComp.vue";
import RedComp from "./components/RedComp.vue";

export default {
  components: { RedComp, BlueComp, GreenComp },
  data() {
    return {
      activeComponent1: "RedComp",
      activeComponent2: "RedComp",
    };
  },
};
</script>
