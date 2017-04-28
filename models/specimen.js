// Load Module Dependencies
var mongoose = require('mongoose');
var paginator = require('mongoose-paginate');

var Schema = mongoose.Schema;

// efine drink schema attribute
var SpecimenSchema = new Schema({
  name: { type: String },
  nurse: { type: Schema.Types.ObjectId, ref: 'Nurse' },
  patient: { type: Schema.Types.ObjectId, ref: 'Patient' }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  });

//pagination plugin
SpecimenSchema.plugin(paginator);

//export drink module
module.exports = mongoose.model('Specimen', SpecimenSchema);
