import SPELLS from 'common/SPELLS';
import COVENANTS from 'game/shadowlands/COVENANTS';
import CoreAbilities from 'parser/core/modules/Abilities';

class Abilities extends CoreAbilities {
  spellbook() {
    const combatant = this.selectedCombatant;
    return [
      // Rotational
      {
        spell: SPELLS.BACKSTAB.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          static: 1000,
        },
        enabled: !combatant.hasTalent(SPELLS.GLOOMBLADE_TALENT.id),
      },
      {
        spell: SPELLS.GLOOMBLADE_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          static: 1000,
        },
        enabled: combatant.hasTalent(SPELLS.GLOOMBLADE_TALENT.id),
      },
      {
        spell: SPELLS.EVISCERATE.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.BLACK_POWDER.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL_AOE,
        gcd: {
          base: 1000,
        },
      },
      {
        // Requires Stealth
        spell: SPELLS.SHADOWSTRIKE.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.SHURIKEN_TOSS.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.SYMBOLS_OF_DEATH.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        buffSpellId: SPELLS.SYMBOLS_OF_DEATH.id,
        cooldown: 30,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.95,
          extraSuggestion:
            'This is the most important rotational ability, try to always use it on cooldown.',
        },
      },
      // Rotational AOE
      {
        spell: SPELLS.SHURIKEN_STORM.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL_AOE,
        gcd: {
          static: 1000,
        },
      },
      // Cooldowns
      {
        spell: SPELLS.SHADOW_BLADES.id,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        buffSpellId: SPELLS.SHADOW_BLADES.id,
        cooldown: 180,
        gcd: {
          base: 1000,
        },
        castEfficiency: {
          suggestion: true,
          extraSuggestion: 'In most cases should be used on cooldown.',
        },
      },
      {
        spell: SPELLS.SEPSIS.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        enabled: combatant.hasCovenant(COVENANTS.NIGHT_FAE.id),
        cooldown: 90,
        gcd: {
          base: 1000,
        },
        castEfficiency: {
          suggestion: true,
        },
      },
      {
        spell: SPELLS.SHADOW_DANCE.id,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        buffSpellId: SPELLS.SHADOW_DANCE_BUFF.id,
        cooldown: 60,
        charges: 2 + (combatant.hasTalent(SPELLS.ENVELOPING_SHADOWS_TALENT.id) ? 1 : 0),
        gcd: null,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.95,
          extraSuggestion: 'Use Shadow Dance before it reaches maximum charges.',
        },
      },
      {
        spell: SPELLS.VANISH.id,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        buffSpellId: SPELLS.VANISH_BUFF.id,
        cooldown: 120,
        gcd: null,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.8,
        },
      },
      {
        spell: SPELLS.MARKED_FOR_DEATH_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: 30,
        gcd: null,
        enabled: combatant.hasTalent(SPELLS.MARKED_FOR_DEATH_TALENT.id),
      },
      {
        spell: SPELLS.SECRET_TECHNIQUE_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: 45,
        gcd: {
          static: 1000,
        },
        castEfficiency: {
          suggestion: true,
        },
        enabled: combatant.hasTalent(SPELLS.SECRET_TECHNIQUE_TALENT.id),
      },
      {
        spell: SPELLS.SHURIKEN_TORNADO_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: 60,
        gcd: {
          static: 1000,
        },
        castEfficiency: {
          suggestion: true,
        },
        enabled: combatant.hasTalent(SPELLS.SHURIKEN_TORNADO_TALENT.id),
      },
      // Defensive
      {
        spell: SPELLS.CLOAK_OF_SHADOWS.id,
        category: Abilities.SPELL_CATEGORIES.DEFENSIVE,
        buffSpellId: SPELLS.CLOAK_OF_SHADOWS.id,
        cooldown: 120,
        gcd: null,
      },
      {
        spell: SPELLS.CRIMSON_VIAL.id,
        category: Abilities.SPELL_CATEGORIES.DEFENSIVE,
        cooldown: 30,
        gcd: {
          base: 1000,
        },
      },
      {
        spell: SPELLS.EVASION.id,
        category: Abilities.SPELL_CATEGORIES.DEFENSIVE,
        buffSpellId: SPELLS.EVASION.id,
        cooldown: 120,
      },
      {
        spell: SPELLS.FEINT.id,
        category: Abilities.SPELL_CATEGORIES.DEFENSIVE,
        buffSpellId: SPELLS.FEINT.id,
        cooldown: 15,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.RUPTURE.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          static: 1000,
        },
      },
      // Utility
      {
        spell: SPELLS.SHADOWSTEP.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 30,
        charges: 2,
        gcd: null,
      },
      {
        spell: SPELLS.SPRINT.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 60,
        gcd: null,
      },
      {
        spell: SPELLS.TRICKS_OF_THE_TRADE.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 30,
        gcd: null,
      },
      {
        spell: SPELLS.STEALTH.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 2,
        gcd: null,
      },
      {
        spell: SPELLS.BLIND.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 120,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.CHEAP_SHOT.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.DISTRACT.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 30,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.KICK.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 15,
        gcd: null,
      },
      {
        spell: SPELLS.KIDNEY_SHOT.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 20,
        gcd: {
          static: 1000,
        },
      },
      {
        spell: SPELLS.SHROUD_OF_CONCEALMENT.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 6 * 60,
        gcd: {
          base: 1000,
        },
      },
      {
        spell: SPELLS.SAP.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
      },
      {
        spell: SPELLS.PICK_LOCK.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
      },
      {
        spell: SPELLS.PICK_POCKET.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        // While this actually has a 0.5s CD, it shows up weird in the Abilities tab if we set that
      },
      {
        spell: SPELLS.PREMEDITATION_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
      },
    ];
  }
}

export default Abilities;
