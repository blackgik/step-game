import app from "./../src/app.js";
import chai from "chai";
import chatHttp from "chai-http";

let should = chai.should();

chai.use(chatHttp);

const data = { playerId: "1", step: "B" };

const playerId = "1";

describe("Steps", async () => {
	it("should return 201 status code", (done) => {
		chai
			.request(app)
			.post("/step1")
			.send(data)
			.end((err, res) => {
				res.should.have.status(201);
			});
		done();
	});

	it("should return ok", (done) => {
		chai
			.request(app)
			.post("/step2")
			.send(data)
			.end((err, res) => {
				res.text.should.be.a("string");
			});
		done();
	});

	it("should return return an object", (done) => {
		chai
			.request(app)
			.get("/steps-taken")
			.send({ playerId })
			.end((err, res) => {
				console.log(res.body);
				res.body.should.be.an("object");
			});
		done();
	});
});
