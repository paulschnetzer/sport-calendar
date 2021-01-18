import Calendar from './components/Calendar';
import React, { useState } from 'react';
import InputModal from './components/InputModal';
import DetailModal from './components/DetailModal';
function App() {
  const [inputModal, setInputModal] = useState(false);
  const [sportTypes, setSportTypes] = useState([]);
  return (
    <div>
      <Calendar
        setInputModal={setInputModal}
        sportTypes={sportTypes}
        setSportTypes={setSportTypes}
      />
      <DetailModal />
      <InputModal
        inputModal={inputModal}
        setInputModal={setInputModal}
        sportTypes={sportTypes}
      />
    </div>
  );
}

export default App;
