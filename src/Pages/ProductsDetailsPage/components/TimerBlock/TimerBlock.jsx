import { TimerBlockNum, TimerBlockType, TimerBlockWrapper } from "./style";

const TimerBlock = ({ num, type }) => {
  return (
    <TimerBlockWrapper
      sx={{
        width: { xs: "48px", md: "60px" },
        height: { xs: "70px", md: "80px" },
      }}
    >
      <TimerBlockNum
        sx={{
          borderRadius: { xs: "0", md: "50%" },
          height: { xs: "70px", md: "80px" },
          padding: { xs: "5px 8px", md: "0" },
        }}
        variant="body2"
      >
        {num}
      </TimerBlockNum>
      <TimerBlockType variant="body2">{type}</TimerBlockType>
    </TimerBlockWrapper>
  );
};

export default TimerBlock;
