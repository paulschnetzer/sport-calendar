import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { handleDelete } from '../util/fetchData';
import close from '../img/close.svg';

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
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    border: none;
    button {
      background-color: #f03535;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      letter-spacing: 1.3px;
      transition: 0.2s ease-in;
      :hover {
        background-color: #ff5757;
      }
    }
    td,
    th {
      text-align: left;
      padding: 8px;
      text-align: center;
      vertical-align: middle;
    }
    tr:nth-child(even) {
      background-color: #dddddd;
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

export default function DetailModal(props) {
  const sortedFinalState = props.finalState
    .filter((sportEvent) => sportEvent.sportDate === props.selectedDate)
    .sort((a, b) => {
      return a.sportTime.localeCompare(b.sportTime);
    });

  if (!props.detailModal) return null;
  return (
    <>
      <div css={overlay()}>
        <div css={styles()}>
          <button onClick={() => props.setDetailModal(false)} className="close">
            <img src={close} alt="close" />
          </button>
          <table>
            <tr>
              <th>Uhrzeit</th>
              <th>Datum</th>
              <th>Title</th>
              <th>Sportart</th>
            </tr>
            {sortedFinalState
              ? sortedFinalState.map((sportEvent, index) => {
                  return (
                    <tr key={index}>
                      <td>{sportEvent.sportTime}</td>
                      <td>{sportEvent.sportDate}</td>
                      <td>{sportEvent.sportEvent}</td>
                      <td>{sportEvent.sportType}</td>
                      <td>
                        <button
                          onClick={() =>
                            handleDelete(
                              sportEvent.id,
                              props.setFinalState,
                              props.finalState,
                            )
                          }
                        >
                          Löschen
                        </button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </table>
        </div>
      </div>
    </>
  );
}
