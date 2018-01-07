import express from 'express';

import basicAuth from '../middlewares/basicAuth';
import adminAuth from '../middlewares/adminAuth';

import publicRoutes from './public';
import admin from './admin';

const router = new express.Router();

// check basic auth on every route
router.use(basicAuth);

// public routes
router.use('/public', publicRoutes);

// check logged in user
router.use(adminAuth);

// admin routes
router.use('/admin', admin);

export default router;
