import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import{ Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'

function App() {
  const [data, setData] = useState([])
  const url='https://jsonplaceholder.typicode.com/users'

  useEffect(() =>{
    axios.get(url)
    .then(res => setData(res.data))
  },[])

  // function Profiler() {
    // Get the userId param from the URL.
    // let { idItem }  = useParams();
    // ...
  // }

  return (
    
    // <div className="App">
    //       <Navbar/>
    //       <Footer/>         
    // </div>
    <Routes className="App">
      <Route path='/' element={<Home />}/>
      <Route path='/dentist' element={<Detail />} >
          <Route path=':idItem' element={<Detail />}/>
      </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/favs' element={<Favs />}/>
      {/* <Route path='*' element={<NotFound/>}/> */}
    </Routes>   

  )
}
export default App
