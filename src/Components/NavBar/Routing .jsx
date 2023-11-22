import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Navbar from './Navbar'
const Routing  = () => {
  return (
    <div>
       <Navbar/>
       <section>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/'/>
            </Routes>
       </section>
    </div>

  )
}

export default Routing 