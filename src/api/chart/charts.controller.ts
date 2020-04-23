import { Request, Response } from "express";
import chartService from "./charts.service";

const getChart = async (req: Request, res: Response) => {
  try {
    const chartsData = await chartService.getChartsData();
    res.send(chartsData);
  } catch (err) {
    console.log(err);
  }
};

export default { getChart };
