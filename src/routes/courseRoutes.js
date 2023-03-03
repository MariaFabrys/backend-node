//const express = require('express');
import express from 'express'

 import { listAllCourses, createCourse, deleteCourse, updateCourse }
 from'../controllers/courseController.js'
 
 const router = express.Router();

//extraiu as funções de dentro do objeto, cada função virou uma variável
//const { listAllCourses, createCourse, deleteCourse, updateCourse } = courseController

router.get('/', listAllCourses); //select
router.post('/', createCourse); //insert
router.delete('/', deleteCourse); //delete
router.put('/', updateCourse); //update

export default router








