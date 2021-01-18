import Calendar from './components/Calendar';
import React, { useState } from 'react';
import InputModal from './components/InputModal';
import DetailModal from './components/DetailModal';
function App() {
  const [inputModal, setInputModal] = useState(false);
  return (
    <div>
      <Calendar setInputModal={setInputModal} />
      <DetailModal />
      <InputModal inputModal={inputModal} setInputModal={setInputModal} />
    </div>
  );
}

export default App;
