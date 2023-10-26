const express = require("express");
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Connection mySQL
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	port: '8889',
	password: 'root',
	database: 'restaurant',
});

//GET ALL ITEMS 
app.get('/items', (req, res) => {
	connection.query('SELECT * FROM items', (err, result) => {
		if (err) throw err;

		res.json(result);
	});
});

//ADD NEW ITEM 
app.post('/items', (req, res) => {
	const { name, description, price } = req.body;

	connection.query('INSERT INTO items (name, description, price) VALUES (?, ?, ?)', [name, description, price], (err, results) => {
		if (err) throw err;

		res.json({
			message: 'Item created successfully', results
		});
	});
});

//GET AN ITEM
app.get('/items/:id', (req, res) => {
	const itemId = req.params.id;

	const sqlQuery = 'SELECT * FROM items WHERE id = ?';

	connection.query(sqlQuery, [itemId], (err, result) => {
		if (err) throw err;

		if (result.length > 0) {
			res.json(result[0]);
		} else {
			res.json({ message: 'Item not found' });
		}
	});
});

//CHANGE OR ADJUST AN ITEM
app.put('/items/:id', (req, res) => {
	const itemIdUrl = req.params.id;
	const { name, description, price } = req.body;

	const sqlQuery = 'UPDATE items SET name = ?, description = ?, price = ? WHERE id = ?';

	connection.query(sqlQuery, [name, description, price, itemIdUrl], (err, results) => {
		if (err) throw err;

		if (results.affectedRows > 0) {
			res.json({ message: 'Item updated successfully!', results });
		} else {
			res.json({ message: 'Item not found' });
		}
	});
});

//DELETE AN ITEM
app.delete('/items/:id', (req, res) => {

	const itemIdUrl = req.params.id;

	const sqlQuery = 'DELETE FROM items WHERE id = ?';

	connection.query(sqlQuery, [itemIdUrl], (err, results) => {
		if (err) throw err;

		if (results.affectedRows > 0) {
			res.json({ message: 'Item deleted successfully!', results });
		} else {

			res.json({ message: 'Item not found' });
		}
	});
});

//GET ALL CATEGORIES
app.get('/categories', (req, res) => {
	// Query the database for all categories
	connection.query('SELECT * FROM categories', (err, results) => {
		if (err) throw err;

		// Send the results to the client with a message
		res.json({
			message: 'Categories retrieved successfully!',
			results,
		});
	});
});

//ADD A NEW CATEGORY
app.post('/categories', (req, res) => {
	const name = req.body.name;

	connection.query('INSERT INTO categories (name) VALUES (?)', [name], (err, results) => {
		if (err) throw err;

		res.json({
			message: 'Category created successfully!',
			results,
		});
	});
});

//GET AN ITEM WITHIN CATEGORIES 
app.get('/categories/:id', (req, res) => {

	const categoryId = req.params.id;

	connection.query('SELECT * FROM categories WHERE id = ?', [categoryId], (err, results) => {
		if (err) throw err;

		if (results.length > 0) {
			res.json(results[0]);
		} else {
			res.json({ message: 'Category not found' });
		}
	});
});

//CHANGE A CATEGORY 
app.put('/categories/:id', (req, res) => {
	const categoryId = req.params.id;

	const { name } = req.body;

	connection.query('UPDATE categories SET name = ? WHERE id = ?', [name, categoryId], (err, results) => {
		if (err) throw err;

		if (results.affectedRows > 0) {

			res.json({ message: 'Category updated successfully!', results });
		} else {

			res.json({ message: 'Category not found' });
		}
	});
});

//DELETE A CATEGORY
app.delete('/categories/:id', (req, res) => {

	const categoryId = req.params.id;


	connection.query('DELETE FROM categories WHERE id = ?', [categoryId], (err, results) => {
		if (err) throw err;


		if (results.affectedRows > 0) {
			res.json({ message: 'Category deleted successfully!', results });
		} else {

			res.json({ message: 'Category not found' });
		}
	});
});

//GET ALL FORMULAS
app.get('/formulas', (req, res) => {

	connection.query('SELECT * FROM formulas', (err, results) => {
		if (err) throw err;

		res.json({
			message: 'Formulas retrieved successfully!',
			results,
		});
	});
});

//ADD A NEW FORMULA
app.post('/formulas', (req, res) => {
	const { name, description, price } = req.body;
	const insertFormulaQuery = `
	  INSERT INTO formulas (name, description, price) VALUES (?, ?, ?);
	`;

	connection.query(insertFormulaQuery, [name, description, price], (err, results) => {
		if (err) {
			throw err;
		}

		res.json({
			message: 'Formula created successfully!',
			results,
		});
	});
});

//GET A FORMULA 
app.get('/formulas/:id', (req, res) => {
	const formulaId = req.params.id;
	const sqlQuery = `SELECT * FROM formulas WHERE id = ?;`;

	connection.query(sqlQuery, [formulaId], (err, results) => {
		if (err) throw err;

		res.json({
			message: 'Formula retrieved successfully!',
			results,
		});
	});
});

//CHANGE A FORMULA 
app.post('/formulas', (req, res) => {
	const { name, description, price } = req.body;
	const insertFormulaQuery = `
	  INSERT INTO formulas (name, description, price) VALUES (?, ?, ?);
	`;

	connection.query(insertFormulaQuery, [name, description, price], (err, results) => {
		if (err) {

			throw err;
		}

		res.json({
			message: 'Formula created successfully!',
			results,
		});
	});
});

//DELETE A FORMULA 
app.delete('/formulas/:id', (req, res) => {

	const formulaId = req.params.id;
	const sqlQuery = `
	  DELETE FROM formulas WHERE id = ?;
	`;

	connection.query(sqlQuery, [formulaId], (err, results) => {
		if (err) throw err;

		if (results.affectedRows > 0) {
			res.json({ message: 'Formula deleted successfully!', results });
		} else {
			res.json({ message: 'Formula not found' });
		}
	});
});


connection.connect()

app.listen(3000, () => console.log("Server is running"));
