import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const TimerBlockWrapper = styled(Box)`
  label: TimerBlockWrapper;
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 80px;
  text-align: center;
`;

export const TimerBlockNum = styled(Typography)`
  label: TimerBlockNum;
  display: flex;
  width: 60px;
  height: 60px;
  padding: 13px 12px 13px 13px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #f5f5f5;

  color: #121212;
  text-align: center;
  font-family: Space Grotesk;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.6px;
`;
export const TimerBlockType = styled(Typography)`
  label: TimerBlockType;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
`;
