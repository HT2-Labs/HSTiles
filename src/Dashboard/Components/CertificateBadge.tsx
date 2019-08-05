import * as React from "react";
import styled from "styled-components";

const BadgeWrapper = styled.div`
  color: "black";
  background-color: #d1d1d1;
  padding: 10px;
  padding-top: 18px;
  margin: 30px;
  border-radius: 500px;
  width: 60px;
  height: 60px;
  text-align: center;
  position: absolute;
  bottom: 185px;
  left: 170px;
`;

const B2 = styled.div`
  margin: 10px;
  padding-right: 365px;
  width: 450px;
  text-align: center;
  position: relative;
  right: 30px;
`;

export const CertificateBadge = ({ icon, label }) => {
  return (
    <BadgeWrapper>
      {icon}
      <B2>{label}</B2>
    </BadgeWrapper>
  );
};

export default CertificateBadge;
