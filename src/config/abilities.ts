import { Ability } from '@casl/ability';

export enum Roles {
  ADMIN,
  USER,
}

const abilities: IAbilities = {
  [Roles.ADMIN]: {
    can: [['see', 'AuthenticatedApp']],
    cannot: [],
  },
  [Roles.USER]: {
    can: [],
    cannot: [['see', 'AuthenticatedApp']],
  },
};

export default abilities;

export type Actions = 'see';
export type Subjects = 'AuthenticatedApp';
export type AppAbility = Ability<[Actions, Subjects]>;

type SingleAbility = [Actions, Subjects];

interface IAbilities {
  [Roles.ADMIN]: {
    can: SingleAbility[];
    cannot: SingleAbility[];
  };
  [Roles.USER]: {
    can: SingleAbility[];
    cannot: SingleAbility[];
  };
}
