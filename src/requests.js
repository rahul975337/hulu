const API_KEY = "08cdb8963193e939c597034e9e54a3a7";

const requests = {
  fetshTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetshTopRating: `/movietop_rated?api_key=${API_KEY}&language=en-US`,
  fetshActionMovies: `/discover/movies?api_key=${API_KEY}&with_genres=28`,
  fetshComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
  fetshHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
  fetshRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
  fetshMystory: `/discover/movie?api_key=${API_KEY}&with_geners=9648`,
  fetshSciFi: `/discover/movie?api_key=${API_KEY}&with_geners=878`,
  fetshWestern: `/discover/movie?api_key=${API_KEY}&with_geners=37`,
  fetshAnimation: `/discover/movie?api_key=${API_KEY}&with_geners=16`,
  fetshTv: `/discover/movie?api_key=${API_KEY}&with_geners=10770`,
};
export default requests;