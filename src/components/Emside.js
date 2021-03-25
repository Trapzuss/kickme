import React from 'react'

import '../components/css/emprostyle.css'

function Emside () {
  return (
    <>
      <div id='sidebar'>
        <div className='onStatus'>
          <span>status</span>
          <div className='circle'></div>
        </div>

        <div classNamecd='panel'>
          <button className='collapsible'>View options</button>
          <div className='content'>
            <p id='empy'>Employees</p>
            <p id='pstn'>Position</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Emside
