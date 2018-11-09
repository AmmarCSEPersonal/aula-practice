import development from './env/development';
import test from './env/test';
import production from './env/production';
console.log(process.env.NODE_ENV);
export default {
  development,
  test,
  production
}[process.env.NODE_ENV || 'development'];
