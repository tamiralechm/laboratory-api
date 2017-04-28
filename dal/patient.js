// Access Layer for patient Data.

/**
 * Load Module Dependencies.
 */
var debug = require('debug')('laboratory-api');
var Patient = require('../models/patient');

var population = [{
  path: 'nurse'
},{
  path:'specimen'
}];

/**
 * create a new patient.
 *
 * @desc  creates a new patient and saves them
 *        in the database
 
 */
exports.create = function create(patientData, cb) {
  debug('creating a new patient');

  // Create patient
  var patientModel = new Patient(patientData);

  patientModel.save(function savepatient(err, data) {
    if (err) {
      return cb(err);
    }
    exports.get({ _id: data._id }, function (err, patient) {
      if (err) {
        return cb(err);
      }

      cb(null, patient);

    });

  });

};

/**
 * delete a patient
 *
 * @desc  delete data of the patient with the given
 *        id
 */

//deleting a patient
exports.delete = function deleteItem(query, cb) {
  debug('deleting patient: ', query);

  Patient
    .findOne(query)
    .populate(population)
    .exec(function deletepatient(err, patient) {
      if (err) {
        return cb(err);
      }

      if (!patient) {
        return cb(null, {});
      };

      Patient.remove(function (err) {
        if (err) {
          return cb(err);
        }

        cb(null, patient);

      });

    });
};

/**
 * update a patient
 *
 * @desc  update data of the patient with the given
 *        id
  
 */
exports.update = function update(query, updates, cb) {
  debug('updating patient: ', query);


  Patient
    .findOneAndUpdate(query, updates)
    .populate(population)
    .exec(function updatecb(err, patient) {
      if (err) {
        return cb(err);
      }
      cb(null, patient || {});
    });
};

/**
 * get a patient.
 *
 * @desc get a patient with the given id from db
 
 */
exports.get = function get(query, cb) {
  debug('getting patient ', query);

  Patient
    .findOne(query)
    .populate(population)
    .exec(function (err, patient) {
      if (err) {
        return cb(err);
      }

      cb(null, patient || {});
    });
};

/**
 * get a collection of patients
 *
 * @desc get a collection of patients from db
 
 */
exports.getCollection = function getCollection(query, cb) {
  debug('fetching a collection of patients');

  Patient.find(query)
    .populate(population)
    .exec(function getpatientsCollection(err, patients) {
      if (err) {
        return cb(err);
      }

      return cb(null, patients || {});
    });
};

//get collection by paginaton
exports.getCollectionByPagination = function getCollectionByPagination(query, queryOpts, cb) {

  var opts = { populate: population, page: queryOpts.page, limit: queryOpts.limit };
  Patient.paginate(query, queryOpts, function (err, result) {
    if (err) {
      return cb(err);
    }
    return cb(null, result)
  });
};

