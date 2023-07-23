import { createStore } from 'vuex'
import {imagesModule} from "@/store/imagesModule";

export default createStore({
    modules: {
        images: imagesModule
    }
})
