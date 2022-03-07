import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

// import global components
import NavBar from "./components/Shared/NavBar.vue";

// register global components
app.component("NavBar", NavBar);

app.use(router);
app.mount("#app");
