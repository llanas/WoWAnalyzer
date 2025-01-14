import { formatThousands } from 'common/format';
import SPELLS from 'common/SPELLS';
import { SpellLink } from 'interface';
import Analyzer from 'parser/core/Analyzer';
import DonutChart from 'parser/ui/DonutChart';
import Statistic from 'parser/ui/Statistic';
import { STATISTIC_ORDER } from 'parser/ui/StatisticsListBox';

import EssenceFont from '../spells/EssenceFont';

class EssenceFontHealingBreakdown extends Analyzer {
  static dependencies = {
    essenceFont: EssenceFont,
  };

  protected essenceFont!: EssenceFont;

  renderEssenceFontChart() {
    const items = [
      {
        color: '#00bbcc',
        label: 'Bolt',
        spellId: SPELLS.ESSENCE_FONT.id,
        value: this.essenceFont.boltHealing,
        valueTooltip: formatThousands(this.essenceFont.boltHealing),
      },
      {
        color: '#f37735',
        label: 'Hot',
        spellId: SPELLS.ESSENCE_FONT_BUFF.id,
        value: this.essenceFont.hotHealing,
        valueTooltip: formatThousands(this.essenceFont.hotHealing),
      },
      {
        color: '#00b159',
        label: 'Mastery',
        spellId: SPELLS.GUSTS_OF_MISTS.id,
        value: this.essenceFont.gomHealing,
        valueTooltip: formatThousands(this.essenceFont.gomHealing),
      },
    ];

    return <DonutChart items={items} />;
  }

  statistic() {
    return (
      <Statistic position={STATISTIC_ORDER.CORE(20)} size="flexible">
        <div className="pad">
          <label>
            <SpellLink id={SPELLS.ESSENCE_FONT.id}>Essence Font</SpellLink> breakdown
          </label>
          {this.renderEssenceFontChart()}
        </div>
      </Statistic>
    );
  }
}

export default EssenceFontHealingBreakdown;
