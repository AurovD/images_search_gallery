import axios from "axios";

export const imagesModule = {
    state: () => ({
        images: [],
        page: 1,
        query: ""
    }),
    mutations: {
        ADD_IMAGES(state, images) {
            state.images = images;
        },
        setQuery(state, query) {
            state.query = query
        },
        setPage(state, page) {
            state.page = page
        },
    },
    actions: {
        async fetchImages({state, commit}, query) {
            try {
                commit("setQuery", query.query);
                await axios.get(`https://api.unsplash.com/search/photos`, {
                    params: {
                        page: state.page,
                        per_page: 10,
                        query: query.query,
                        client_id: "GyY2C8WgvLqhlDdKm5DIWmuSRiiV32KMQaiMFTedt0g"
                    }
                }).then((res) => {
                    commit("ADD_IMAGES", res.data.results);
                })
            } catch (e) {
                alert('Ошибка')
            } finally {
                // isPostsLoading.value = false;
            }
        },
        async loadMorePosts({state, commit}) {
            try {
                commit('setPage', state.page += 1);
                await axios.get(`https://api.unsplash.com/search/photos`, {
                    params: {
                        page: state.page,
                        per_page: 10,
                        query: state.query,
                        client_id: "GyY2C8WgvLqhlDdKm5DIWmuSRiiV32KMQaiMFTedt0g"
                    }
                }).then((res) => {
                    commit('ADD_IMAGES', [...state.images, ...res.data.results]);
                })
            } catch (e) {
                alert(e)
            }
        }
    },
    namespaced: true
}
