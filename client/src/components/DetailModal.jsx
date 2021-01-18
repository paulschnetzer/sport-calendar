import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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
  const filteredFinalState = props.finalState.filter(
    (sportEvent) => sportEvent.sportDate === props.selectedDate,
  );
  console.log(filteredFinalState);

  if (!props.detailModal) return null;
  return (
    <>
      <div css={overlay()}>
        <div css={styles()}>
          <button onClick={() => props.setDetailModal(false)}>close</button>
          <h1>Hello Wolrd</h1>
        </div>
      </div>
    </>
  );
}
