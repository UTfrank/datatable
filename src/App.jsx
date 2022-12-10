import { useState, useEffect } from 'react'
import Table from './components/Table.component'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  

  return (
    <div className="App">
      <h1>React Datatable</h1>
      <div className="table-container shadow-sm">
          <Table />
      </div>
    </div>
  )
}

export default App
