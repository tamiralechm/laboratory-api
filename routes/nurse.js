// Load Module Dependencies
var express = require('express');
var nurse = require('../controllers/nurse');

// Create a Router
var router = express.Router();

/**
 * @api {post} nurses/ create a nurse
 * @apiName createnurse
 * @apiGroup nurses
 * 
* @apiParam {string} name name of a nurse
 * @apiParam {Number} age age of the nurse
 * @apiParam {string} sex gender of the nurse
 * @apiParam {String} duty_shift work shift schedule
 * 
 * @apiParamExample request example
 * {
	"name":"jerry mouse",
    "age":"15",
    "sex":"female",
    "duty_shift":"monday,friday,sunday"
 }
 * @apiSuccess {string} _id nurse id
 * @apiSuccess {string} created_at date created
 * @apiSuccess {string} updated_at date updated
 * @apiSuccess {string} name name of a nurse
 * @apiSuccess {Number} age age of the nurse
 * @apiSuccess {string} sex gender of the nurse
 * @apiSuccess {String} duty_shift work shift schedule
 * 
 * @apiParamExample response example
 *  HTTP/1.1 200 OK
 *{
  "_id": "5903567dd87042173a931245",
  "updated_at": "2017-04-28T14:49:33.256Z",
  "created_at": "2017-04-28T14:49:33.256Z",
  "name": "jerry mouse",
  "age": 15,
  "sex": "female",
  "duty_shift": "monday,friday,sunday",
  "__v": 0
}
 */
router.post('/',nurse.createNurse);

 /**
 * @api {get} nurses/paginate get nurses record by pagination
 * @apiName getByPagination
 * @apiGroup nurses
 * 
 * @apiParamExample request example
  * localhost:8000/nurses/paginate?page=1&per_page=2
  * 

  * @apiSuccess {string} _id nurse id
 * @apiSuccess {string} created_at date created
 * @apiSuccess {string} updated_at date updated
 * @apiSuccess {string} name name of a nurse
 * @apiSuccess {Number} age age of the nurse
 * @apiSuccess {string} sex gender of the nurse
 * @apiSuccess {String} duty_shift work shift schedule
 * 
 *  @apiParamExample response example
  *  HTTP/1.1 200 OK
 * 
  * {
  "docs": [
        {
      "_id": "59035979a179a20e5e4b074b",
      "updated_at": "2017-04-28T15:02:17.541Z",
      "created_at": "2017-04-28T15:02:17.541Z",
      "name": "thom cat",
      "age": 20,
      "sex": "male",
      "duty_shift": "tuesday,saturday",
      "__v": 0
    },
    {
      "_id": "59035983a179a20e5e4b074c",
      "updated_at": "2017-04-28T15:02:27.572Z",
      "created_at": "2017-04-28T15:02:27.572Z",
      "name": "jerry mouse",
      "age": 15,
      "sex": "female",
      "duty_shift": "monday,friday,sunday",
      "__v": 0
    },
  ],
  "total": 2,
  "limit": 2,
  "page": 1,
  "pages": 1
}
  */
router.get('/paginate',nurse.getByPagination);

/**
 * @api {get} nurses/:_id get a nurse
 * @apiName getNurse
 * @apiGroup nurses
 * 
 * @apiParam {String} id nurse id
 * 
 * @apiParamExample request example
 * localhost:8000/nurses/5903567dd87042173a931245
 *
 * @apiSuccess {string} _id nurse id
 * @apiSuccess {string} created_at date created
 * @apiSuccess {string} updated_at date updated
 * @apiSuccess {string} name name of a nurse
 * @apiSuccess {Number} age age of the nurse
 * @apiSuccess {string} sex gender of the nurse
 * @apiSuccess {String} duty_shift work shift schedule
 * 
 * @apiParamExample response example
 *  HTTP/1.1 200 OK
 * 
 * {
  "_id": "5903567dd87042173a931245",
  "updated_at": "2017-04-28T14:49:33.256Z",
  "created_at": "2017-04-28T14:49:33.256Z",
  "name": "jerry mouse",
  "age": 15,
  "sex": "female",
  "duty_shift": "monday,friday,sunday",
  "__v": 0
}
 */
