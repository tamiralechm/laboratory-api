//load module dependencies
var express=require('express');
var specimenRouter=require('./specimen');
var patientRouter=require('./patient');
var nurseRouter=require('./nurse');

module.exports=function initRouter(app){

    //food 
    app.use('/patients',patientRouter);

    //drink
    app.use('/nurses',nurseRouter);

    //menu
    app.use('/specimens',specimenRouter);
};
