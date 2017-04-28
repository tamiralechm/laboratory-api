// Load Module Dependencies
var express = require('express');
var patient = require('../controllers/patient');

// Create a Router
var router = express.Router();

/**
 * @api {post} patients/ create a patient
 * @apiName createPatient
 * @apiGroup patients
 * 
* @apiParam {string} name name of a patient
 * @apiParam {Number} age age of a patient
 * @apiParam {string} sex gender of the patient
 * @apiParam {string} symptom type of illness
 * 
 * @apiParamExample request example:
 * {
	"name":"jane doe",
    "age":"20",
    "sex":"female",
    "symptom":"fever"
 }

 * @apiSuccess {string} _id patient id
 * @apiSuccess {string} created_at date created
 * @apiSuccess {string} updated_at date updated
 * @apiSuccess {string} name name of a patient
 * @apiSuccess {Number} age age of a patient
 * @apiSuccess {string} sex gender of the patient
 * @apiSuccess {string} symptom type of illness
 * 
*  @apiParamExample response example:
*  HTTP/1.1 200 OK
 * {
  "_id": "5903512e05e74e14289560c8",
  "updated_at": "2017-04-28T14:26:55.002Z",
  "created_at": "2017-04-28T14:26:55.002Z",
  "name": "jane doe",
  "age": 20,
  "sex": "female",
  "symptom": "fever",
  "__v": 0
}
 *  
 */
router.post('/', patient.createPatient);

/**
 * @api {get} patients/paginate get patient record by pagination
 * @apiName getByPagination
 * @apiGroup patients
 * 
 *  @apiParamExample request example:
 * localhost:8000/patients/paginate?page=1&per_page=3
 * 
 *  @apiParamExample response example:
*  HTTP/1.1 200 OK
 * {
  "docs": [
    {
      "_id": "59034fa088d4a013725c775f",
      "updated_at": "2017-04-28T14:20:16.936Z",
      "created_at": "2017-04-28T14:20:16.936Z",
      "__v": 0
    },
    {
      "_id": "59034fd888d4a013725c7760",
      "updated_at": "2017-04-28T14:21:12.518Z",
      "created_at": "2017-04-28T14:21:12.518Z",
      "__v": 0
    },
    {
      "_id": "5903501388d4a013725c7761",
      "updated_at": "2017-04-28T14:22:11.333Z",
      "created_at": "2017-04-28T14:22:11.333Z",
      "__v": 0
    }
  ],
  "total": 9,
  "limit": 3,
  "page": 1,
  "pages": 3
}
 */
router.get('/paginate',patient.getByPagination);

/**
 * @api {get} patients/:_id get a patient
 * @apiName getPatient
 * @apiGroup patients
 * 
 * @apiParam {String} id patient id
 * 
 * @apiParamExample request example:
 * localhost:8000/patients/590351119f1a481401f5bd60
 * 
* @apiSuccess {string} _id patient id
 * @apiSuccess {string} created_at date created
 * @apiSuccess {string} updated_at date updated
 * @apiSuccess {string} name name of a patient
 * @apiSuccess {Number} age age of a patient
 * @apiSuccess {string} sex gender of the patient
 * @apiSuccess {string} symptom type of illness
 * 
 * @apiParamExample response example:
*  HTTP/1.1 200 OK
 * {
  "_id": "590351119f1a481401f5bd60",
  "updated_at": "2017-04-28T14:26:25.233Z",
  "created_at": "2017-04-28T14:26:25.233Z",
  "name": "jane doe",
  "age": 20,
  "sex": "female",
  "symptom": "fever",
  "__v": 0
}
 * 
*/
router.get('/:_id', patient.getPatient);

/**
 * @api {put} patients/:_id update a patient
 * @apiName updatePatient
 * @apiGroup patients
 * 
 * @apiParam {String} id patient id
 * @apiParam {String} symptom symptom of the illness
   * 
 * @apiParamExample request example:
 *localhost:8000/patients/590353de22b4d5159ab89e61 
 * {
     "symptom":"cough and diarreha"
 }
 * 
* @apiSuccess {string} _id patient id
 * @apiSuccess {string} created_at date created
 * @apiSuccess {string} updated_at date updated
 * @apiSuccess {string} name name of a patient
 * @apiSuccess {Number} age age of a patient
 * @apiSuccess {string} sex gender of the patient
 * @apiSuccess {string} symptom type of illness
 * 
 * @apiParamExample response example:
*  HTTP/1.1 200 OK
{
  "_id": "590353de22b4d5159ab89e61",
  "updated_at": "2017-04-28T14:41:03.719Z",
  "created_at": "2017-04-28T14:38:22.895Z",
  "name": "sam doe",
  "age": 15,
  "sex": "male",
  "symptom": "cough and diarreha",
  "__v": 0
}
 */
router.put('/:_id', patient.updatePatient);


/**
 * @api {delete} patients/:_id delete a patient
 * @apiName removepatient
 * @apiGroup patients
 * 
 * @apiParam {String} id patient id
 * 
 * @apiParamExample request example:
 * localhost:8000/patients/590351119f1a481401f5bd60
 * 
 *{
  "_id": "590351119f1a481401f5bd60",
  "updated_at": "2017-04-28T14:26:25.233Z",
  "created_at": "2017-04-28T14:26:25.233Z",
  "name": "jane doe",
  "age": 20,
  "sex": "female",
  "symptom": "fever",
  "__v": 0
}
 *@apiParamExample response example:
*  HTTP/1.1 200 OK
 * {}  
 */
router.delete('/:_id', patient.removePatient);

/**
/**
 * @api {get} patients/ get all patients
 * @apiName getPatients
 * @apiGroup patients
 * 
 * @apiParamExample request example:
 * localhost:8000/patients/
 * 
 * * @apiSuccess {string} _id patient id
 * @apiSuccess {string} created_at date created
 * @apiSuccess {string} updated_at date updated
 * @apiSuccess {string} name name of a patient
 * @apiSuccess {Number} age age of a patient
 * @apiSuccess {string} sex gender of the patient
 * @apiSuccess {string} symptom type of illness
 * 
 * @apiParamExample response example:
*  HTTP/1.1 200 OK
 * [
    {
    "_id": "590351119f1a481401f5bd60",
    "updated_at": "2017-04-28T14:26:25.233Z",
    "created_at": "2017-04-28T14:26:25.233Z",
    "name": "jane doe",
    "age": 20,
    "sex": "female",
    "symptom": "fever",
    "__v": 0
  },
  {
    "_id": "5903512e05e74e14289560c8",
    "updated_at": "2017-04-28T14:26:55.002Z",
    "created_at": "2017-04-28T14:26:55.002Z",
    "name": "jane doe",
    "age": 20,
    "sex": "female",
    "symptom": "fever",
    "__v": 0
  },
  {
    "_id": "59035269be1d7a14df673da5",
    "updated_at": "2017-04-28T14:32:09.945Z",
    "created_at": "2017-04-28T14:32:09.945Z",
    "name": "sam doe",
    "age": 15,
    "sex": "male",
    "symptom": "headache",
    "__v": 0
  }
]
 * 
 */
router.get('/', patient.getPatients);


// Export Router
module.exports = router;