router.get('/:_id',nurse.getNurse);

/**
 * @api {put} nurses/:_id upate a nurse
 * @apiName updateNurse
 * @apiGroup nurses
 * 
 * @apiParam {String} id nurse id
 * 
 * @apiParamExample request example
 * localhost:8000/nurses/5903596ea179a20e5e4b0749
 * 
 * {
     "age":"30",
     "duty_shift":"wednesday,friday"
 }
 *
 *  @apiSuccess {string} _id nurse id
 * @apiSuccess {string} created_at date created
 * @apiSuccess {string} updated_at date updated
 * @apiSuccess {string} name name of a nurse
 * @apiSuccess {Number} age age of the nurse
 * @apiSuccess {string} sex gender of the nurse
 * @apiSuccess {String} duty_shift work shift schedule
 * 
 *  @apiParamExample response example
 *  HTTP/1.1 200 OK
 *
 *{
  "_id": "5903596ea179a20e5e4b0749",
  "updated_at": "2017-04-28T15:02:06.617Z",
  "created_at": "2017-04-28T15:02:06.617Z",
  "name": "thom cat",
  "age": 30,
  "sex": "male",
  "duty_shift": "wednesday,friday",
  "__v": 0
}
 * 
 */
router.put('/:_id',nurse.updateNurse);

/**@api {delete} nurses/:_id delete a nurse by id
 * @apiName removenurse
 * @apiGroup nurses
 * 
 * @apiParam {String} id nurse id
 * 
 * @apiParamExample request example
 * localhost:8000/nurses/5903596ea179a20e5e4b0749
 * 
 * {
  "_id": "5903596ea179a20e5e4b0749",
  "updated_at": "2017-04-28T15:02:06.617Z",
  "created_at": "2017-04-28T15:02:06.617Z",
  "name": "thom cat",
  "age": 30,
  "sex": "male",
  "duty_shift": "wednesday,friday",
  "__v": 0
}
 *  @apiParamExample response example
 *  HTTP/1.1 200 OK
 * {}
 */ 
router.delete('/:_id',nurse.removeNurse);

/**@api {get} nurses/ get all nurses
 * @apiName getNurses
 * @apiGroup nurses
 * 
 *  @apiParamExample request example
 * get nurses/
 * 

 * 
 * @apiSuccess {string} _id nurse id
 * @apiSuccess {string} created_at date created
 * @apiSuccess {string} updated_at date updated
 * @apiSuccess {string} name name of a nurse
 * @apiSuccess {Number} age age of the nurse
 * @apiSuccess {string} sex gender of the nurse
 * @apiSuccess {String} duty_shift work shift schedule
 *
 *  @apiParamExample response example
 *  HTTP/1.1 200 OK
 * 
 * [
{
    "_id": "59035978a179a20e5e4b074a",
    "updated_at": "2017-04-28T15:02:16.909Z",
    "created_at": "2017-04-28T15:02:16.909Z",
    "name": "thom cat",
    "age": 20,
    "sex": "male",
    "duty_shift": "tuesday,saturday",
    "__v": 0
  },
  {
    "_id": "59035979a179a20e5e4b074b",
    "updated_at": "2017-04-28T15:02:17.541Z",
    "created_at": "2017-04-28T15:02:17.541Z",
    "name": "thom cat",
    "age": 20,
    "sex": "male",
    "duty_shift": "tuesday,saturday",
    "__v": 0
  },
  {
    "_id": "59035983a179a20e5e4b074c",
    "updated_at": "2017-04-28T15:02:27.572Z",
    "created_at": "2017-04-28T15:02:27.572Z",
    "name": "jerry mouse",
    "age": 15,
    "sex": "female",
    "duty_shift": "monday,friday,sunday",
    "__v": 0
  },
  {
    "_id": "59035984a179a20e5e4b074d",
    "updated_at": "2017-04-28T15:02:28.008Z",
    "created_at": "2017-04-28T15:02:28.008Z",
    "name": "jerry mouse",
    "age": 15,
    "sex": "female",
    "duty_shift": "monday,friday,sunday",
    "__v": 0
  },
]
 */
router.get('/',nurse.getNurses);


// Export Router
module.exports = router;
