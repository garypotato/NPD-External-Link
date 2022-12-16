import './App.css';
import { useState } from 'react';

function App() {

  const [jwt, setJwt] = useState("")
  const [propertyId, setPropertyId] = useState("101019754")

  const handleJWT = (e) => {
    setJwt(e.target.value)
  }

  const handlePropertyId = (e) => {
    setPropertyId(e.target.value)
  }

  const handleCmaLink = () => {
    fetch(`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/cma/sales`, {
      method: "GET",
      headers: {
        'authorization': `JWT ${jwt}`
      },
      redirect: 'manual',
      credentials: 'include',
    }).then(response => {
      console.log(response)
      window.open(response.url, '_blank');
    }).catch(err => console.log(err))
  }

  const handleSoiLink = () => {
    fetch(`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/cma/soi`, {
      method: "GET",
      headers: {
        'authorization': `JWT ${jwt}`
      },
      redirect: 'manual',
      credentials: 'include',
    }).then(response => {
      console.log(response)
      window.open(response.url, '_blank');
    }).catch(err => console.log(err))
  }

  const handleNeighborhoodLink = () => {
    fetch(`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/neighborhood`, {
      method: "GET",
      headers: {
        'authorization': `JWT ${jwt}`
      },
      redirect: 'manual',
      credentials: 'include',
    }).then(response => {
      console.log(response)
      window.open(response.url, '_blank');
    }).catch(err => console.log(err))
  }

  return (
    <div className="App">
      <div className='flexBox'>
        <div>propertyId</div>
        <input className='secondEle' onChange={handlePropertyId} value={propertyId} />
      </div>
      <div className='flexBox'>
        <div>JWT:</div>
        <input className='secondEle' onChange={handleJWT} value={jwt} />
      </div>

      <div>
        <div className='flexBox'>
          <div>CMA Report:</div>
          <div className='secondEle' onClick={handleCmaLink}>{`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/cma/sales`}</div>
        </div>
      </div>

      <div>
        <div className='flexBox'>
          <div>SOI:</div>
          <div className='secondEle' onClick={handleSoiLink}>{`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/cma/soi`}</div>
        </div>
      </div>

      <div>
        <div className='flexBox'>
          <div>Neighborhood Report:</div>
          <div className='secondEle' onClick={handleNeighborhoodLink}>{`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/neighborhood`}</div>
        </div>
      </div>
    </div>
  );
}

export default App;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjMsImFnZW5jeUlkIjo5OTk5OTksImFjY2x2bCI6NCwic2xzbHZsIjoiU1RBRkYiLCJjbGllbnQiOiIzIiwicGkiOnRydWUsImNtaSI6dHJ1ZSwiYXZtYWNjZXNzIjp0cnVlLCJleHBpcmV3YXJuaW5nIjo1LCJpYXQiOjE2NzA1NDI3NzAsImV4cCI6MTY3MDYwNTE5OX0.J5xdEucE4WzIFK2Q1N1gk-9H5uN9YwhkQK3s86M7lhw