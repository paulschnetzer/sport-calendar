/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { Calendar as CalendarLibary } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  getAllEvents,
  getSportTypes,
  getFilteredEvents,
} from '../util/fetchData';
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
  const [filter, setFilter] = useState('default');
  const [sportTypes, setSportTypes] = useState([]);

  const handletitleClassName = (value) => {
    if (mark.find((x) => x === moment(value.date).format('DD.MM.YYYY'))) {
      return 'highlight';
    }
  };

  const handleOnChange = (date) => {
    setDate(date);
  };

  useEffect(() => {
    if (filter === 'default') {
      getAllEvents(setFinalState);
    } else {
      getFilteredEvents(parseInt(filter), setFinalState);
    }
  }, [filter]);
  useEffect(() => {
    getSportTypes(setSportTypes);
  }, []);

  useEffect(() => {
    setMark(finalState.map((sportEvent) => sportEvent.sportDate));
  }, [finalState]);

  return (
    <div css={styles()}>
      <div>
        <select name="cars" onChange={(e) => setFilter(e.target.value)}>
          <option value="default">Alle Sportarten</option>
          {sportTypes.map((sportType, index) => {
            return (
              <option key={index} value={sportType.id}>
                {sportType.sport_type}
              </option>
            );
          })}
        </select>
      </div>
      <CalendarLibary
        onChange={handleOnChange}
        value={date}
        tileClassName={(e) => handletitleClassName(e)}
      />
    </div>
  );
}
