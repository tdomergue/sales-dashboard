import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const CountrySelect = (props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const [countries, setCountries] = useState([]);

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

  
  useEffect(() => {
    axios.get('/api/v1/sales')
    .then( resp => {
      setCountries(resp.data.countries);
    })
    .catch( resp =>  console.log(resp))
  }, [])
  
  const renderedOptions = countries.map((option) => {
    if (option === props.country) {
      return null;
    }
  
    return(
      <div key={option} 
        className="item" 
        onClick={() => {
          props.setCountry(option)
        }} 
      >
        {option}
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
          <div className="text">{props.country}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`} >
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountrySelect;