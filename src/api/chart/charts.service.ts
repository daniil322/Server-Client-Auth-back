import { getRndInteger, getRndIntegers } from "../../services/utils";

const getChartsData = async () => {
  return {
    revenue: getRndInteger(1000, 4000),
    issues: getRndInteger(0, 100),
    followers: getRndInteger(50, 300),
    dailySales: {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      series: [getRndIntegers(1, 40, 7)],
    },
    emailsSubscription: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      series: [getRndIntegers(300, 400, 12)],
    },
    completedTasks: {
      labels: ["12", "15", "18", "21", "00", "3", "6", "9"],
      series: [getRndIntegers(150, 800, 8)],
    },
    tableData: [
      ["1", "Boby Rice", `${getRndInteger(20000, 50000)}`, "Japan"],
      ["2", "Eminem ", `${getRndInteger(20000, 50000)}`, "Usa"],
      ["3", "Sage Rodriguez", `${getRndInteger(20000, 50000)}`, "Netherlands"],
      ["4", "Cloud Strife", `${getRndInteger(20000, 50000)}`, "Midgar"],
    ],
  };
};

export default { getChartsData };
