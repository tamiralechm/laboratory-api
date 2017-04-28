// Access Layer for nurse Data.

/**
 * Load Module Dependencies.
 */
var debug = require('debug')('laboratory-api');
var Nurse = require('../models/nurse');
var Patient = require('../models/patient');
var Specimen = require('../models/specimen');

var population = [{

  path: 'patient',
}, {
  path: 'specimen'
}];

/**
 * create a new nurse.
 *
 * @desc  creates a new nurse and saves them
 *        in the database
 * 
 */
exports.create = function create(nurseData, cb) {
  debug('creating a new nurse');

  // Create drink
  var nurseModel = new Nurse(nurseData);

  nurseModel.save(function savenurse(err, data) {
    if (err) {
      return cb(err);
    }
    exports.get({ _id: data._id }, function (err, nurse) {
      if (err) {
        return cb(err);
      }

      cb(null, nurse);

    });

  });

};

/**
 * delete a nurse
 *
 * @desc  delete data of the nurse with the given
 *        id
  
 */

//deleting a nurse
exports.delete = function deleteItem(query, cb) {
  debug('deleting nurse: ', query);

  Nurse
    .findOne(query)
    .populate(population)
    .exec(function deletenurse(err, nurse) {
      if (err) {
        return cb(err);
      }

      if (!nurse) {
        return cb(null, {});
      };

      Nurse.remove(function (err) {
        if (err) {
          return cb(err);
        }

        cb(null, nurse);

      });

    });
};

/**
 * update a nurse
 *
 * @desc  update data of the nurse with the given
 *        id
 
 */
exports.update = function update(query, updates, cb) {
  debug('updating nurse: ', query);


  Nurse
    .findOneAndUpdate(query, updates)
    .populate(population)
    .exec(function updatecb(err, nurse) {
      if (err) {
        return cb(err);
      }
      cb(null, nurse || {});
    });
};

/**
 * get a nurse.
 *
 * @desc get a nurse with the given id from db
 
 */
exports.get = function get(query, cb) {
  debug('getting nurse ', query);

  Nurse
    .findOne(query)
    .populate(population)
    .exec(function (err, nurse) {
      if (err) {
        return cb(err);
      }

      cb(null, nurse || {});
    });
};

/**
 * get a collection of nurses
 *
 * @desc get a collection of nurses from db
 *
 */
exports.getCollection = function getCollection(query, cb) {
  debug('fetching a collection of nurses');

  Nurse.find(query)
    .populate(population)
    .exec(function getnursesCollection(err, nurses) {
      if (err) {
        return cb(err);
      }

      return cb(null, nurses || {});
    });
};

//get collection by pagination
exports.getCollectionByPagination=function getCollectionByPagination(query,queryOpts,cb){

  //define opts
  var opts={populate:population,page:queryOpts.page,limit:queryOpts.limit};

  Nurse.paginate(query,queryOpts,function(err,result){
    if(err){
      return cb(err);
    }
    return cb(null,result);
  });
};
