//const express = require('express');
//export default
import express from 'express'

//export
import { listAllCourses, showCourse, createCourse, deleteCourse, deleteIdCourse, updateCourse }
 from'../controllers/courseController.js'
 
 const router = express.Router();

//extraiu as funções de dentro do objeto, cada função virou uma variável
//const { listAllCourses, createCourse, deleteCourse, updateCourse } = courseController

router.get('/', listAllCourses); //select
router.get('/:id', showCourse); //select listas pelo id na url
router.post('/', createCourse); //insert
router.delete('/', deleteCourse); //delete
router.delete('/:id', deleteIdCourse); //delete pelo id na url
router.put('/', updateCourse); //update


export default router








