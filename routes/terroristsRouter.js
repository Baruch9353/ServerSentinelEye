import express from 'express';
import { 
    getAllTerroristsHandler,
    getTerroristByIdHandler,
    addTerroristHandler,
    updateTerroristHandler,
    deleteTerroristHandler
} from '../controllers/terroristController.js';

const router = express.Router();

router.get('/getAllTerrorists', getAllTerroristsHandler);
router.get('/getTerroristById', getTerroristByIdHandler);
router.post('/addTerrorist', addTerroristHandler);
router.put('/updateTerrorist', updateTerroristHandler);
router.delete('/deleteTerrorist', deleteTerroristHandler);

export default router;
