import Calendar from './components/Calendar';
import React, { useState } from 'react';
import InputModal from './components/InputModal';
import DetailModal from './components/DetailModal';
function App() {
  const [finalState, setFinalState] = useState([]);
  const [inputModal, setInputModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [sportTypes, setSportTypes] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div>
      <Calendar
        finalState={finalState}
        setFinalState={setFinalState}
        setInputModal={setInputModal}
        sportTypes={sportTypes}
        setSportTypes={setSportTypes}
        setDetailModal={setDetailModal}
        setSelectedDate={setSelectedDate}
      />
      <DetailModal
        finalState={finalState}
        setFinalState={setFinalState}
        detailModal={detailModal}
        setDetailModal={setDetailModal}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <InputModal
        inputModal={inputModal}
        setInputModal={setInputModal}
        sportTypes={sportTypes}
      />
    </div>
  );
}

export default App;
