import React from 'react'

const Logout = () => {
  return (
    <>
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold">Logout</h2>
      <p className="text-zinc-500">Are you sure you want to logout?</p>

      <button className="bg-primary text-white px-8 py-4 rounded-full">
        Yes, Logout
      </button>
    </div>
    </>
  )
}

export default Logout