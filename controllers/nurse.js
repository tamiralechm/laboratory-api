// Load Module Dependencies
var NurseDal = require('../dal/nurse');
var SpecimenDal = require('../dal/specimen');
var PatientDal = require('../dal/patient')
var debug = require('debug')('laboratory-api');

//post nurse
exports.createNurse = function createNurse(req, res, next) {
  debug('creating nurse list');

  var body = req.body;
  NurseDal.create({
    name: body.name,
    age: body.age,
    sex: body.sex,
    duty_shift: body.duty_shift,
   }, function callback(err, nurse) {
    if (err) {
      return next(err);
    }

    res.status(201);
    res.json(nurse);
  });
};
/**
 * get a specific nurse from the nurse collection
 */
exports.getNurse = function getNurse(req, res, next) {
  debug('getting a specific nurse');

  //define query
  var query = { _id: req.params._id };

  //get a nurse by id
  NurseDal.get(query, function cb(err, nurse) {
    if (err) {
      return next(err);
    }
    if (nurse) {
      res.json(nurse);

    } else {
      res.status(404);
      res.json({ message: 'nurse not found' });
    }
  });
};

/**update a specific nurse
 * 
 */
exports.updateNurse = function updateNurse(req, res, next) {
  debug('updating a nurse information');

  //define body and query variables
  var body = req.body;
  var query = { _id: req.params._id };

  //update nurse
  NurseDal.update(query, body, function cb(err, nurse) {
    if (err) {
      return next(err);
    }
    res.json(nurse);
  });
};

/**get collection of all nurses
 * 
 */
exports.getNurses = function getNurses(req, res, next) {
  debug('get collection of nurses');

  NurseDal.getCollection({}, function getNurses(err, nurses) {
    if (err) {
      return next(err);
    }
    res.json(nurses);
  });
};

/**find a nurse by id and remove
 * 
 */

exports.removeNurse = function removeNurse(req, res, next) {
  debug('removing a specific nurse record');

  //define query
  var query = { _id: req.params._id };

  //remove a nurse
  NurseDal.delete(query, function deletecb(err, nurse) {
    if (err) {
      return next(err);
    }
    res.json(nurse || {});
  });
};
//pagination Controller////////

exports.getByPagination = function getByPagination(req, res, next) {
  debug('pagination');

  //query all
  var query = {};

  //define page and limit per page
  var page = 1 * req.query.page;
  var limit = 1 * req.query.per_page;
  console.log(page);
  //define query options as page and limit
  var queryOpts = {
    page: page,
    limit: limit
  };
  NurseDal.getCollectionByPagination(query, queryOpts, function getByPagination(err, doc) {
    console.log(queryOpts);
    if (err) {
      return next(err);
    }
    if (!doc) {
      res.status(404);
      res.json({ messge: 'request not found' });
    }
    res.json(doc);
  });
};
 
 exports.searchNurse = function searchNurse(req, res, next) {

   debug('searching nurse record');

 };
