import {
  getRecommendedKSAProperties,
  getRecommendedInternationalProperties,
} from "../services/property-service";

const Home = {
  namespaced: true,
  state: {
    kProperties: [],
    iProperties: [],
  },
  mutations: {
    setKProperties: (state, payload) => {
      state.kProperties = payload;
    },
    setIProperties: (state, payload) => {
      state.iProperties = payload;
    },
  },
  actions: {
    getKProperties: async (context) => {
      const response = await getRecommendedKSAProperties();
      context.commit("setKProperties", response.data);
    },
    getIProperties: async (context) => {
      const response = await getRecommendedInternationalProperties();
      context.commit("setIProperties", response.data);
    },
  },
};

export default Home;
