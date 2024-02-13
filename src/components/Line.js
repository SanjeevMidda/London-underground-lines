import React, { useState } from 'react'

function Line({backgroundColor, lineName}) {

    let styles = {
        backgroundColor: backgroundColor,
    }

    const [status, setStatus] = useState(false);

  return (
    <div className="lineContainer">
        {status && <h3>{lineName}</h3>}
        <div className="line" style={styles} onClick={() => {setStatus(!status)}}></div>
    </div>
  )
}

export default Line