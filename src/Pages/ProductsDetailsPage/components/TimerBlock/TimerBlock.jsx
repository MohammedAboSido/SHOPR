import { TimerBlockNum, TimerBlockType, TimerBlockWrapper } from "./style";

const TimerBlock = ({ num, type }) => {
  return (
    <TimerBlockWrapper>
      <TimerBlockNum variant="body2">{num}</TimerBlockNum>
      <TimerBlockType variant="body2">{type}</TimerBlockType>
    </TimerBlockWrapper>
  );
};

export default TimerBlock;
