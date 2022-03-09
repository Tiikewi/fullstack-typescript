import express from "express";
const app = express();

import { calculateBmi } from "./bmiCalculator";

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  try {
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);
    console.log(weight, height);
    if (isNaN(height) || isNaN(weight)) {
      throw new Error("malformatted parameters");
    }

    res.json({
      weight: weight,
      height: height,
      bmi: calculateBmi(height, weight),
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
