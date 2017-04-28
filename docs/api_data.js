define({ "api": [
  {
    "type": "post",
    "url": "nurses/",
    "title": "create a nurse",
    "name": "createnurse",
    "group": "nurses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a nurse</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>age of the nurse</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>gender of the nurse</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duty_shift",
            "description": "<p>work shift schedule</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request example",
          "content": "{\n\t\"name\":\"jerry mouse\",\n    \"age\":\"15\",\n    \"sex\":\"female\",\n    \"duty_shift\":\"monday,friday,sunday\"\n }",
          "type": "json"
        },
        {
          "title": "response example",
          "content": " HTTP/1.1 200 OK\n{\n  \"_id\": \"5903567dd87042173a931245\",\n  \"updated_at\": \"2017-04-28T14:49:33.256Z\",\n  \"created_at\": \"2017-04-28T14:49:33.256Z\",\n  \"name\": \"jerry mouse\",\n  \"age\": 15,\n  \"sex\": \"female\",\n  \"duty_shift\": \"monday,friday,sunday\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>nurse id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created_at",
            "description": "<p>date created</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updated_at",
            "description": "<p>date updated</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a nurse</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>age of the nurse</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>gender of the nurse</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "duty_shift",
            "description": "<p>work shift schedule</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/nurse.js",
    "groupTitle": "nurses"
  },
  {
    "type": "get",
    "url": "nurses/paginate",
    "title": "get nurses record by pagination",
    "name": "getByPagination",
    "group": "nurses",
    "parameter": {
      "examples": [
        {
          "title": "request example",
          "content": "localhost:8000/nurses/paginate?page=1&per_page=2",
          "type": "json"
        },
        {
          "title": "response example",
          "content": " HTTP/1.1 200 OK\n\n{\n  \"docs\": [\n        {\n      \"_id\": \"59035979a179a20e5e4b074b\",\n      \"updated_at\": \"2017-04-28T15:02:17.541Z\",\n      \"created_at\": \"2017-04-28T15:02:17.541Z\",\n      \"name\": \"thom cat\",\n      \"age\": 20,\n      \"sex\": \"male\",\n      \"duty_shift\": \"tuesday,saturday\",\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"59035983a179a20e5e4b074c\",\n      \"updated_at\": \"2017-04-28T15:02:27.572Z\",\n      \"created_at\": \"2017-04-28T15:02:27.572Z\",\n      \"name\": \"jerry mouse\",\n      \"age\": 15,\n      \"sex\": \"female\",\n      \"duty_shift\": \"monday,friday,sunday\",\n      \"__v\": 0\n    },\n  ],\n  \"total\": 2,\n  \"limit\": 2,\n  \"page\": 1,\n  \"pages\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>nurse id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created_at",
            "description": "<p>date created</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updated_at",
            "description": "<p>date updated</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a nurse</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>age of the nurse</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>gender of the nurse</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "duty_shift",
            "description": "<p>work shift schedule</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/nurse.js",
    "groupTitle": "nurses"
  },
  {
    "type": "get",
    "url": "nurses/:_id",
    "title": "get a nurse",
    "name": "getNurse",
    "group": "nurses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>nurse id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request example",
          "content": "localhost:8000/nurses/5903567dd87042173a931245",
          "type": "json"
        },
        {
          "title": "response example",
          "content": " HTTP/1.1 200 OK\n\n{\n  \"_id\": \"5903567dd87042173a931245\",\n  \"updated_at\": \"2017-04-28T14:49:33.256Z\",\n  \"created_at\": \"2017-04-28T14:49:33.256Z\",\n  \"name\": \"jerry mouse\",\n  \"age\": 15,\n  \"sex\": \"female\",\n  \"duty_shift\": \"monday,friday,sunday\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>nurse id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created_at",
            "description": "<p>date created</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updated_at",
            "description": "<p>date updated</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a nurse</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>age of the nurse</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>gender of the nurse</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "duty_shift",
            "description": "<p>work shift schedule</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/nurse.js",
    "groupTitle": "nurses"
  },
  {
    "type": "get",
    "url": "nurses/",
    "title": "get all nurses",
    "name": "getNurses",
    "group": "nurses",
    "parameter": {
      "examples": [
        {
          "title": "request example",
          "content": "get nurses/",
          "type": "json"
        },
        {
          "title": "response example",
          "content": " HTTP/1.1 200 OK\n\n[\n{\n    \"_id\": \"59035978a179a20e5e4b074a\",\n    \"updated_at\": \"2017-04-28T15:02:16.909Z\",\n    \"created_at\": \"2017-04-28T15:02:16.909Z\",\n    \"name\": \"thom cat\",\n    \"age\": 20,\n    \"sex\": \"male\",\n    \"duty_shift\": \"tuesday,saturday\",\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"59035979a179a20e5e4b074b\",\n    \"updated_at\": \"2017-04-28T15:02:17.541Z\",\n    \"created_at\": \"2017-04-28T15:02:17.541Z\",\n    \"name\": \"thom cat\",\n    \"age\": 20,\n    \"sex\": \"male\",\n    \"duty_shift\": \"tuesday,saturday\",\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"59035983a179a20e5e4b074c\",\n    \"updated_at\": \"2017-04-28T15:02:27.572Z\",\n    \"created_at\": \"2017-04-28T15:02:27.572Z\",\n    \"name\": \"jerry mouse\",\n    \"age\": 15,\n    \"sex\": \"female\",\n    \"duty_shift\": \"monday,friday,sunday\",\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"59035984a179a20e5e4b074d\",\n    \"updated_at\": \"2017-04-28T15:02:28.008Z\",\n    \"created_at\": \"2017-04-28T15:02:28.008Z\",\n    \"name\": \"jerry mouse\",\n    \"age\": 15,\n    \"sex\": \"female\",\n    \"duty_shift\": \"monday,friday,sunday\",\n    \"__v\": 0\n  },\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>nurse id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created_at",
            "description": "<p>date created</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updated_at",
            "description": "<p>date updated</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a nurse</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>age of the nurse</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>gender of the nurse</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "duty_shift",
            "description": "<p>work shift schedule</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/nurse.js",
    "groupTitle": "nurses"
  },
  {
    "type": "delete",
    "url": "nurses/:_id",
    "title": "delete a nurse by id",
    "name": "removenurse",
    "group": "nurses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>nurse id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request example",
          "content": "localhost:8000/nurses/5903596ea179a20e5e4b0749\n\n{\n  \"_id\": \"5903596ea179a20e5e4b0749\",\n  \"updated_at\": \"2017-04-28T15:02:06.617Z\",\n  \"created_at\": \"2017-04-28T15:02:06.617Z\",\n  \"name\": \"thom cat\",\n  \"age\": 30,\n  \"sex\": \"male\",\n  \"duty_shift\": \"wednesday,friday\",\n  \"__v\": 0\n}",
          "type": "json"
        },
        {
          "title": "response example",
          "content": " HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/nurse.js",
    "groupTitle": "nurses"
  },
  {
    "type": "put",
    "url": "nurses/:_id",
    "title": "upate a nurse",
    "name": "updateNurse",
    "group": "nurses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>nurse id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request example",
          "content": "localhost:8000/nurses/5903596ea179a20e5e4b0749\n\n{\n     \"age\":\"30\",\n     \"duty_shift\":\"wednesday,friday\"\n }",
          "type": "json"
        },
        {
          "title": "response example",
          "content": " HTTP/1.1 200 OK\n\n{\n  \"_id\": \"5903596ea179a20e5e4b0749\",\n  \"updated_at\": \"2017-04-28T15:02:06.617Z\",\n  \"created_at\": \"2017-04-28T15:02:06.617Z\",\n  \"name\": \"thom cat\",\n  \"age\": 30,\n  \"sex\": \"male\",\n  \"duty_shift\": \"wednesday,friday\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>nurse id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created_at",
            "description": "<p>date created</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updated_at",
            "description": "<p>date updated</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a nurse</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>age of the nurse</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>gender of the nurse</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "duty_shift",
            "description": "<p>work shift schedule</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/nurse.js",
    "groupTitle": "nurses"
  },
  {
    "type": "post",
    "url": "patients/",
    "title": "create a patient",
    "name": "createPatient",
    "group": "patients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a patient</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>age of a patient</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>gender of the patient</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "symptom",
            "description": "<p>type of illness</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request example:",
          "content": "{\n\t\"name\":\"jane doe\",\n    \"age\":\"20\",\n    \"sex\":\"female\",\n    \"symptom\":\"fever\"\n }",
          "type": "json"
        },
        {
          "title": "response example:",
          "content": " HTTP/1.1 200 OK\n{\n  \"_id\": \"5903512e05e74e14289560c8\",\n  \"updated_at\": \"2017-04-28T14:26:55.002Z\",\n  \"created_at\": \"2017-04-28T14:26:55.002Z\",\n  \"name\": \"jane doe\",\n  \"age\": 20,\n  \"sex\": \"female\",\n  \"symptom\": \"fever\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>patient id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created_at",
            "description": "<p>date created</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updated_at",
            "description": "<p>date updated</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>age of a patient</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>gender of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "symptom",
            "description": "<p>type of illness</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/patient.js",
    "groupTitle": "patients"
  },
  {
    "type": "get",
    "url": "patients/paginate",
    "title": "get patient record by pagination",
    "name": "getByPagination",
    "group": "patients",
    "parameter": {
      "examples": [
        {
          "title": "request example:",
          "content": "localhost:8000/patients/paginate?page=1&per_page=3",
          "type": "json"
        },
        {
          "title": "response example:",
          "content": " HTTP/1.1 200 OK\n{\n  \"docs\": [\n    {\n      \"_id\": \"59034fa088d4a013725c775f\",\n      \"updated_at\": \"2017-04-28T14:20:16.936Z\",\n      \"created_at\": \"2017-04-28T14:20:16.936Z\",\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"59034fd888d4a013725c7760\",\n      \"updated_at\": \"2017-04-28T14:21:12.518Z\",\n      \"created_at\": \"2017-04-28T14:21:12.518Z\",\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"5903501388d4a013725c7761\",\n      \"updated_at\": \"2017-04-28T14:22:11.333Z\",\n      \"created_at\": \"2017-04-28T14:22:11.333Z\",\n      \"__v\": 0\n    }\n  ],\n  \"total\": 9,\n  \"limit\": 3,\n  \"page\": 1,\n  \"pages\": 3\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/patient.js",
    "groupTitle": "patients"
  },
  {
    "type": "get",
    "url": "patients/:_id",
    "title": "get a patient",
    "name": "getPatient",
    "group": "patients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>patient id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request example:",
          "content": "localhost:8000/patients/590351119f1a481401f5bd60",
          "type": "json"
        },
        {
          "title": "response example:",
          "content": " HTTP/1.1 200 OK\n{\n  \"_id\": \"590351119f1a481401f5bd60\",\n  \"updated_at\": \"2017-04-28T14:26:25.233Z\",\n  \"created_at\": \"2017-04-28T14:26:25.233Z\",\n  \"name\": \"jane doe\",\n  \"age\": 20,\n  \"sex\": \"female\",\n  \"symptom\": \"fever\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>patient id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created_at",
            "description": "<p>date created</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updated_at",
            "description": "<p>date updated</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>age of a patient</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>gender of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "symptom",
            "description": "<p>type of illness</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/patient.js",
    "groupTitle": "patients"
  },
  {
    "type": "get",
    "url": "patients/",
    "title": "get all patients",
    "name": "getPatients",
    "group": "patients",
    "parameter": {
      "examples": [
        {
          "title": "request example:",
          "content": "localhost:8000/patients/",
          "type": "json"
        },
        {
          "title": "response example:",
          "content": " HTTP/1.1 200 OK\n[\n    {\n    \"_id\": \"590351119f1a481401f5bd60\",\n    \"updated_at\": \"2017-04-28T14:26:25.233Z\",\n    \"created_at\": \"2017-04-28T14:26:25.233Z\",\n    \"name\": \"jane doe\",\n    \"age\": 20,\n    \"sex\": \"female\",\n    \"symptom\": \"fever\",\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"5903512e05e74e14289560c8\",\n    \"updated_at\": \"2017-04-28T14:26:55.002Z\",\n    \"created_at\": \"2017-04-28T14:26:55.002Z\",\n    \"name\": \"jane doe\",\n    \"age\": 20,\n    \"sex\": \"female\",\n    \"symptom\": \"fever\",\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"59035269be1d7a14df673da5\",\n    \"updated_at\": \"2017-04-28T14:32:09.945Z\",\n    \"created_at\": \"2017-04-28T14:32:09.945Z\",\n    \"name\": \"sam doe\",\n    \"age\": 15,\n    \"sex\": \"male\",\n    \"symptom\": \"headache\",\n    \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>patient id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created_at",
            "description": "<p>date created</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updated_at",
            "description": "<p>date updated</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>age of a patient</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>gender of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "symptom",
            "description": "<p>type of illness</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/patient.js",
    "groupTitle": "patients"
  },
  {
    "type": "delete",
    "url": "patients/:_id",
    "title": "delete a patient",
    "name": "removepatient",
    "group": "patients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>patient id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request example:",
          "content": "localhost:8000/patients/590351119f1a481401f5bd60\n\n{\n  \"_id\": \"590351119f1a481401f5bd60\",\n  \"updated_at\": \"2017-04-28T14:26:25.233Z\",\n  \"created_at\": \"2017-04-28T14:26:25.233Z\",\n  \"name\": \"jane doe\",\n  \"age\": 20,\n  \"sex\": \"female\",\n  \"symptom\": \"fever\",\n  \"__v\": 0\n}",
          "type": "json"
        },
        {
          "title": "response example:",
          "content": " HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/patient.js",
    "groupTitle": "patients"
  },
  {
    "type": "put",
    "url": "patients/:_id",
    "title": "update a patient",
    "name": "updatePatient",
    "group": "patients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>patient id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "symptom",
            "description": "<p>symptom of the illness</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request example:",
          "content": "localhost:8000/patients/590353de22b4d5159ab89e61 \n{\n     \"symptom\":\"cough and diarreha\"\n }",
          "type": "json"
        },
        {
          "title": "response example:",
          "content": " HTTP/1.1 200 OK\n{\n  \"_id\": \"590353de22b4d5159ab89e61\",\n  \"updated_at\": \"2017-04-28T14:41:03.719Z\",\n  \"created_at\": \"2017-04-28T14:38:22.895Z\",\n  \"name\": \"sam doe\",\n  \"age\": 15,\n  \"sex\": \"male\",\n  \"symptom\": \"cough and diarreha\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>patient id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created_at",
            "description": "<p>date created</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updated_at",
            "description": "<p>date updated</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a patient</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>age of a patient</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>gender of the patient</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "symptom",
            "description": "<p>type of illness</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/patient.js",
    "groupTitle": "patients"
  },
  {
    "type": "post",
    "url": "specimens/",
    "title": "create a specimen",
    "name": "createSpecimen",
    "group": "specimens",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the specimen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request example",
          "content": "{\n\t\"name\":\"urine sample\"\n    }",
          "type": "json"
        },
        {
          "title": "response example",
          "content": " HTTP/1.1 200 OK\n{\n  \"_id\": \"59035dfe8c34bf1072fe096f\",\n  \"updated_at\": \"2017-04-28T15:21:34.649Z\",\n  \"created_at\": \"2017-04-28T15:21:34.649Z\",\n  \"name\": \"urine sample\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>specimen id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created_at",
            "description": "<p>date created</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updated_at",
            "description": "<p>date updated</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a specimen</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/specimen.js",
    "groupTitle": "specimens"
  },
  {
    "type": "get",
    "url": "specimens/paginate",
    "title": "paginate specimen record",
    "name": "getByPagination",
    "group": "specimens",
    "parameter": {
      "examples": [
        {
          "title": "request example",
          "content": "localhost:8000/specimens/paginate?page=1&per_page=2",
          "type": "json"
        },
        {
          "title": "response example",
          "content": " HTTP/1.1 200 OK\n\n{\n  \"docs\": [\n    {\n      \"_id\": \"59035dfe8c34bf1072fe096f\",\n      \"updated_at\": \"2017-04-28T15:21:34.649Z\",\n      \"created_at\": \"2017-04-28T15:21:34.649Z\",\n      \"name\": \"urine sample\",\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"59035e7a3857961092f1861c\",\n      \"updated_at\": \"2017-04-28T15:23:38.949Z\",\n      \"created_at\": \"2017-04-28T15:23:38.949Z\",\n      \"name\": \"blood sample\",\n      \"__v\": 0\n    }\n  ],\n  \"total\": 3,\n  \"limit\": 2,\n  \"page\": 1,\n  \"pages\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>specimen id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created_at",
            "description": "<p>date created</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updated_at",
            "description": "<p>date updated</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a specimen</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/specimen.js",
    "groupTitle": "specimens"
  },
  {
    "type": "get",
    "url": "specimens/:_id",
    "title": "get a specimen",
    "name": "getSpecimen",
    "group": "specimens",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>specimen id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request example",
          "content": "localhost:8000/specimens/59035e7a3857961092f1861c",
          "type": "json"
        },
        {
          "title": "response example",
          "content": " HTTP/1.1 200 OK\n{\n  \"_id\": \"59035e7a3857961092f1861c\",\n  \"updated_at\": \"2017-04-28T15:23:38.949Z\",\n  \"created_at\": \"2017-04-28T15:23:38.949Z\",\n  \"name\": \"blood sample\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>specimen id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created_at",
            "description": "<p>date created</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updated_at",
            "description": "<p>date updated</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a specimen</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/specimen.js",
    "groupTitle": "specimens"
  },
  {
    "type": "get",
    "url": "specimens/",
    "title": "get all specimen records",
    "name": "getSpecimens",
    "group": "specimens",
    "parameter": {
      "examples": [
        {
          "title": "request example",
          "content": "localhost:8000/specimens/",
          "type": "json"
        },
        {
          "title": "response example",
          "content": " HTTP/1.1 200 O\n[\n  {\n    \"_id\": \"59035dfe8c34bf1072fe096f\",\n    \"updated_at\": \"2017-04-28T15:21:34.649Z\",\n    \"created_at\": \"2017-04-28T15:21:34.649Z\",\n    \"name\": \"urine sample\",\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"59035e7a3857961092f1861c\",\n    \"updated_at\": \"2017-04-28T15:23:38.949Z\",\n    \"created_at\": \"2017-04-28T15:23:38.949Z\",\n    \"name\": \"blood sample\",\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"59035e9c3857961092f1861d\",\n    \"updated_at\": \"2017-04-28T15:24:12.273Z\",\n    \"created_at\": \"2017-04-28T15:24:12.273Z\",\n    \"name\": \"general sample\",\n    \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/specimen.js",
    "groupTitle": "specimens"
  },
  {
    "type": "delete",
    "url": "specimens/:_id",
    "title": "delete a specimen record",
    "name": "removeSpecimen",
    "group": "specimens",
    "parameter": {
      "examples": [
        {
          "title": "request example",
          "content": "localhost:8000/specimens/59035e9c3857961092f1861d\n\n{\n  \"_id\": \"59035e9c3857961092f1861d\",\n  \"updated_at\": \"2017-04-28T15:30:46.214Z\",\n  \"created_at\": \"2017-04-28T15:24:12.273Z\",\n\t\"name\":\"unknown sample\",\n  \"__v\": 0\n}",
          "type": "json"
        },
        {
          "title": "response example",
          "content": " HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/specimen.js",
    "groupTitle": "specimens"
  },
  {
    "type": "put",
    "url": "specimens/:_id",
    "title": "update a specimen",
    "name": "updateSpecimen",
    "group": "specimens",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>specimen id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the specimen</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request example",
          "content": "localhost:8000/specimens/59035e9c3857961092f1861d\n {\n\t\"name\":\"unknown sample\"\n   \n }",
          "type": "json"
        },
        {
          "title": "response example",
          "content": " HTTP/1.1 200 OK\n{\n  \"_id\": \"59035e9c3857961092f1861d\",\n  \"updated_at\": \"2017-04-28T15:30:46.214Z\",\n  \"created_at\": \"2017-04-28T15:24:12.273Z\",\n\t\"name\":\"unknown sample\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>specimen id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created_at",
            "description": "<p>date created</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updated_at",
            "description": "<p>date updated</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a specimen</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/specimen.js",
    "groupTitle": "specimens"
  }
] });
