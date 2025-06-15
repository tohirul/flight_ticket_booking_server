import express from 'express';
import { container } from 'tsyringe';

import requestValidator from '@/app/middlewares/requestValidator';

import StateController from './stateController';
import { createStateSchema, updateStateSchema } from './stateZod';

const controller = container.resolve(StateController);
const stateRouter = express.Router();

stateRouter.get('/', controller.getAll);
stateRouter.get('/:id', controller.getSingle);
stateRouter.post('/', requestValidator(createStateSchema), controller.create);
stateRouter.put('/:id', requestValidator(updateStateSchema), controller.update);
stateRouter.delete('/:id', controller.destroy);

export default stateRouter;
