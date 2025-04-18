// src/Dropdowns.js
import React, { useState, useEffect } from 'react';
import { database } from './firebaseConfig';
import { ref, set, onValue } from 'firebase/database';

const Dropdowns = () => {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);

  useEffect(() => {
    const value1Ref = ref(database, 'dropdowns/value1');
    const value2Ref = ref(database, 'dropdowns/value2');

    onValue(value1Ref, (snapshot) => {
      const val = snapshot.val();
      if (val !== null) setValue1(val);
    });

    onValue(value2Ref, (snapshot) => {
      const val = snapshot.val();
      if (val !== null) setValue2(val);
    });
  }, []);

  const handleChange1 = (e) => {
    const val = parseInt(e.target.value);
    setValue1(val);
    set(ref(database, 'dropdowns/value1'), val);
  };

  const handleChange2 = (e) => {
    const val = parseInt(e.target.value);
    setValue2(val);
    set(ref(database, 'dropdowns/value2'), val);
  };

  return (
    <div>
      <label>
        Dropdown 1:
        <select value={value1} onChange={handleChange1}>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Dropdown 2:
        <select value={value2} onChange={handleChange2}>
          {[...Array(6)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Dropdowns;
