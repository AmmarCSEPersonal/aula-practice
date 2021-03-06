import mongoose from 'mongoose';
 
/*{
   'core-label': 'invoice',
   'label-variants': {
      'pre': '',
      'post': '[':', '#']
   },
   'value-target': '\d',
   'options': {
      'case-insensitive': 1
   }
}*/
const rectificationSchema = new mongoose.Schema({
    //TODO: Make currency an enum or type
    coreLabel: { type: String, required: true },
    valueTarget: { type: String, required: true },
    options: {
        caseInsensitive: { type: Boolean }   
    }
    //amount: { type: Number },
    //priceBought: { type: Number },
    //subscriptions: [PositionSubscription]
});
 
export default mongoose.model('Rectification', rectificationSchema);
