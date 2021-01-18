/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { Calendar as CalendarLibary } from 'react-calendar';
import plus from '../img/plus.svg';
import 'react-calendar/dist/Calendar.css';
import {
  getAllEvents,
  getSportTypes,
  getFilteredEvents,
} from '../util/fetchData';
import moment from 'moment';

const styles = () => css`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .button-container {
    width: 350px;
    display: flex;
    justify-content: space-between;
    select {
      border-radius: 10px;
      margin-bottom: 10px;
      padding: 10px 20px;
      :focus {
        border-radius: 10px 10px 0 0;
      }
    }
    button {
      background-color: #6567d8;
      color: white;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      font-size: 90%;
      letter-spacing: 1.3px;
      transition: 0.2s ease-in;
      :hover {
        background-color: #7a7cf5;
      }
      img {
        height: 20px;
        margin-right: 10px;
      }
    }
  }
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

export default function Calendar(props) {
  const [date, setDate] = useState(new Date());
  const [mark, setMark] = useState([]);
  const [filter, setFilter] = useState('default');

  const handletitleClassName = (value) => {
    if (mark.find((x) => x === moment(value.date).format('DD.MM.YYYY'))) {
      return 'highlight';
    }
  };

  const handleOnChange = (date) => {
    setDate(date);
    props.setDetailModal(true);
    props.setSelectedDate(moment(date).format('DD.MM.YYYY'));
  };

  useEffect(() => {
    if (filter === 'default') {
      getAllEvents(props.setFinalState);
    } else {
      getFilteredEvents(parseInt(filter), props.setFinalState);
    }
  }, [filter]);

  useEffect(() => {
    getSportTypes(props.setSportTypes);
  }, []);

  useEffect(() => {
    setMark(props.finalState.map((sportEvent) => sportEvent.sportDate));
  }, [props.finalState]);

  return (
    <div css={styles()}>
      <div className="button-container">
        <button onClick={() => props.setInputModal(true)}>
          <img src={plus} alt="plus" />
          Hinzufügen
        </button>
        <select name="cars" onChange={(e) => setFilter(e.target.value)}>
          <option value="default">Alle Sportarten</option>
          {props.sportTypes.map((sportType, index) => {
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
