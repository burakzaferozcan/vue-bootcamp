<template>
  <form>
    <div class="mb-3 card border p-2">
      <label for="title" class="form-label">Başlık</label>
      <input
        v-model="userData.title"
        type="text"
        class="form-control"
        id="title"
        placeholder="..."
      />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">URL</label>
      <input
        v-model="userData.url"
        type="text"
        class="form-control"
        id="url"
        placeholder="https://..."
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Açıklama</label>
      <textarea
        v-model="userData.description"
        type="text"
        class="form-control"
        rows="3"
        id="description"
        placeholder="Bu var ya..."
      ></textarea>
    </div>
    <div class="d-flex justify-content-end align-items-center gap-1">
      <button
        type="submit"
        class="btn btn-sm btn-secondary"
        @click="$router.push('/')"
      >
        iptal
      </button>
      <button
        type="submit"
        @click.prevent="onSave"
        class="btn btn-sm btn-primary"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        title: null,
        url: null,
        description: null,
      },
    };
  },
  methods: {
    onSave() {
      console.log(this.userData);
      this.$appAxios.post("/bookmarks", this.userData).then((res) => {
        console.log("save response", res);
        this.resetData();
        this.$router.push("/");
      });
    },
    resetData() {
      Object.keys(this.userData).forEach((key) => (this.userData[key] = null));
    },
  },
};
</script>
