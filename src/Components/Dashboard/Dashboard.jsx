import React from "react";
import StatisticsCard from "./StatisticsCard/StatisticsCard";
import {
  AiFillAlipayCircle,
  AiOutlineDropbox,
  AiOutlineDollar,
} from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { HStack, Box } from "@chakra-ui/react";
import PieChart from "./PieChart_orders/PieChart";
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
const ordersOverview = {
  labels: [
    "Order Completed",
    "Order Pending",
    "Order Failed",
    "Order Returned",
    "Order Unpaid",
    "Canceled",
  ],
  datasets: [
    {
      label: "Orders",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(75, 192, 192, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 99, 132, 0.2)",

        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 99, 132, 1)",

        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  return (
    <>
      <Box>
        <HStack mt="6" display={"flex"} flexWrap={"wrap"} gap={"6"}>
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
        <HStack>
          <Box>
            <PieChart data={ordersOverview} title={"Orders Overview"} />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Dashboard;
