// Access Layer for specimen Data.

/**
 * Load Module Dependencies.
 */
var debug = require('debug')('laboratory-api');
var Specimen = require('../models/specimen');
var Nurse = require('../models/nurse');
var Patient = require('../models/patient');

var population = [{

  path: 'nurse',
}, {
  path: 'patient'
}];

/**
 * create a new specimen.
 *
 * @desc  creates a new specimen and saves them
 *        in the database
 */
exports.create = function create(specimenData, cb) {
  debug('creating a new specimen');

  // Create drink
  var specimenModel = new Specimen(specimenData);

  specimenModel.save(function saveSpecimen(err, data) {
    if (err) {
      return cb(err);
    }
    exports.get({ _id: data._id }, function (err, specimen) {
      if (err) {
        return cb(err);
      }

      cb(null, specimen);

    });

  });

};

/**
 * delete a specimen
 *
 * @desc  delete data of the specimen with the given
 *        id
 */

//deleting a specimen
exports.delete = function deleteItem(query, cb) {
  debug('deleting specimen: ', query);

  Specimen
    .findOne(query)
    .populate(population)
    .exec(function deletespecimen(err, specimen) {
      if (err) {
        return cb(err);
      }

      if (!specimen) {
        return cb(null, {});
      };

      Specimen.remove(function (err) {
        if (err) {
          return cb(err);
        }

        cb(null, specimen);

      });

    });
};

/**
 * update a specimen
 *
 * @desc  update data of the specimen with the given
 *        id
 */
exports.update = function update(query, updates, cb) {
  debug('updating specimen: ', query);


  Specimen
    .findOneAndUpdate(query, updates)
    .populate(population)
    .exec(function updatecb(err, specimen) {
      if (err) {
        return cb(err);
      }
      cb(null, specimen || {});
    });
};

/**
 * get a specimen.
 *
 * @desc get a specimen with the given id from db
 */
exports.get = function get(query, cb) {
  debug('getting specimen ', query);

  Specimen
    .findOne(query)
    .populate(population)
    .exec(function (err, specimen) {
      if (err) {
        return cb(err);
      }

      cb(null, specimen || {});
    });
};

/**
 * get a collection of specimens
 *
 * @desc get a collection of specimens from db
 */
exports.getCollection = function getCollection(query, cb) {
  debug('fetching a collection of specimens');

  Specimen.find(query)
    .populate(population)
    .exec(function getspecimensCollection(err, specimens) {
      if (err) {
        return cb(err);
      }

      return cb(null, specimens || {});
    });
};

//get collection by pagination
exports.getCollectionByPagination=function getCollectionByPagination(query,queryOpts,cb){

  //define opts
  var opts={populate:population,page:queryOpts.page,limit:queryOpts.limit};

  Specimen.paginate(query,queryOpts,function(err,result){
    if(err){
      return cb(err);
    }
    return cb(null,result);
  });
};
