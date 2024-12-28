import express from 'express';
import ejs from 'ejs';
const port = 3000;
const app = express();

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
const dayName = weekdays[date.getDay()];
let data;
if (dayName === "Sunday" || dayName === "Saturday") {
    data = {daytime: dayName, activity: "have fun"};
} else {
    data = {daytime: dayName, activity: "work hard"};
}



app.get('/', (req, res) => {
    res.render('index.ejs',{
        daytime: dayName,
        activity: data.activity
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});