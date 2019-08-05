import * as React from "react";
import styled from "styled-components";

const BadgeWrapper = styled.div`
  color: "black";
  background-color: #d1d1d1;
  display: inline-block;
  padding: 10px;
  padding-top: 18px;
  margin: 20px;
  border-radius: 100px;
  width: 60px;
  height: 60px;
  text-align: center;
`;

const B2 = styled.div`
  margin: 15px;
  width: 100px;
  text-align: centre;
  position: relative;
  right: 45px;
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
