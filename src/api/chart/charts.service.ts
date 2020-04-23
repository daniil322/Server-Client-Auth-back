import { getRndIntegers } from "../../services/utils";

const getChartsData = async () => {
  return {
    dailySales: {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      series: [getRndIntegers(1, 40, 7)],
    },
    emailsSubscription: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      series: [getRndIntegers(300, 400, 12)],
    },
    completedTasks: {
      labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
      series: [getRndIntegers(150, 800, 8)],
    },
  };
};

export default { getChartsData };
