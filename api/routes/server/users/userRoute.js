import express from 'express';
import UserControler from '../../../controlers/userControler.js'

const routes = express.Router();

routes.get('/teste/users', UserControler.listarUsuarios)

export default routes