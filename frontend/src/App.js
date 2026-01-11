import React, { useEffect, useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/employees')
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);

  return (
    <div>
      <h2>Employee Management System</h2>
      <ul>
        {employees.map(e => (
          <li key={e.id}>{e.name} - {e.department}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
