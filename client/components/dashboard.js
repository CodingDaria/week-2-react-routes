import React from 'react'

import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/9f18bcb6-23ee-42a2-a261-4152ddc8985a">Go To Profile</Link>
      <Link to="/dashboard/main">Go To Main</Link>
      {/* <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          This is dummy component
        </div>
      </div> */}
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
