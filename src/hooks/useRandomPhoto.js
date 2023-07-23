import {ref, onMounted} from 'vue';

export function useRandomPhoto() {
    const image = ref({});
    const isImageLoaded = ref(true)
    const fetching = async () => {
        try {
            let res = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.CLIENT_ID);
            let data  = await res.json();
            image.value = data.urls.full;
        } catch (e) {
            alert('Ошибка')
        } finally {
            isImageLoaded.value = false;
        }
    }

    onMounted(fetching)

    return {
        image,
        isImageLoaded
    }
}