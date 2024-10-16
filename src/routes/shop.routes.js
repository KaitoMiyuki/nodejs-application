import { Router } from "express";

const shopRouter = Router();

shopRouter.post("/orderId", async (req, res) => {
    // TODO: create entry in DB with the orderId received from parameters
    // set isResolved to false by default
    const hostname = req.hostname;
    res.status(200).json({ hostname: hostname })
})

export default shopRouter;


// Mongo DB
// DBs
// -> Collections (created from models)
//      -> Documents