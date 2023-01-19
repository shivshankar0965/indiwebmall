import React from "react";
import StatisticsCard from "./StatisticsCard/StatisticsCard";
import {
  AiFillAlipayCircle,
  AiOutlineDropbox,
  AiOutlineDollar,
} from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { HStack } from "@chakra-ui/react";
const statistics = [
  {
    id: 1,
    icon: FiUserPlus,
    title: "Daily Signups",
    statistic: 15,
  },
  {
    id: 2,
    icon: AiOutlineDropbox,
    title: "Daily Orders",
    statistic: 5,
  },
  {
    id: 3,
    icon: AiOutlineDollar,
    title: "Daily Revenue",
    statistic: 105,
  },
];
const Dashboard = () => {
  return (
    <>
      <HStack>
        {statistics.map((el, i) => {
          const Logo = el.icon;
          return (
            <StatisticsCard
              key={i}
              title={el.title}
              statistic={el.statistic}
              logo={<Logo />}
            />
          );
        })}
      </HStack>
    </>
  );
};

export default Dashboard;
