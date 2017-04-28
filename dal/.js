// Access Layer for drink Data.

/**
 * Load Module Dependencies.
 */
var debug = require('debug')('restaurant-API');
var moment = require('moment');

var Drink = require('../models/drink');

var population = [{
  path: 'menu'
}];

/**
 * create a new drink.
 *
 * @desc  creates a new drink and saves them
 *        in the database
 *
 * @param {Object}  drinkData  Data for the drink to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(drinkData, cb) {
  debug('creating a new drink');

  // Create drink
  var drinkModel = new Drink(drinkData);

  drinkModel.save(function savedrink(err, data) {
    if (err) {
      return cb(err);
    }
    exports.get({ _id: data._id }, function (err, drink) {
      if (err) {
        return cb(err);
      }

      cb(null, drink);

    });

  });

};

/**
 * delete a drink
 *
 * @desc  delete data of the drink with the given
 *        id
 *
 * @param {Object}  query   Query Object
 * @param {Function} cb Callback for once delete is complete
 */

//deleting a drink
exports.delete = function deleteItem(query, cb) {
  debug('deleting drink: ', query);

  Drink.findOne(query).populate(population).exec(function deletedrink(err, drink) {
      if (err) {
        return cb(err);
      }

      if (!drink) {
        return cb(null, {});
      };

      Drink.remove(function (err) {
        if (err) {
          return cb(err);
        }

        cb(null, drink);

      });

    });
};

/**
 * update a drink
 *
 * @desc  update data of the drink with the given
 *        id
 *
 * @param {Object} query Query object
 * @param {Object} updates  Update data
 * @param {Function} cb Callback for once update is complete
 */
exports.update = function update(query, updates, cb) {
  debug('updating drink: ', query);


  Drink.findOneAndUpdate(query, updates).populate(population).exec(function updatecb(err, drink) {
      if (err) {
        return cb(err);
      }
      cb(null, drink || {});
    });
};

/**
 * get a drink.
 *
 * @desc get a drink with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
  debug('getting drink ', query);

  Drink.findOne(query).populate(population).exec(function (err, drink) {
      if (err) {
        return cb(err);
      }

      cb(null, drink || {});
    });
};

/**
 * get a collection of drinks
 *
 * @desc get a collection of drinks from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, cb) {
  debug('fetching a collection of drinks');

  Drink.find(query).populate(population).exec(function getdrinksCollection(err, drinks) {
      if (err) {
        return cb(err);
      }

      return cb(null, drinks || {});
    });

};
//pagination
exports.getCollectionByPagination = function getCollectionByPagination(query, queryOpts, cb) {

  var opts = {
    populate: population,
    page: queryOpts.page,
    limit: queryOpts.limit
  };
  Drink.paginate(query, opts, function (err, result) {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
};