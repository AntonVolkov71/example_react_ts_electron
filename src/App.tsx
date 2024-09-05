import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Button } from 'react-bootstrap';  // Импортируем компонент Button из React Bootstrap
import Home from '@/views/Home';
import About from '@/views/About';
import Contact from '@/views/Contact';
import NotFound from '@/views/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useActions } from '@/redux/store/hooks/useActions';
import { useTypedSelector } from '@/redux/store/hooks/useTypedSelector';
import { TestUI } from '@/views/UI/TestUI'; // Импортируем Bootstrap стили

function App() {
  const { testActions } = useActions();
  const { value } = useTypedSelector(state => state.test);
  // Создаем стейт для двух чекбоксов
  const [checkboxState, setCheckboxState] = useState({
    checkbox1: false,
    checkbox2: false,
  });

  console.log('ENV REACT_APP_TEST_KEY:', process.env.REACT_APP_TEST_KEY);

  // Обработчик изменения состояния чекбоксов
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setCheckboxState(prevState => ({
      ...prevState,
      [id]: checked,
    }));
  };

  // Обработчик нажатия кнопки
  const handleButtonClick = () => {
    const text = 'hello ' + (new Date()).toISOString();
    testActions(text);
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">React Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        <p>
          Value click {value}
        </p>
        {/* Кастомизированная кнопка с обработчиком клика */}
        <div className="mt-4">
          <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#0056b3' }}
                  onClick={handleButtonClick}>
            Click Me
          </Button>
        </div>


        <TestUI
          width={'120px'}

        />
        {/* Flexbox для чекбоксов */}
        <div className="d-flex flex-row mt-3">
          <div className="form-check me-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox1"
              checked={checkboxState.checkbox1}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="checkbox1">
              Checkbox 1
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox2"
              checked={checkboxState.checkbox2}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="checkbox2">
              Checkbox 2
            </label>
          </div>
        </div>

        {/* Отображение состояния чекбоксов */}
        <div className="mt-3">
          <p>Checkbox 1 is {checkboxState.checkbox1 ? 'checked' : 'unchecked'}</p>
          <p>Checkbox 2 is {checkboxState.checkbox2 ? 'checked' : 'unchecked'}</p>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
