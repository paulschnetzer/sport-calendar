import camelcaseKeys from 'camelcase-keys';
export const getAllEvents = async (setState) => {
  try {
    const response = await fetch('http://localhost:5000/events');
    const jsonData = await response.json();
    setState(camelcaseKeys(jsonData));
  } catch (err) {
    console.error(err.message);
  }
};

export const getFilteredEvents = async (sportType, setState) => {
  try {
    const response = await fetch(`http://localhost:5000/filter/${sportType}`);
    const jsonData = await response.json();
    setState(camelcaseKeys(jsonData));
  } catch (err) {
    console.error(err.message);
  }
};

export const handleDelete = async (id, setState, state) => {
  try {
    await fetch(`http://localhost:5000/events/${id}`, {
      method: 'DELETE',
    });
    setState(state.filter((event) => event.id !== id));
  } catch (err) {
    console.log(err.message);
  }
};

export const handleInsert = async (
  sportEvent,
  sportDate,
  sportTime,
  sportType,
) => {
  try {
    const body = {
      sportEvent,
      sportDate: sportDate.split('-').reverse().join('.'),
      sportTime,
      sportTypeId: parseInt(sportType),
    };
    console.log(body);
    await fetch('http://localhost:5000/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    window.location = '/';
  } catch (err) {
    console.error(err.message);
  }
};

export const getSportTypes = async (setState) => {
  try {
    const response = await fetch(`http://localhost:5000/sportTypes`);
    const jsonData = await response.json();
    setState(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};
