import httpStatus from 'http-status';
import to from 'await-to-js';
import Rectification from '../models/rectification';

function api(app){
  app.get('/rectifications', async (req, res, next) => {
    const [error, rectifications] = await to(Rectification.find({}, '-_id'));
    console.log('here');
    res.send(httpStatus.OK, rectifications);  
    next();
  })

  /*app.get('/movies/premieres', (req, res, next) => {
    repo.getMoviePremiers().then(movies => {
      res.status(httpStatus.OK).json(movies)
    }).catch(next)
  })*/
}

export default api;
