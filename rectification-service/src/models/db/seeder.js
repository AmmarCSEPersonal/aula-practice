import to from 'await-to-js';
import connectMongo from './db-client';
import seeds from './seeds/rectifications';
import Rectification from '../rectification';

(async function(){
    const sequence = [connectMongo, ()=>Rectification.remove(), ()=>Rectification.insertMany(seeds)];
    for(let step of sequence){
        let [error, success] = await to(step());
        if(error){
            console.error(error);
            return;
        }
    }
    process.exit();
})();
