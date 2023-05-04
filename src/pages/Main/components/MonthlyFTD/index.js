import React from 'react';

import SectionHeader from '../../../../shared/ui/SectionHeader';
import ChartBlock from '../../../../shared/ui/ChartBlock';
import MonthlyGoal from '../../../../shared/ui/MonthlyGoal';

import { Wrapper, StatsBlock, ChartWrapper, StatsWrapper, MonthChartBlock } from './styled';
import BarChart from '../../../../shared/ui/BarChart';

const MontlyFTD = () => {
  return (
    <Wrapper>
      <SectionHeader
        title="Monthly FTD"
        description="Number of the first time depositers per month"
      />
      <MonthChartBlock>
        <StatsWrapper>
          <MonthlyGoal value={46200} />
          <StatsBlock
            title="This month FTD"
            progress={90}
            value={40387}
            suggestedValue={37000}
            upToValue={3387}
            type="number"
          ></StatsBlock>
        </StatsWrapper>
        <ChartWrapper>
          <BarChart
            values={[29500, 41000, 31000]}
            labels={['APR', 'MAY', 'JUN']}
            successValue={36200}
          />
        </ChartWrapper>
      </MonthChartBlock>
    </Wrapper>
  );
};

export default MontlyFTD;
