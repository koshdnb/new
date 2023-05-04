import styled from '@emotion/styled';

import WeekAverage from '../../../../shared/ui/WeekAverage';
import ChartBlock from "../../../../shared/ui/ChartBlock";

export const Wrapper = styled.div`
  margin-top: 48px;
`;

export const StatsBlock = styled(WeekAverage)`
    margin-top: 84px;
`;

export const ChartWrapper = styled.div`
  width: 600px;
  height: 300px;
`

export const StatsWrapper = styled.div`
  margin-top: 36px;
`

export const MonthChartBlock = styled(ChartBlock)`
  flex-direction: row;
  justify-content: space-between;
`
