import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router/router";
import components from '@/components/UI';
const app = createApp(App);
import store from "@/store";
import directives from '@/derectives';


components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
        .use(router)
        .use(store)
        .mount('#app');
