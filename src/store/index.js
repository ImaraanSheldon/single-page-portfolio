import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'

const Jerry = "https://imaraansheldon.github.io/vue-data/data"

export default createStore({
  state: {
    Home : "null",
    Sections : "null",
    Services : "null",
    Work : "null",
    About : "null",
    Skills : "null",
    Testimonials : "null",
  },
  getters: {
  },
  mutations: {
    setHome(state, value){
      state.Home = value
    },
    setSections(state, value){
      state.Sections = value
    },
    setServices(state, value){
      state.Services = value
    },
    setWork(state, value){
      state.Work = value
    },
    setAbout(state, value){
      state.About = value
    },
    setSkills(state, value){
      state.Skills = value
    },
    setTestimonials(state, value){
      state.Testimonials = value
    },
  },
  actions: {
    async fetchHome(context){
      try {
        let { Home } = await(await axios.get(Jerry)).data
        context.commit('setHome', Home)
      } catch (error) {
        Swal.fire({
          title:'error',
          text:'error',
          icon:'error' ,  
          timer: 2000     
        })
      }
    }
  },
  modules: {
  }
})
