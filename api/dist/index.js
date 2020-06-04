"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.status(200).json({ message: 'Ok' }));
app.listen(port, () => console.log(`listening on ::: http://localhost:${port}`));
//# sourceMappingURL=index.js.map