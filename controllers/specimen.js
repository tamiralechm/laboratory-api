// Load Module Dependencies
var SpecimenDal = require('../dal/specimen');
var NurseDal = require('../dal/nurse');
var PatientDal = require('../dal/patient')
var debug = require('debug')('laboratory-api');

/**
 * post specimen
 */
exports.createSpecimen = function createSpecimen(req, res, next) {
    debug('create specimen');


    var body = req.body;
    SpecimenDal.create({
        name: body.name
      },
        function cb(err, specimen) {
            if (err) {
                return next(err);
            }

            res.status(201);
            res.json(specimen);

        });
};
/**
 * get a specific specimen from the specimen collection
 */
exports.getSpecimen = function getSpecimen(req, res, next) {
    debug('getting a specific specimen');

    //define query
    var query = { _id: req.params._id };

    //get a specimen by id
    SpecimenDal.get(query, function cb(err, specimen) {
        if (err) {
            return next(err);
        }
        if (specimen) {
            res.json(specimen);

        } else {
            res.status(404);
            res.json({ message: 'specimen not found' });
        }
    });
};

/**update a specific specimen
 * 
 */
exports.updateSpecimen = function updateSpecimen(req, res, next) {
    debug('updating a specimen information');

    //define body and query variables
    var body = req.body;
    var query = { _id: req.params._id };

    //update specimen
    SpecimenDal.update(query, body, function cb(err, specimen) {
        if (err) {
            return next(err);
        }
        res.json(specimen);
    });
};

/**get collection of all specimens
 * 
 */
exports.getSpecimens = function getSpecimens(req, res, next) {
    debug('get collection of specimens');

    SpecimenDal.getCollection({}, function getSpecimens(err, specimens) {
        if (err) {
            return next(err);
        }
        res.json(specimens);
    });
};

/**find a specimen by id and remove
 * 
 */

exports.removeSpecimen = function removeSpecimen(req, res, next) {
    debug('removing a specific specimen record');

    //define query
    var query = { _id: req.params._id };

    //remove a specimen
    SpecimenDal.delete(query, function deletecb(err, specimen) {
        if (err) {
            return next(err);
        }
        res.json(specimen || {});
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
    SpecimenDal.getCollectionByPagination(query, queryOpts, function getByPagination(err, doc) {
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
  exports.searchSpecimen = function searchSpecimen(req, res, next) {

   debug('searching specimen record');

 };
