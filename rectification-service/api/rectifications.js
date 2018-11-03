import httpStatus from 'http-status';

function api(app, options){
  const {repo} = options

  app.get('/rectifications', (req, res, next) => {
    /*repo.getAllMovies().then(movies => {
      res.status(httpStatus.OK).json(movies)
    }).catch(next)*/
    //res.status(httpStatus.OK).json([])
      res.send(httpStatus.OK, []);
      return next();
  })

  /*app.get('/movies/premieres', (req, res, next) => {
    repo.getMoviePremiers().then(movies => {
      res.status(httpStatus.OK).json(movies)
    }).catch(next)
  })*/
}

export default api;
