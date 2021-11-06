import type { Resource } from 'game/RESOURCE_TYPES';
import { ResourceLink } from 'interface';
import { ClassResources, EventType, CastEvent } from 'parser/core/Events';
import React from 'react';

import { Condition, tenseAlt } from '../index';
import { Range, formatRange } from './index';

const castResource = (resource: Resource, event: CastEvent): ClassResources | undefined =>
  event.classResources?.find(({ type }) => type === resource.id);

const rangeSatisfied = (actualAmount: number, range: Range): boolean =>
  actualAmount >= (range.atLeast || 0) &&
  (range.atMost === undefined || actualAmount <= range.atMost);

// NOTE: this doesn't explicitly model natural regen (mana, energy, focus) but
// when the classResources are present it does use those as the main source of
// truth, which should accomodate them in the vast majority of cases.
export default function hasResource(resource: Resource, range: Range): Condition<number> {
  return {
    key: `hasResource-${resource.id}`,
    init: () => 0,
    update: (state, event) => {
      if (event.type === EventType.ResourceChange && event.resourceChangeType === resource.id) {
        return event.resourceChange - event.waste + state;
      } else if (
        event.type === EventType.SpendResource &&
        event.resourceChangeType === resource.id
      ) {
        return state - event.resourceChange;
      } else if (event.type === EventType.Cast) {
        const res = castResource(resource, event);
        if (res) {
          return res.amount - (res.cost || 0);
        } else {
          return state;
        }
      } else {
        return state;
      }
    },
    validate: (state, event) => {
      const res = castResource(resource, event);
      if (res) {
        return rangeSatisfied(res.amount, range);
      } else {
        return rangeSatisfied(state, range);
      }
    },
    describe: (tense) => (
      <>
        you {tenseAlt(tense, 'have', 'had')} {formatRange(range)}{' '}
        <ResourceLink id={resource.id} icon />
      </>
    ),
  };
}
