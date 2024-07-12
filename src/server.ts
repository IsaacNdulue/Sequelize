import express, {Response, Request} from "express"
import initializeDB from "./database";

const app = express();
const port = 4000
app.use(express.json());

app.get("/", (req:Request, res:Response)=>{
    res.send("welcome to class")
});

app.listen(port, async ()=>{
    await initializeDB();
    console.log("App listeningnon port")
})
