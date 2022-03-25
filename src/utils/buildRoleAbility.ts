import {Ability, AbilityBuilder, AbilityClass} from '@casl/ability';
import type {AppAbility as TAppAbility} from 'config/abilities';
import abilities, {Roles} from 'config/abilities';

export const AppAbility = Ability as AbilityClass<TAppAbility>;

export function defineRulesFor(role: Roles) {
  const { can, cannot, rules } = new AbilityBuilder(AppAbility);
  const roleAbilities = abilities[role];

  roleAbilities.can.map((ability) => can(...ability));
  roleAbilities.cannot.map((ability) => cannot(...ability));

  return rules;
}

export default function buildRoleAbility(role: Roles): TAppAbility {
  return new AppAbility(defineRulesFor(role));
}
