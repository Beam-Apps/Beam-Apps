const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('build')); // Assuming 'build' is your React build output directory


app.get('/links', (req, res) => {
  fs.readFile('./src/links.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.post('/links', (req, res) => {
  fs.readFile('./src/links.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      let links = JSON.parse(data);
      links.push(req.body);

      fs.writeFile('./src/links.json', JSON.stringify(links), (err) => {
        if (err) {
          res.status(500).send('Error writing to file');
        } else {
          res.status(200).send('Link added');
        }
      });
    }
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));

