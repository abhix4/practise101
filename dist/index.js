"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./routes/todo"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/todo", todo_1.default);
app.get("/", (req, res) => {
    res.json({
        message: "hello world!"
    });
});
app.post("/data", (req, res) => {
    const { name, age } = req.body;
    res.json({
        age: age,
        name: name
    });
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=index.js.map