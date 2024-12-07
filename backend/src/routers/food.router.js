import {Router} from 'express';
import { sample_foods, sample_tags } from '../../../frontend/src/data.js/index.js';

const router = Router();

router.get('/', (req, res)=> {
    res.send(sample_foods);
});


export default router;