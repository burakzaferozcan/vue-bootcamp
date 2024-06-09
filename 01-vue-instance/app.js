const app = Vue.createApp({
  data() {
    return {
      title: "vue.js bootcamp",
      content: "lorem ipsum dolor sit amet",
      url: "https://www.youtube.com/watch?v=SAIBu6YvErE&list=PL_f2F0Oyaj48Y0Uv4BTlqzK7INi92D2wp",
      eduflow: {
        title: "obje youtube'a gitmek için tıklayın",
        target: "_blank",
        url: "https://www.youtube.com/watch?v=SAIBu6YvErE&list=PL_f2F0Oyaj48Y0Uv4BTlqzK7INi92D2wp",
        alt: "youtube-alt",
      },
      coords: {
        string: "",
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    changeTitle(pTitle) {
      this.title = pTitle;
    },
    updateCoords(a, e) {
      this.coords = {
        string: a,
        x: e.x,
        y: e.y,
      };
    },
  },
}).mount("#app");
