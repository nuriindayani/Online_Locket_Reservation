const models = require("../models");
const purchases = models.purchases;
const events = models.events;
const locations = models.locations;
const tickets = models.tickets;
// const { Events } = require("../helpers/functions");

exports.showAll = (req, res) => {
    purchases.findAll(
        {
            include: [
                {
                    model: tickets,
                    as: "purchase",
                    include: [
                        {
                            model: events,
                            as: "event",
                            include: [
                                {
                                    model: locations,
                                    as: "location"
                                }
                            ]
                        }
                    ]
                }
            ]
        }

    ).then(data => res.send(data));
};


exports.showOne = (req, res) => {
    purchases.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: tickets,
                as: "purchase",
                include: [
                    {
                        model: events,
                        as: "event",
                        include: [
                            {
                                model: locations,
                                as: "location"
                            }
                        ]
                    }
                ]
            }
        ]
    }).then(data => res.send(data));
};






// exports.showOne = (req, res) => {
//     purchases.findOne({ where: { id: req.params.id } }).then(data => {
//         res.send(data)
//     });
// };


exports.update = (req, res) => {
    purchases.update({ where: { id: req.params.id } }).then(data => {
        res.send({
            massage: "update success",
            purchases
        })
    });
};



exports.createOne = (req, res) => {
    purchases.create(req.body).then(data =>
        res.send({
            message: "success",
            data
        })
    );
};


exports.post = (req, res) => {
    console.log(req.body.ticket_id);
    tickets
        .findOne({
            where: {
                id: req.body.ticket_id
            }
        })
        .then(ticket => {
            if (ticket === null) {
                res.status(200).json({
                    success: false,
                    message: "ticket not found"
                });
            } else {
                if (req.body.quantity === 0) {
                    res.send({
                        message: 'quantity must be more than 0'
                    })
                } else if (req.body.quantity > ticket.stock) {
                    res.send({
                        message: 'quantity cannot be more than stock'
                    })
                } else {
                    const { quantity,
                        ticket_id,
                        name,
                        nik
                    } = req.body;
                    purchases
                        .create({
                            name: name,
                            nik: nik,
                            quantity: quantity,
                            totalPrice: quantity * ticket.price,
                            status: "pending",
                            ticket_id: ticket_id
                        }).then(result => {
                            res.send(result)
                        })
                }
            }
        });
};
