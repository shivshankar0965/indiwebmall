import React from "react";
import { Chart } from "react-google-charts";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Divider, Box, Heading, useColorModeValue } from "@chakra-ui/react";
import "./PieChart.css";
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = ({ data, title }) => {
  return (
    <>
      <Box
        borderRadius="md"
        shadow="md"
        bg={useColorModeValue("white.300", "white.700")}
        color={useColorModeValue("gray.300", "gray.700")}
        border="1px solid #999"
        mt="6"
      >
        <Heading p="6">{title}</Heading>
        <Divider />
        <Box py="4" color={"white"} w={"400px"}>
          <Doughnut data={data} />
        </Box>
      </Box>
    </>
  );
};

export default PieChart;
