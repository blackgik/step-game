import "dotenv/config";
import express from "express";
import { createStepHandler, getallStepTakenHandler } from "./service/userService.js";

const app = express();

app.use(express.json());

// entry route
app.post("/step1", async (req, res) => {
	const body = req.body;

	// body should have = playerId, step
	const createdStep = await createStepHandler(body);

	res.status(201).send(createdStep);
});
app.post("/step2", async (req, res) => {
	const body = req.body;

	// body should have = playerId, step
	const createdStep = await createStepHandler(body);

	res.status(201).send(createdStep);
});
app.post("/step3", async (req, res) => {
	const body = req.body;

	// body should have = playerId, step
	const createdStep = await createStepHandler(body);

	res.status(201).send(createdStep);
});
app.post("/step4", async (req, res) => {
	const body = req.body;

	// body should have = playerId, step
	const createdStep = await createStepHandler(body);

	res.status(201).send(createdStep);
});

app.get("/steps-taken", async (req, res) => {
	const { playerId } = req.query;
	// body should have = playerId, step
	const allPlayersStep = await getallStepTakenHandler(playerId);

	res.status(200).send(allPlayersStep);
});

export default app;
