import axios from "axios"

//https://api.themoviedb.org/3/movie/now_playing?api_key=c1d11c636718f9b05abe1b9602d50493&language=pt-br
//https://api.themoviedb.org/3/movie

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api