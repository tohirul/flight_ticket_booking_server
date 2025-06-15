import { inject, injectable } from 'tsyringe';

import StateRepository from '@/core/repositories/container/repository_state';
import Services from '@/core/shared/services';
import { State } from '@generated/@prisma/client';

@injectable()
export default class StateService extends Services<State> {
  constructor(
    @inject('StateRepository')
    stateRepository: StateRepository
  ) {
    super(stateRepository);
  }
}
