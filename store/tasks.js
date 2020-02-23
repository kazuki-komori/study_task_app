import axios from "../.nuxt/axios";

export const actions = {
  async GET_TASKS({commit}){
    const {data} = await axios.get('/tasks')
    commit('GET_TASKS', data)
  }
}
