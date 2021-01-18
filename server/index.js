const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json());

app.post('/events', async (req, res) => {
  try {
    const { sportEvent, sportDate, sportTime, sportTypeId } = req.body;
    const newEvent = await pool.query(
      'INSERT INTO events(sport_event, sport_date, sport_time, sport_type_id)VALUES($1, $2, $3, $4) RETURNING *',
      [sportEvent, sportDate, sportTime, sportTypeId],
    );
    res.json(newEvent.rows);
  } catch (error) {
    console.error(err.message);
  }
});

app.get('/events', async (req, res) => {
  try {
    const allEvents = await pool.query(
      'SELECT events.id, events.sport_event, events.sport_date, events.sport_time, sport_types.sport_type FROM events, sport_types WHERE sport_types.id = events.sport_type_id;',
    );
    res.json(allEvents.rows);
  } catch (error) {
    console.error(err.message);
  }
});
app.get('/sportTypes', async (req, res) => {
  try {
    const allEvents = await pool.query('SELECT * FROM sport_types');
    res.json(allEvents.rows);
  } catch (error) {
    console.error(err.message);
  }
});

app.get('/filter/:sportType', async (req, res) => {
  try {
    const { sportType } = req.params;
    const event = await pool.query(
      'SELECT * FROM events, sport_types WHERE sport_types.id = events.sport_type_id AND events.sport_type_id = $1;',
      [sportType],
    );
    res.json(event.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete('/events/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await pool.query('DELETE FROM events WHERE id=$1', [
      id,
    ]);
    res.json('Event was deleted');
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log('server has started');
});
