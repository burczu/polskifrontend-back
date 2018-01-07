import express from 'express';

import basicAuth from '../middlewares/basicAuth';
import adminAuth from '../middlewares/adminAuth';

import publicRoutes from './public';
import restrictedRoutes from './restricted';
import miscRoutes from './misc';
import admin from './admin';

const router = new express.Router();

// check basic auth on every route
router.use(basicAuth);

// public routes
router.use('/public', publicRoutes);
router.use('/misc', miscRoutes);

// check logged in user
router.use(adminAuth);

// admin routes
router.use('/admin', admin); // TODO: this should be removed when restricted area will be done
router.use('/restricted', restrictedRoutes);

export default router;
