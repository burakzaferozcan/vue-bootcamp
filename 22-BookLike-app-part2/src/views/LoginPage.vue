<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Giriş Yap</h3>
    {{ $store.getters._saltKey }}

    <input
      v-model="userData.username"
      type="text"
      placeholder="Kullanıcı Adı"
      class="input mb-3"
    />
    <input
      v-model="userData.password"
      type="password"
      placeholder="Şifre"
      class="input mb-3"
    />
    <button @click="onSubmit" class="default-button">Giriş yap</button>
    <span class="text-center mt-3 text-sm">
      Üye değilim,
      <router-link to="/register" class="text-red-900 hover:text-black">
        Üye olmak istiyorum!
      </router-link>
    </span>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  data() {
    return {
      userData: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      const password = CryptoJS.HmacSHA1(
        this.userData.password,
        this.$store.getters._saltKey
      ).toString();

      this.$appAxios
        .get(`/users?username=${this.userData.username}`)
        .then((response) => {
          if (response.data.length > 0) {
            const user = response?.data[0];
            const storedPassword = user.password;
            if (storedPassword === password) {
              console.log("Giriş başarılı");
              this.$store.commit("setUser", user);
              this.$router.push({ name: "HomePage" });
            } else {
              alert("Hatalı şifre");
            }
          } else {
            alert("Kullanıcı bulunamadı");
          }
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
