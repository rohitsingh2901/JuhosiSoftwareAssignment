
const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Create MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'juhosi software'
});


// Route to handle the form submission
app.post('/save_data', (req, res) => {
  const { id, password } = req.body;

  // Insert the data into the MySQL database
  pool.query(`INSERT INTO auth (id, password) VALUES ('${id}', '${password}');`, [id, password], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error saving data to the database' });
    } else {
      res.status(200).json({ success: true, message: 'Data saved successfully' });
    }
  });
});


app.post('/save_data2', (req, res) => {
  const { id1,id2,id3,id4,id5,id6,id7,id8,id9,id10,id11,id12,id13 } = req.body;
  console.log(id1,id2,id3,id4,id5,id6,id7,id8,id9,id10,id11,id12,id13)


  pool.query('')

  // Insert the data into the MySQL database
  pool.query(`INSERT INTO customer (\`order date\`, company, owner, item, quantity, weight, \`request shipment\`, \`tracking id\`, \`shiipment size\`, \`box count\`, specification, \`checklist quantity\`,name) 
  VALUES ('${id1}', '${id2}', '${id3}', '${id4}', ${id5}, ${id6}, '${id7}', '${id8}', '${id9}', ${id10}, '${id11}', '${id12}','${id13}');`, [id1,id2,id3,id4,id5,id6,id7,id8,id9,id10,id11,id12,id13], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error saving data to the database' });
    } else {
      res.status(200).json({ success: true, message: 'Data saved successfully' });
    }
  });
});



app.get('/getquantity',(req,res)=>{

  pool.query('SELECT SUM(`quantity`) AS sum_of_quantity FROM customer WHERE name="customer1";', (error, results) => {
    if (error) {
        console.error('Error retrieving data from database:', error);
    } else {
      res.send(results)
    }
  });
})
app.get('/getweight',(req,res)=>{

  pool.query('SELECT SUM(`weight`) AS sum_of_weight FROM customer WHERE name="customer1";', (error, results) => {
    if (error) {
        console.error('Error retrieving data from database:', error);
    } else {
        res.send(results)
    }
  });

})

app.get('/getbox',(req,res)=>{

  pool.query('SELECT SUM(\`box count\`) AS sum_of_box FROM customer WHERE name="customer1";', (error, results) => {
    if (error) {
        console.error('Error retrieving data from database:', error);
    } else {
        res.send(results)
    }
  });

})

app.get('/getquantity2',(req,res)=>{

  pool.query('SELECT SUM(`quantity`) AS sum_of_quantity FROM customer WHERE name="customer2";', (error, results) => {
    if (error) {
        console.error('Error retrieving data from database:', error);
    } else {
      res.send(results)
    }
  });
})
app.get('/getweight2',(req,res)=>{

  pool.query('SELECT SUM(`weight`) AS sum_of_weight FROM customer WHERE name="customer2";', (error, results) => {
    if (error) {
        console.error('Error retrieving data from database:', error);
    } else {
        res.send(results)
    }
  });

})

app.get('/getbox2',(req,res)=>{

  pool.query('SELECT SUM(\`box count\`) AS sum_of_box FROM customer WHERE name="customer2";', (error, results) => {
    if (error) {
        console.error('Error retrieving data from database:', error);
    } else {
        res.send(results)
    }
  });

})

// Start the Express.js server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
