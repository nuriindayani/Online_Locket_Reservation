require("express-group-routes");
const express = require("express");
const app = express();
const port = 4444;
app.use(express.json());


const eventsControllers = require("./controllers/events");
const locationsControllers = require("./controllers/locations");
const ticketsControllers = require("./controllers/tickets");
const purchasesControllers = require("./controllers/purchases");


app.group("/api/v1", router => {

    // API EVENTS
    router.get("/events", eventsControllers.showAll);
    router.get("/get_info", eventsControllers.all);
    router.get("/event/:id", eventsControllers.showOne);
    router.post("/event", eventsControllers.createOne);
    router.patch("/event/:id", eventsControllers.update);



    // API LOCATIONS
    router.get("/locations", locationsControllers.showAll);
    router.get("/location/:id", locationsControllers.showOne);
    router.post("/location", locationsControllers.createOne);
    router.patch("/location/:id", locationsControllers.update);

    // API TICKETS
    router.get("/tickets", ticketsControllers.showAll);
    router.get("/ticket/:id", ticketsControllers.showOne);
    router.post("/ticket", ticketsControllers.createOne);
    router.patch("/ticket/:id", ticketsControllers.update);


    // API PURCHASES
    router.get("/purchases", purchasesControllers.showAll);
    router.get("/purchase/:id", purchasesControllers.showOne);
    router.post("/purchase", purchasesControllers.post);
    router.patch("/purchase/:id", purchasesControllers.update);

});

app.get("/", (req, res) => {
    res.send("Assalamualaikum");
});
app.listen(port, () => console.log(`Listening on port ${port}`));
