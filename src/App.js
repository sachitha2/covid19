import React,{useState,useEffect} from 'react';
import {
   FormControl,
   MenuItem,
   Select,
   Card,
   CardContent 

} from '@material-ui/core';
import './App.css';


function App() {
  const [countries,setCountries] = useState([
    'usa',
    'uk',
    'Sri lanka'
  ]);

  useEffect(() => {
    //async ->  send a req to server wait for it ,do somethins with info
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((res)=>res.json()
        ).then((data)=>{
        const countries = data.map((country) => (
          
          {name: country.country,
            value:country.countryInfo.iso2
          }
        ));

        setCountries(countries);


      })
    }

    getCountriesData();
  },[countries]);
  return (
    <div className="App"> 
      {/* Header */}
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className='app__dropdown'>
            <Select
              varient="outlined"
              value="abc"
            >

              {
                countries.map(c=>(
                  <MenuItem value={c.value}>
                    {c.name}
                  </MenuItem>
                ))
              }
            </Select>
        </FormControl>
      </div>
      
      {/* Title + select  input dropdown */}

      {/* Info box */}
      {/* Info box */}
      {/* Info box */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
