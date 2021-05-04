import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const CountrySelect = (props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/countries')
    .then( resp => {
      setCountries(resp.data.data);
    })
    .catch( resp => console.log(resp));
  }, [])

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    }
    document.body.addEventListener('click', onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true });
    };
  }, [])
  
  const renderedOptions = countries.map((option) => {
    if (option.attributes.id === props.country[0][1]) {
      return null;
    }
  
    return(
      <div key={option.attributes.name} 
        className="item" 
        onClick={() => {
          props.setCountry(Object.entries(option.attributes))
        }} 
      >
        {option.attributes.name}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Country:</label>
        <div 
          onClick={() => {setOpen(!open)}}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{props.country === 'Select a country' ? props.country : props.country[1][1]}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`} >
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountrySelect;