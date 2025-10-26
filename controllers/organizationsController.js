import {
    getAllOrganizations,
    getOrganizationById,
    addOrganization,
    updateOrganization,
    deleteOrganization
} from '../DAL/organizationsDal.js';

export async function getAllOrganizationsHandler(req, res) {
    const organizations = await getAllOrganizations();
    res.json(organizations);
}

export async function getOrganizationByIdHandler(req, res) {
    const { id } = req.body;
    const organization = await getOrganizationById(id);
    if (!organization) {
        return res.status(404).json({ message: 'Organization not found' });
    }
    res.json(organization);
}

export async function addOrganizationHandler(req, res) {
    const newOrganization = req.body;
    const createdOrganization = await addOrganization(newOrganization);
    res.status(201).json(createdOrganization);
}

export async function updateOrganizationHandler(req, res) {
    const { id } = req.body;
    const updateData = req.body;
    const result = await updateOrganization(id, updateData);
    if (result === 'Organization not found') {
        return res.status(404).json({ message: result });
    }
    res.json(result);
}

export async function deleteOrganizationHandler(req, res) {
    const { id } = req.body;
    const result = await deleteOrganization(id);
    if (result === 'Organization not found') {
        return res.status(404).json({ message: result });
    }
    res.json({ message: result });
}
