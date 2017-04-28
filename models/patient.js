// Load Module Dependencies
var mongoose = require('mongoose');
var paginator = require('mongoose-paginate');

var Schema = mongoose.Schema;

//define menu schema attributes
var PatientSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  sex: { type: String },
  symptom: { type: String },
  nurse: { type: Schema.Types.ObjectId, ref: 'Nurse' },
  specimen: { type: Schema.Types.ObjectId, ref: 'Specimen' },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  });

//pagination plugin
PatientSchema.plugin(paginator);

//export menu module
module.exports = mongoose.model('Patient', PatientSchema);
