import React from "react";
import StatisticsCard from "./StatisticsCard/StatisticsCard";
import {
  AiFillAlipayCircle,
  AiOutlineDropbox,
  AiOutlineDollar,
} from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import {
  HStack,
  Box,
  Grid,
  GridItem,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import PieChart from "./PieChart_orders/PieChart";
import LineSales from "./Line_Charts_Sales/Line_Sales";
import TopProducts from "./TopProducts/TopProducts";
import { ChevronRightIcon } from "@chakra-ui/icons";

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
    "Order Canceled",
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
        <Heading my={"6"}>Dashboard</Heading>
        <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Grid mt="6" gridTemplateColumns={"repeat(3, 1fr)"} gap="4">
          {statistics.map((el, i) => {
            const Logo = el.icon;
            return (
              <GridItem key={i}>
                <StatisticsCard
                  title={el.title}
                  statistic={el.statistic}
                  logo={<Logo />}
                />
              </GridItem>
            );
          })}
        </Grid>
        <HStack display={"flex"} gap={"4"} align={"normal"}>
          <Box h={"100%"}>
            <PieChart
              style={{ width: "100%" }}
              data={ordersOverview}
              title={"Orders Overview"}
            />
          </Box>
          <Box h={"100%"} w={"100%"}>
            <LineSales title="Sales Overview" />
          </Box>
        </HStack>
        <HStack align={"normal"}>
          <TopProducts />
        </HStack>
      </Box>
    </>
  );
};

export default Dashboard;
