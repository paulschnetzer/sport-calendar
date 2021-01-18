/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { handleInsert } from '../util/fetchData';
import plus from '../img/plus.svg';
import close from '../img/close.svg';
import sport from '../img/sport.svg';
import calendar from '../img/calendar.svg';
const styles = () => css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 80vw;
  z-index: 1000;
  background-color: white;
  border-radius: 10px;
  font-size: 80%;
  .close {
    padding: 0;
    margin: 0;
    height: 30px;
    border: none;
    background-color: transparent;
    float: right;
    margin-top: -10px;
    margin-right: -10px;
  }
  img {
    height: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input[type='text'] {
      width: 400px;
      border-radius: 0;
      border: none;
      border-bottom: 1px solid grey;
      font-size: 150%;
      padding-left: 5px;
      margin: 50px 0;
    }
    .sport-type-section {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 300px;
      margin-bottom: 50px;
      select {
        border-radius: 10px;
        padding: 10px 20px;
        :focus {
          border-radius: 10px 10px 0 0;
        }
      }
    }
    .time-date-section {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 50px;
      input {
        padding: 10px 20px;
        border-radius: 10px;
        outline: 0;
        margin: 0 5px;
      }
      img {
        margin-right: 40px;
      }
    }
    .submit {
      background-color: #6567d8;
      color: white;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      font-size: 120%;
      letter-spacing: 1.3px;
      transition: 0.2s ease-in;
      img {
        height: 20px;
        margin-right: 10px;
      }
      :hover {
        background-color: #7a7cf5;
      }
    }
  }
`;
const overlay = () => css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

export default function InputModal(props) {
  const [sportEvent, setSportEvent] = useState('');
  const [sportType, setSportType] = useState('');
  const [sportTime, setSportTime] = useState('');
  const [sportDate, setSportDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleInsert(sportEvent, sportDate, sportTime, sportType);
  };

  if (!props.inputModal) return null;

  return (
    <>
      <div css={overlay()}>
        <div css={styles()}>
          <button onClick={() => props.setInputModal(false)} className="close">
            <img src={close} alt="close" />
          </button>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Titel einfügen"
              value={sportEvent}
              onChange={(e) => setSportEvent(e.target.value)}
              required
            />
            <div className="sport-type-section">
              <img alt="sport" src={sport} />
              <select onChange={(e) => setSportType(e.target.value)}>
                <option value="none">Alle Sportarten</option>
                {props.sportTypes.map((sportType, index) => {
                  return (
                    <option key={index} value={sportType.id}>
                      {sportType.sport_type}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="time-date-section">
              <img alt="calendar" src={calendar} />
              <input
                type="time"
                required
                value={sportTime}
                onChange={(e) => setSportTime(e.target.value)}
              />
              <input
                type="date"
                required
                value={sportDate}
                onChange={(e) => setSportDate(e.target.value)}
              />
            </div>

            <button className="submit">
              <img src={plus} alt="plus" />
              Hinzufügen
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
