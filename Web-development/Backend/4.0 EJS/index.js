import express from 'express';
import ejs from 'ejs';
const port = 3000;
const app = express();


const template = '<h1>Hey! Its a <%= daytime %>, its time to <%= activity %></h1>';
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
const dayName = weekdays[date.getDay()];
if (dayName === "Sunday" || dayName === "Saturday") {
    const data = {daytime: dayName, activity: "have fun"};
} else {
    const data = {daytime: dayName, activity: "work hard"};
}
const html = ejs.render(template, data);

app.get('/', (req, res) => {
    res.send(html);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});