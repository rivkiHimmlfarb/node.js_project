import express from 'express';
import {getData,addData,getCourser,get1course,getStudents,updateData,deleteData} from './controller.js';
const router = express.Router();

router.get('/', getData); 
router.get('/courses', getCourser);
router.get('/students', getStudents);
router.get('/courses/:id', get1course);
router.post('/courses', addData);
router.put('/courses/:id', updateData);
router.delete('/courses/:id', deleteData);

export default router;