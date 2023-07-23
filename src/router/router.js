import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import Photos from "@/pages/Photos";

const routes = [
    {
        path: '/',
        component: Main,
        name: "Main"
    },    {
        path: '/photos/',
        component: Photos,
        name: "Photos",
        props: true,
    },
]

const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.ASE_URL)
    }
);
export default  router;