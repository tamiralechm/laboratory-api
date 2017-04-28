// Load Module Dependencies
var express = require('express');
var specimen = require('../controllers/specimen');

// Create a Router
var router = express.Router();

/**
 * @api {post} specimens/ create a specimen
 * @apiName createSpecimen
 * @apiGroup specimens
 * 
 * @apiParam {string} name name of the specimen
 * 
 * @apiParamExample request example
 * {
	"name":"urine sample"
    }

 * @apiSuccess {string} _id specimen id
 * @apiSuccess {string} created_at date created
 * @apiSuccess {string} updated_at date updated
 * @apiSuccess {string} name name of a specimen
  * 
*  @apiParamExample response example
*  HTTP/1.1 200 OK
{
  "_id": "59035dfe8c34bf1072fe096f",
  "updated_at": "2017-04-28T15:21:34.649Z",
  "created_at": "2017-04-28T15:21:34.649Z",
  "name": "urine sample",
  "__v": 0
}
 */
router.post('/', specimen.createSpecimen);

/**
 * @api {get} specimens/paginate  paginate specimen record
 * @apiName getByPagination
 * @apiGroup specimens
 * 
 *  @apiParamExample request example
 * localhost:8000/specimens/paginate?page=1&per_page=2
 * 
 * @apiSuccess {string} _id specimen id
 * @apiSuccess {string} created_at date created
 * @apiSuccess {string} updated_at date updated
 * @apiSuccess {string} name name of a specimen
 * 
 * @apiParamExample response example
*  HTTP/1.1 200 OK
*
 * {
  "docs": [
    {
      "_id": "59035dfe8c34bf1072fe096f",
      "updated_at": "2017-04-28T15:21:34.649Z",
      "created_at": "2017-04-28T15:21:34.649Z",
      "name": "urine sample",
      "__v": 0
    },
    {
      "_id": "59035e7a3857961092f1861c",
      "updated_at": "2017-04-28T15:23:38.949Z",
      "created_at": "2017-04-28T15:23:38.949Z",
      "name": "blood sample",
      "__v": 0
    }
  ],
  "total": 3,
  "limit": 2,
  "page": 1,
  "pages": 2
}
 */ 
router.get('/paginate',specimen.getByPagination);
/**
 * @api {get} specimens/:_id get a specimen
 * @apiName getSpecimen
 * @apiGroup specimens
 * 
 * @apiParam {String} id specimen id
 * 
 * @apiParamExample request example
 * localhost:8000/specimens/59035e7a3857961092f1861c
 * 
 * @apiSuccess {string} _id specimen id
 * @apiSuccess {string} created_at date created
 * @apiSuccess {string} updated_at date updated
 * @apiSuccess {string} name name of a specimen
 * 
 * @apiParamExample response example
*  HTTP/1.1 200 OK
{
  "_id": "59035e7a3857961092f1861c",
  "updated_at": "2017-04-28T15:23:38.949Z",
  "created_at": "2017-04-28T15:23:38.949Z",
  "name": "blood sample",
  "__v": 0
}
 */ 
router.get('/:_id', specimen.getSpecimen);

/**@api {put} specimens/:_id update a specimen
 * @apiName updateSpecimen
 * @apiGroup specimens
 * 
 *  @apiParam {String} id specimen id
 * @apiParam {String} name name of the specimen
 * 
 *  @apiParamExample request example
 * localhost:8000/specimens/59035e9c3857961092f1861d
 {
	"name":"unknown sample"
   
 }
 * @apiSuccess {string} _id specimen id
 * @apiSuccess {string} created_at date created
 * @apiSuccess {string} updated_at date updated
 * @apiSuccess {string} name name of a specimen
 * 
 *  @apiParamExample response example
 *  HTTP/1.1 200 OK
 * {
  "_id": "59035e9c3857961092f1861d",
  "updated_at": "2017-04-28T15:30:46.214Z",
  "created_at": "2017-04-28T15:24:12.273Z",
	"name":"unknown sample",
  "__v": 0
}
 */
router.put('/:_id', specimen.updateSpecimen);

/**@api {delete} specimens/:_id delete a specimen record
 * @apiName removeSpecimen
 * @apiGroup specimens
 * 
 * @apiParamExample request example
 * localhost:8000/specimens/59035e9c3857961092f1861d
 * 
 *{
  "_id": "59035e9c3857961092f1861d",
  "updated_at": "2017-04-28T15:30:46.214Z",
  "created_at": "2017-04-28T15:24:12.273Z",
	"name":"unknown sample",
  "__v": 0
}

*  @apiParamExample response example
 *  HTTP/1.1 200 OK
 * {}
 */
router.delete('/:_id', specimen.removeSpecimen);

/**
 * @api {get} specimens/ get all specimen records
 * @apiName getSpecimens
 * @apiGroup specimens
 * 
 * @apiParamExample request example
 * localhost:8000/specimens/
 * 
 * @apiParamExample response example
*  HTTP/1.1 200 O
 *[
  {
    "_id": "59035dfe8c34bf1072fe096f",
    "updated_at": "2017-04-28T15:21:34.649Z",
    "created_at": "2017-04-28T15:21:34.649Z",
    "name": "urine sample",
    "__v": 0
  },
  {
    "_id": "59035e7a3857961092f1861c",
    "updated_at": "2017-04-28T15:23:38.949Z",
    "created_at": "2017-04-28T15:23:38.949Z",
    "name": "blood sample",
    "__v": 0
  },
  {
    "_id": "59035e9c3857961092f1861d",
    "updated_at": "2017-04-28T15:24:12.273Z",
    "created_at": "2017-04-28T15:24:12.273Z",
    "name": "general sample",
    "__v": 0
  }
]
 */
router.get('/', specimen.getSpecimens);


// Export Router
module.exports = router;
