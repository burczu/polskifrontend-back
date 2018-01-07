import express from 'express';

import basicAuth from '../middlewares/basicAuth';
import adminAuth from '../middlewares/adminAuth';

import publicRoutes from './public';
import miscRoutes from './misc';
import restrictedRoutes from './restricted';

const router = new express.Router();

// check basic auth on every route
router.use(basicAuth);

// public routes
router.use('/public', publicRoutes);
router.use('/misc', miscRoutes);

// restricted area
router.use(adminAuth); // check auth headers
router.use('/restricted', restrictedRoutes);

export default router;
