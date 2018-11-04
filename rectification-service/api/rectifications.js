import httpStatus from 'http-status';
import Rectification from '../models/rectification';

function api(app){
  app.get('/rectifications', (req, res, next) => {
    /*repo.getAllMovies().then(movies => {
      res.status(httpStatus.OK).json(movies)
    }).catch(next)*/
    //res.status(httpStatus.OK).json([])
        /*let rectification = new Rectification();
        rectification.coreLabel = 'testing 123';
    rectification.valueTarget = 'value 321';
    rectification.options = {
        caseInsensitive : true 
    };
rectification.save();
console.log('there');
      res.send(httpStatus.OK, []);
      return next();*/
Rectification.find({}, function(err, users) {
console.log('here');
    res.send(users);  
    next();
  });
      //res.send(httpStatus.OK, []);
      //return next();
  })

  /*app.get('/movies/premieres', (req, res, next) => {
    repo.getMoviePremiers().then(movies => {
      res.status(httpStatus.OK).json(movies)
    }).catch(next)
  })*/
}

export default api;
