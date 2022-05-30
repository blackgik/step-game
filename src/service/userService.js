let store = {};
export const createStepHandler = async (body) => {
	const { playerId, step } = body;
	if (store[playerId]) {
		store[playerId][step] = step;
	} else {
		store[playerId] = { [step]: step };
	}

	return "ok";
};

export const getallStepTakenHandler = async (playerId) => {
	const playerRecord = store[playerId];
	if (!playerRecord) return {};

	return playerRecord;
};
