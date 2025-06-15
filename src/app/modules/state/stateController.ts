import type { State } from '@generated/@prisma/client';
import { inject, injectable } from 'tsyringe';

import StateService from '@/app/modules/state/stateServices';
import Controller from '@/core/shared/controller';

@injectable()
class StateController extends Controller<State> {
  constructor(
    @inject(StateService)
    stateService: StateService
  ) {
    super(stateService);
  }
}
export default StateController;
