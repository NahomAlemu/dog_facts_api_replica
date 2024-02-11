import dogFacts from './dog_facts.js';
import express from 'express';

const app = express();
const port = 3005; 

app.get('/', (req, res) => {
  res.send('Dog Facts API');
});

app.get('/facts', (req, res) => {
    const { number } = req.query;
    let facts = dogFacts;
  
    // Error handling 
    if (number) {
        if (isNaN(Number(number))) {
            return res.status(400).json({ error: 'Invalid number parameter', success: false });
        }
        facts = dogFacts.slice(0, Number(number));
    }
  
    res.json({ facts, success: true });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
