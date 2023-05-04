import React from 'react';
import SectionHeader from '../../../../shared/ui/SectionHeader';
import BarChart from '../../../../shared/ui/BarChart';

import WeeklyGoal from '../../../../shared/ui/WeeklyGoal';
import WeekAverage from '../../../../shared/ui/WeekAverage';
import { ChartWrapper, Wrapper, AverageWrapper, WeekAverageWrapper  } from './styled';

const ThirdDeposit = () => {
  return (
    <Wrapper>
      <SectionHeader
        title="CR to 3rd deposit"
        description="Conversion to the 3rd deposit in 14 days after the 1st deposit"
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
          values={[3, 2.8, 1.4, 4.1, 4, 1.1]}
          labels={['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10']}
          successValue={4.5}
        />
      </ChartWrapper>
    </Wrapper>
  );
}

export default ThirdDeposit;
