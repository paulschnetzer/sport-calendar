import Calendar from './components/Calendar';
import React, { useState } from 'react';
import InputModal from './components/InputModal';
import DetailModal from './components/DetailModal';
function App() {
  const [inputModal, setInputModal] = useState(false);
  const [sportTypes, setSportTypes] = useState([]);
  const [detailModal, setDetailModal] = useState(false);
  return (
    <div>
      <Calendar
        setInputModal={setInputModal}
        sportTypes={sportTypes}
        setSportTypes={setSportTypes}
        setDetailModal={setDetailModal}
      />
      <DetailModal detailModal={detailModal} setDetailModal={setDetailModal} />
      <InputModal
        inputModal={inputModal}
        setInputModal={setInputModal}
        sportTypes={sportTypes}
      />
    </div>
  );
}

export default App;
