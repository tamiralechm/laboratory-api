// Load Module Dependencies
var PatientDal = require('../dal/patient');
var SpecimenDal = require('../dal/specimen');
var NurseDal=require('../dal/nurse');
 var debug = require('debug')('laboratory-api');

//post patient item
exports.createPatient = function createPatient(req, res, next) {
  debug('creating patient list');

  var body = req.body;
  PatientDal.create({
    name: body.name,
    age: body.age,
    sex:body.sex,
    symptom: body.symptom,
    },
    function callback(err, patient) {
      if (err) {
        return next(err);
      }

      res.status(201);
      res.json(patient);

    });
};
/**
 * get a specific patient from the patient collection
 */
exports.getPatient = function getPatient(req, res, next) {
  debug('getting a specific patient');

  //define query
  var query = { _id: req.params._id };

  //get a patient by id
  PatientDal.get(query, function cb(err, patient) {
    if (err) {
      return next(err);
    }
    if (patient) {
      res.json(patient);

    } else {
      res.status(404);
      res.json({ message: 'patient not found' });
    }
  });
};

/**update a specific patient
 * 
 */
exports.updatePatient = function updatePatient(req, res, next) {
  debug('updating a patient information');

  //define body and query variables
  var body = req.body;
  var query = { _id: req.params._id };

  //update patient
  PatientDal.update(query, body, function cb(err, patient) {
    if (err) {
      return next(err);
    }
    res.json(patient);
  });
};

/**get collection of all patients
 * 
 */
exports.getPatients = function getPatients(req, res, next) {
  debug('get collection of patients');

  PatientDal.getCollection({}, function getPatients(err, patients) {
    if (err) {
      return next(err);
    }
    res.json(patients);
  });
};

/**find a patient by id and remove
 * 
 */

exports.removePatient = function removePatient(req, res, next) {
  debug('removing a specific patient record');

  //define query
  var query = { _id: req.params._id };

  //remove a patient
  PatientDal.delete(query, function deletecb(err, patient) {
    if (err) {
      return next(err);
    }
    res.json(patient || {});
  });
};

//pagination controller
exports.getByPagination = function getByPagination(req, res, next) {
  debug('paginate patient collection');

  //query all
  var query = {};

  //define page 
  var page = 1 * req.query.page;

  //efine page limit
  var limit = 1 * req.query.per_page;

  //log current page
  console.log(page);

  //define queryOpts
  var queryOpts = { page: page, limit: limit };

  PatientDal.getCollectionByPagination(query, queryOpts, function getCollectionByPagination(err, doc) {
    console.log(queryOpts);

    if (err) {
      return next(err);
    }
    if (!doc) {
      res.status(404);
      res.json({ message: 'request not found' });
    }
    res.json(doc);
  });
};
 exports.searchPatient = function searchPatient(req, res, next) {

   debug('searching patient record');

 };
