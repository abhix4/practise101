"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = void 0;
const addTodo = (req, res) => {
    try {
        const { title } = req.body;
        res.json(title);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.addTodo = addTodo;
//# sourceMappingURL=todo.js.map