import * as React from "react";
import Dashboard from "./Dashboard";
import { learningExperiences, focusAreas } from "../Data";

export const DashboardContainer = ({ direction }) => (
  <Dashboard
    direction={direction}
    myPlanItems={learningExperiences.myPlanItems}
    focusAreas={focusAreas.items}
  />
);

export default DashboardContainer;
