import express from 'express';
import { container } from 'tsyringe';

import requestValidator from '@/app/middlewares/requestValidator';

import StateController from './stateController';
import { createStateSchema, updateStateSchema } from './stateZod';

const { getAll, getSingle, create, update, destroy } = container.resolve(StateController);
const stateRouter = express.Router();

stateRouter.get('/', getAll);
stateRouter.get('/:id', getSingle);
stateRouter.post('/', requestValidator(createStateSchema), create);
stateRouter.put('/:id', requestValidator(updateStateSchema), update);
stateRouter.delete('/:id', destroy);

export default stateRouter;
