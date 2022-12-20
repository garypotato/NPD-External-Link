import './App.css';
import { useState } from 'react';

function App() {

  const [userId, setUserId] = useState("63")
  const [pwd, setPwd] = useState("")
  const [jwt, setJwt] = useState("")
  const [propertyId, setPropertyId] = useState("101019754")

  const handleUserId = (e) => {
    setUserId(e.target.value)
  }

  const handlePassword = (e) => {
    setPwd(e.target.value)
  }

  const handleLogin = () => {
    var myHeaders = new Headers();
    myHeaders.append("Accept-Language", "en-AU,en;q=0.9,zh-AU;q=0.8,zh;q=0.7,en-GB;q=0.6,en-US;q=0.5");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Sec-Fetch-Mode", "cors");
    myHeaders.append("Sec-Fetch-Site", "same-site");
    myHeaders.append("accept", "application/json");
    myHeaders.append("content-type", "application/x-www-form-urlencoded; charset=utf-8");

    var raw = `client=3&password=${pwd}&username=${userId}`;

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://auth.npdata.net.au/auth/session", requestOptions)
      .then(response => response.text())
      .then(result => setJwt(JSON.parse(result)["token"]))
      .catch(error => console.log('error', error));
  }

  const handlePropertyId = (e) => {
    setPropertyId(e.target.value)
  }

  const handleJwt = (e) => {
    setJwt(e.target.value)
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

  const handlePiSummaryLink = () => {
    fetch(`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/property/summary_report`, {
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

  const handlePiDetailLink = () => {
    fetch(`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/property/detailed`, {
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

  const handlePiHistoryLink = () => {
    fetch(`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/property/sales_history`, {
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

  const handlePiFullLink = () => {
    fetch(`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/property/property_full`, {
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

  const handleCMISummaryLink = () => {
    fetch(`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/cmi/summary`, {
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

  const handleCMIDetailLink = () => {
    fetch(`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/cmi/detailed`, {
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

  const handleCMIHistoryLink = () => {
    fetch(`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/cmi/sales_history`, {
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

  const handleCMIFullLink = () => {
    fetch(`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/cmi/full`, {
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
    <div className='App'>
      <div className='flexBoxColumn'>
        <div className='flexBoxRow'>
          <div>UserId:</div>
          <input value={userId} onChange={handleUserId} />
        </div>
        <div className='flexBoxRow'>
          <div>Password:</div>
          <input value={pwd} onChange={handlePassword} type="password" />
          <button onClick={handleLogin} className="lonInButton">Log in</button>
        </div>
      </div>

      <div className='flexBoxColumn'>
        <div className='flexBoxRow'>
          <div>propertyId</div>
          <input onChange={handlePropertyId} value={propertyId} />
        </div>
        <div className='flexBoxRow'>
          <div>JWT:</div>
          <input className='jwtContainer' value={jwt} onChange={handleJwt} />
        </div>
      </div>

      <div className='flexBoxColumn'>
        <div className='flexBoxRow'>
          <div>CMA Report:</div>
          <div onClick={handleCmaLink}>{`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/cma/sales`}</div>
        </div>

        <div className='flexBoxRow'>
          <div>SOI:</div>
          <div onClick={handleSoiLink}>{`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/cma/soi`}</div>
        </div>
      </div>

      <div className='flexBoxColumn'>
        <div className='flexBoxRow'>
          <div>PI Summary:</div>
          <div onClick={handlePiSummaryLink}>{`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/property/summary_report`}</div>
        </div>

        <div className='flexBoxRow'>
          <div>PI Detailed:</div>
          <div onClick={handlePiDetailLink}>{`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/property/detailed`}</div>
        </div>

        <div className='flexBoxRow'>
          <div>PI History:</div>
          <div onClick={handlePiHistoryLink}>{`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/property/sales_history`}</div>
        </div>

        <div className='flexBoxRow'>
          <div>PI Full:</div>
          <div onClick={handlePiFullLink}>{`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/property/property_full`}</div>
        </div>
      </div>

      <div className='flexBoxColumn'>
        <div className='flexBoxRow'>
          <div>CMI Summary:</div>
          <div onClick={handleCMISummaryLink}>{`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/cmi/summary`}</div>
        </div>

        <div className='flexBoxRow'>
          <div>CMI Detailed:</div>
          <div onClick={handleCMIDetailLink}>{`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/cmi/detailed`}</div>
        </div>

        <div className='flexBoxRow'>
          <div>CMI History:</div>
          <div onClick={handleCMIHistoryLink}>{`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/cmi/sales_history`}</div>
        </div>

        <div className='flexBoxRow'>
          <div>CMI Full:</div>
          <div onClick={handleCMIFullLink}>{`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/cmi/full`}</div>
        </div>
      </div>

      <div className='flexBoxColumn'>
        <div className='flexBoxRow'>
          <div>Neighborhood Report:</div>
          <div onClick={handleNeighborhoodLink}>{`https://apicore.npdata.net.au/api/v2/property/${propertyId}/reports/neighborhood`}</div>
        </div>
      </div>
    </div>
  );
}

export default App;