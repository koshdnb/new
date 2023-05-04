import React from 'react';

import BarChart from '../../../../shared/ui/BarChart';
import SectionHeader from '../../../../shared/ui/SectionHeader';
import WeeklyGoal from '../../../../shared/ui/WeeklyGoal';
import WeekAverage from '../../../../shared/ui/WeekAverage';

import { Wrapper, ChartWrapper, AverageWrapper, WeekAverageWrapper } from './styled';
import {useSelector} from "react-redux";
import {selectData} from "../../../../store/dataSlice";
import {selectBrand, selectSource} from "../../../../store/headerSlice";

const FirstDeposit = () => {
    const brand = useSelector(selectBrand);
    const source = useSelector(selectSource);
    const data = useSelector(selectData(brand, source));
    const {firstDeposit} = data;
    console.log(data);

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
          values={firstDeposit}
          labels={['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10']}
          successValue={4.5}
        />
      </ChartWrapper>
    </Wrapper>
  );
};

export default FirstDeposit;
