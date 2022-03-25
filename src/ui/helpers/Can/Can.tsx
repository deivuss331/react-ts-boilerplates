import { createContextualCan } from '@casl/react';
import { AbilityContext } from 'providers/AbilityProvider';

const Can = createContextualCan(AbilityContext.Consumer);

export default Can;
