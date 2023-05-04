import React from 'react';

import BarChart from '../../../../shared/ui/BarChart';
import SectionHeader from '../../../../shared/ui/SectionHeader';
import WeeklyGoal from '../../../../shared/ui/WeeklyGoal';
import WeekAverage from '../../../../shared/ui/WeekAverage';

import { Wrapper, ChartWrapper, AverageWrapper, WeekAverageWrapper } from './styled';

const FirstDeposit = () => {
  return (
    <Wrapper>
      <SectionHeader
        title="CR to FTD"
        description="Conversion to the 1st deposit in 7 days after registration"
      />
      <ChartWrapper>
        <AverageWrapper>
          <WeeklyGoal
            title="Weekly average goal"
            value={4.8}
            suggestedValue={4.0}
          />
          <WeekAverageWrapper>
            <WeekAverage
              title="This week average"
              progress={82}
              value={3.9}
              suggestedValue={3.7}
              upToValue={5}
            ></WeekAverage>
          </WeekAverageWrapper>
        </AverageWrapper>
        <BarChart
          values={[4.3, 3.8, 5.4, 4.1, 4, 5.1, 4.7, 4.3, 4.2, 4]}
          labels={['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10']}
        />
      </ChartWrapper>
    </Wrapper>
  );
};

export default FirstDeposit;
