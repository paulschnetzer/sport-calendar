import React, { useState } from 'react';
import { Calendar as CalendarLibary } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calendar() {
  const [date, setDate] = useState(new Date());

  const handleOnChange = (date) => {
    setDate(date);
  };
  console.log(date);

  return (
    <div>
      <CalendarLibary onChange={handleOnChange} value={date} />
    </div>
  );
}
