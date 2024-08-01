const express = require("express");
const app = express();
const PORT = 8080;
const cors = require('cors');
const logins = require('./data/LOGIN_STORE');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("This is the root page!");
});

app.get('/login', (req, res) => {
    res.send("This is the login page.");
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;    // grab username/password from request body
    const login = logins.find(login => login.username === username && login.password === password);     // search for login match
  
    if (login) {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
  });

// const homeRouter = require('./routes/home_routes');
// app.use('/home', homeRouter);


app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
