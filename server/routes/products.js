import express from 'express';
const router = express.Router();

import {getSearchProducts} from '../controllers/ProductSearchController.js'

//router.post('/', createUser)
router.get('/', getSearchProducts )
export default router