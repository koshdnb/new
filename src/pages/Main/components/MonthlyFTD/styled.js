import styled from '@emotion/styled';
import WeekAverage from '../../../../shared/ui/WeekAverage';
import ChartBlock from "../../../../shared/ui/ChartBlock";

export const Wrapper = styled.div`
  margin-top: 48px;
`;

export const StatsBlock = styled(WeekAverage)`
    margin-top: 48px;
`;

export const ChartWrapper = styled.div`
  margin-left: 180px;
  width: 600px;
  height: 240px;
`

export const StatsWrapper = styled.div`
  display: block;
`

export const MonthChartBlock = styled(ChartBlock)`
  flex-direction: row;
`
