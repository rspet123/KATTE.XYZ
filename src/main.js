import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/styles.css'; // Import global styles
import TypedDirective from './directives/v-typewriter';
import WaitDirective from './directives/v-wait';

const app = createApp(App)
app.directive('typewriter', TypedDirective);
app.directive('wait', WaitDirective);

app.use(router);

app.mount('#app')