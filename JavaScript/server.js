const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const db = mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: 'password',
	    database: 'swiftclean'
});

db.connect(err => {
	    if (err) {
		            throw err;
		        }
	    console.log('MySQL connected...');
});

app.post('/api/register', (req, res) => {
	    const { name, email, password } = req.body;

	    const hashedPassword = bcrypt.hashSync(password, 10);

	    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
	    db.query(sql, [name, email, hashedPassword], (err, result) => {
		            if (err) {
				                return res.json({ success: false, message: err.message });
				            }
		            res.json({ success: true, message: 'User registered successfully' });
		        });
});

app.listen(port, () => {
	    console.log(`Server running on http://localhost:${port}`);
});