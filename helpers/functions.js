exports.formatDate = date => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let month = date.getMonth() + 1;
    let hari = date.getDate();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;
    month = month < 10 ? "0" + month : month;
    hari = hari < 10 ? "0" + hari : hari;
    return (
        date.getFullYear() +
        "-" +
        month +
        "-" +
        hari +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
    );
};
exports.formatDateEvent = date => {
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let month = months[date.getMonth()];
    let hari = date.getDate();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;
    month = month < 10 ? "0" + month : month;
    hari = hari < 10 ? "0" + hari : hari;
    return hari + " " + month + " " + date.getFullYear();
};

const formatDatePayment = date => {
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    const day = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    let month = months[date.getMonth()];
    let Day = day[date.getDay()];
    let hari = date.getDate();
    month = month < 10 ? "0" + month : month;
    hari = hari < 10 ? "0" + hari : hari;
    return Day + ". " + hari + " " + month + " " + date.getFullYear();
};

exports.formatTime = date => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;
    return hours + ":" + minutes;
};
const formatTime = date => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;
    return hours + ":" + minutes;
};

exports.formatRupiah = angka => {
    var reverse = angka
        .toString()
        .split("")
        .reverse()
        .join(""),
        ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan
        .join(".")
        .split("")
        .reverse()
        .join("");
    return "Rp." + ribuan + ",-";
};

const formatRupiah = angka => {
    var reverse = angka
        .toString()
        .split("")
        .reverse()
        .join(""),
        ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan
        .join(".")
        .split("")
        .reverse()
        .join("");
    return "Rp." + ribuan + ",-";
};

const formatDate = date => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let month = date.getMonth() + 1;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;
    return (
        date.getFullYear() +
        "-" +
        month +
        "-" +
        date.getDate() +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
    );
};

exports.Events = data => {
    const Event = data.map(item => {
        let items = {
            id: item.id,
            title: item.title,
            startTime: formatDate(item.startTime),
            endTime: formatDate(item.endTime),
            id_loc: item.id_loc,
            detail_loc: item.detail_loc,
            location: {
                id: item.location.id,
                location: item.location.location,
            },
            event:
            {
                id: item.event.id,
                type: item.event.type,
                price: formatRupiah(item.event.price),
                quantity: item.event.quantity,
                stock: item.event.stock,
                id_event: item.event.id_event
            },
        };
        return items;
    });
    return Event;
};


exports.newTickets = data => {
    const newTicket = data.map(item => {
        let newItems = {
            id: item.id,
            type: item.type,
            price: formatRupiah(item.price),
            quantity: item.quantity,
            stock: item.stock,
            id_event: item.id_event,
        };
        return newItems;
    });
    return newTicket;
};




// {
//     "id": 1,
//     "title": "Liga Dunia",
//     "startTime": "2020-01-17T00:00:00.000Z",
//     "endTime": "2020-01-18T00:00:00.000Z",
//     "id_loc": 1,
//     "detail_loc": "Sabang",
//     "createdAt": "2020-01-16T10:21:54.000Z",
//     "updatedAt": "2020-01-16T10:21:54.000Z",
//     "location": {
//         "id": 1,
//         "location": "Aceh",
//         "createdAt": "2020-01-16T06:42:00.000Z",
//         "updatedAt": "2020-01-16T06:42:00.000Z"
//     },
//     "event": [
//         {
//             "id": 1,
//             "type": "Red Zone",
//             "price": 800000,
//             "quantity": 1,
//             "stock": 20,
//             "id_event": 1,
//             "createdAt": "2020-01-16T22:10:15.000Z",
//             "updatedAt": "2020-01-16T22:10:15.000Z"
//         },