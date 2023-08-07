import Header from './components/header'
import Index from './pages/Index'
import Details from './pages/Details'
import Footer from './components/Footer'

import './App.css'

import {Routes, Route} from "react-router-dom"

function App() {

return (
	<div className="AppDiv bg-slate-900 min-h-screen">
		<Header/>
		<Routes>
			<Route path="/" element={<Index/>} />
			<Route path="/Details/:id" element={<Details/>} />
			<Route path="/*" element={<Index/>} />
		</Routes>
		<Footer/>
	</div>
)
}

export default App
