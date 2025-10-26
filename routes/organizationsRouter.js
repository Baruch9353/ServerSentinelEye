import express from 'express'
import {
    getAllOrganizationsHandler,
    getOrganizationByIdHandler,
    addOrganizationHandler,
    updateOrganizationHandler,
    deleteOrganizationHandler
} from '../controllers/organizationsController.js'

const router = express.Router()

router.get('/getAllOrganizations', getAllOrganizationsHandler);
router.get('/getOrganizationById', getOrganizationByIdHandler);
router.post('/addOrganization', addOrganizationHandler);
router.put('/updateOrganization', updateOrganizationHandler);
router.delete('/deleteOrganization', deleteOrganizationHandler);

export default router

