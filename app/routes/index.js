import { Router } from 'express';
import {
  getAll,
  create,
  toogleReadStatus,
  remove,
} from '../controllers/index.js';

const router = Router();
router.post('/', create);
router.get('/', getAll);
router.post('/toggle', toogleReadStatus);
router.delete('/', remove);

export default router;
