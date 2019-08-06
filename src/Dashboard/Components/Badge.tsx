import * as React from "react";
import styled from "styled-components";

const BadgeWrapper = styled.div`
  color: #595757;
  background-color: #d1d1d1;
  padding: 10px;
  padding-top: 13px;
  margin: 30px;
  border-radius: 500px;
  width: 50px;
  height: 50px;
  text-align: center;
`;

const B2 = styled.div`
  margin: 10px;
  padding-right: 365px;
  position: relative;
  right: 30px;
  width: 450px;
  text-align: center;
`;

export const Badge = ({ icon, label }) => {
  return (
    <BadgeWrapper>
      {icon}
      <B2>{label}</B2>
    </BadgeWrapper>
  );
};

export default Badge;
