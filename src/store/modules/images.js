import api from "../../api/imgur";
import router  from "../../route";

const state = {
  images: [],
};

const getters = {
  allImages: (state) => state.images,
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit("setImage", response.data.data);
  },

  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth;
    await api.upload(images, token);

    router.push('/');
  },
};

const mutations = {
  setImage: (state, images) => {
    state.images = images;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
