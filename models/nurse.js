// Load Module Dependencies
var mongoose = require('mongoose');
var paginator = require('mongoose-paginate');

var Schema = mongoose.Schema;

//define food schema attributies 
var NurseSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  sex: { type: String },
  duty_shift: { type: String },
  patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
  specimen: { type: Schema.Types.ObjectId, ref: 'Specimen' },

}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  });

//pagination plugin
NurseSchema.plugin(paginator);

//export food module
module.exports = mongoose.model('Nurse', NurseSchema);
