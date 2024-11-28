import React from 'react'
import Home from './components/Home'
import Login from './pages/Login '

const App=()=> {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
        <div className=" flex-col space-y-4 items-center bg-slate-300 px-40 py-20 rounded-lg">
            <h1 className="font">Login pages</h1>
            <form className=" ">
                <br />
                <input    type="email "  placeholder="Email"/><br />
                <br />
                <input  type="password"  placeholder="password"/><br/>
                <br />
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default App
 