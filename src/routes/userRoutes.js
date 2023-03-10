
import express from 'express'

import { listAllUsers, showUser, createUser, deleteUser, deleteIdUser, updateUser }
    from '../controllers/userController.js'

const router = express.Router();

router.get('/', listAllUsers); //select
router.get('/:id', showUser); //select listas pelo id na url
router.post('/', createUser); //insert
router.delete('/', deleteUser); //delete
router.delete('/:id', deleteIdUser); //delete pelo id na url
router.put('/', updateUser); //update


export default router








