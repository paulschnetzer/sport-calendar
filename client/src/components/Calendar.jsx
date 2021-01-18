/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { Calendar as CalendarLibary } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getAllEvents } from '../util/fetchData';
import moment from 'moment';

const styles = () => css`
  .react-calendar {
    width: 350px;
    .react-calendar__tile--active {
      background-color: #6567d8;
    }
    .highlight:after {
      content: ' ●';
      color: #6567d8;
    }
  }
`;

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const [finalState, setFinalState] = useState([]);
  const [mark, setMark] = useState([]);

  const handletitleClassName = (value) => {
    if (mark.find((x) => x === moment(value.date).format('DD.MM.YYYY'))) {
      return 'highlight';
    }
  };

  const handleOnChange = (date) => {
    setDate(date);
  };
  console.log(date);
  console.log(finalState);

  useEffect(() => {
    getAllEvents(setFinalState);
  }, []);
  useEffect(() => {
    setMark(finalState.map((sportEvent) => sportEvent.sportDate));
  }, [finalState]);

  return (
    <div css={styles()}>
      <CalendarLibary
        onChange={handleOnChange}
        value={date}
        tileClassName={(e) => handletitleClassName(e)}
      />
    </div>
  );
}
