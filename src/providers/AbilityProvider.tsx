import { createContext } from 'react';
import buildRoleAbility from 'utils/buildRoleAbility';
import type { AppAbility } from 'config/abilities';
import { Roles } from 'config/abilities';

interface IProps {
  children: React.ReactElement;
}

export const AbilityContext = createContext<AppAbility>(undefined!);

function AbilityProvider({ children }: IProps): JSX.Element {
  // You should build ability for user's role
  const ability = buildRoleAbility(Roles.USER);

  return <AbilityContext.Provider value={ability}>{children}</AbilityContext.Provider>;
}

export default AbilityProvider;
