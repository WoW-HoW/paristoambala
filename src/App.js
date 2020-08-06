import React from "react";
import './index.css'
import abc from './st.js'
import Rafale from './design/rafale_path.png'
import Plane from "./design/plane.png"
class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state ={
			abc,
			xd:0,
			left:['7%','7%','7%','7%','7%','7%'],
			top:['10%','10%','10%','10%','10%','10%'],
		};
	}

	render() {
		let bbb=this.state.xd
		const pp=[[
		['84.5%','7%','7%','7%','7%'],['68.5%','10%','10%','10%','10%']],[
		['84.5%','7%','7%','7%','7%'],['68.5%','10%','10%','10%','10%']],[
		['84.5%','84.5%','7%','7%','7%'],['68.5%','68.5%','10%','10%','10%']],[
		['84.5%','84.5%','84.5%','7%','7%'],['68.5%','68.5%','68.5%','10%','10%']],[
		['84.5%','84.5%','84.5%','84.5%','7%'],['68.5%','68.5%','68.5%','68.5%','10%']],[
		['84.5%','84.5%','84.5%','84.5%','84.5%'],['68.5%','68.5%','68.5%','68.5%','68.5%']]
		]
		const handleClick=(e)=>{
			let xy=Math.min(5,bbb+1)
			this.setState({
				xd:xy,
				left:pp[xy][0],
				top:pp[xy][1],
			});

				
			}

		
		var sectionStyle = {
			position:"absolute",
			width: "1300px",
			height: "768px",
			backgroundImage: `url(${Rafale})`
		};
		var styll0 ={
			top:this.state.top[0],
			left:this.state.left[0],
			color: this.state.abc[0].fcol,
			position:"absolute"
		}
		var styll1 ={
			top:this.state.top[1],
			left:this.state.left[1],
			color: this.state.abc[1].fcol,
			position:"absolute"
		}
		var styll2 ={
			top:this.state.top[2],
			left:this.state.left[2],
			color: this.state.abc[2].fcol,
			position:"absolute"
		}
		var styll3 ={
			top:this.state.top[3],
			left:this.state.left[3],
			color: this.state.abc[3].fcol,
			position:"absolute"
		}
		var styll4 ={
			top:this.state.top[4],
			left:this.state.left[4],
			color: this.state.abc[4].fcol,
			position:"absolute"
		}
		
		if(this.state.xd===5){
		
		 return (
		 	
		 	<h1>All Rafale Planes Delivered</h1>
		 	) 
		}
		return (
			<div id="App">

			<section style={ sectionStyle }>
     		<div>
					<img 
						alt="plane1"
						src={Plane}
						className="smallcs" 
						style={styll0}>
					</img>
					<img 
					alt="plane2"
						src={Plane}
						className="smallcs" 
						style={styll1}>
					</img>
					<img 
					alt="plane3"
						src={Plane}
						className="smallcs" 
						style={styll2}>
					</img>
					<img 
					alt="plane4"
						src={Plane}
						className="smallcs" 
						style={styll3}>
					</img>
					<img 
					alt="plane5"
						src={Plane}
						className="smallcs" 
						style={styll4}>
					</img>
					
					</div>
     		</section>
			<button onClick={handleClick} className="launch" >Launch Rafale</button>
			</div>
		)
	}
}
export default App
