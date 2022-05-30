import app from "./app.js"

const port = process.env.PORT || 4200;

app.listen(port, () => {
	console.log(`server is up on port ${port}`);
});