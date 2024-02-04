import React, { useState,useEffect } from 'react';
import './App.css';

function Age_calculater() {
  const [birthdate, setBirthdate] = useState('');
  const [todayDate, setTodayDate] = useState(getDefaultTodayDate());
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  function getDefaultTodayDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return '${year}-${month}-${day}';
  }
  useEffect(() => {
    setTodayDate(getDefaultTodayDate());
  }, []);
  const [name,setname]=useState('');

  const calculateAge = () => {
      const birthDate = new Date(birthdate);
      const nowDate = new Date(todayDate);

      const milliseconds=nowDate-birthDate;
			const seconds=Math.round(milliseconds/1000);
			const minutes=Math.round(seconds/60);
			const hours=Math.round(minutes/60);
			const days=Math.round(hours/24);
			const week=Math.round(days/7);
			const months=Math.round(week/4.33);
			const years=Math.round(months/12);
    if(name===''){
        alert("Enter Your name..!");
    }else{
        setAge({ years, months, days, hours, minutes, seconds, milliseconds });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <form>
          <h1>Age calculation</h1>
          <div className="name">
            {/* Your input fields */}
            <h4>Name:</h4>
            <input type="text" name="" size="14" onChange={(e)=>setname(e.target.value)}></input>
            <h4>Birth Date:</h4>
            <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)}></input>
            <h4>Today Date:</h4>
            <input type="date" value={todayDate} onChange={(e) => setTodayDate(e.target.value)}></input>
          </div>
          <div className="btn">
            <input type="button" className="button" onClick={calculateAge} value="Age Calculator"></input>
          </div>
          <div className="main_details">
            {/* Display calculated age */}
            <div className="year">
              <h3>{age.years}</h3>
              <h4>Year:</h4>
            </div>
            <div className="year">
              <h3>{age.months}</h3>
              <h4>Month:</h4>
            </div>
            <div class="year">
              <h3>{age.days}</h3>
              <h4>Day:</h4>
            </div>
            <div class="year">
              <h3>{age.hours}</h3>
              <h4>Hours:</h4>
            </div>
            <div class="year">
              <h3>{age.minutes}</h3>
              <h4>Minute:</h4>
            </div>
            <div class="year">
              <h3>{age.seconds}</h3>
              <h4>Second:</h4>
            </div>
            <div class="year">
              <h3>{age.milliseconds}</h3>
              <h4>MiliSecond:</h4>
            </div>
            {/* Display other calculated values (days, hours, etc.) similarly */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Age_calculater;