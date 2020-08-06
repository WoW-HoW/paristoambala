import React from "react";
import {NavLink} from "react-router-dom";
import './index.css'
import abc from './st.js'
// import { useSelector } from 'react-redux';

class Home extends React.Component {
	
	constructor(props) {
		super(props);
		this.state ={
			abc,
			xd:1,
			left:'93%',
			top:'47%',
		};
	}
	render() {
		//const skins=useSelector( state => state.abc)
		let bbb=this.state.xd
		let aaa=this.state.abc[bbb];
		const pp=[['86%','70%'],['93%','47%'],['73%','2%'],['13%','2%'],['-7%','45%'],['25%','88%'],['72%','84%']]
		const handleInc=(e)=>{
			let xy=Math.min(6,bbb+1)
			this.setState({
				xd:xy,
				left:pp[xy][0],
				top:pp[xy][1],
			});
		}
		const handleDec=(e)=>{
			let xx=Math.max(1,bbb-1)
			this.setState({
				xd:xx,
				left:pp[xx][0],
				top:pp[xx][1],
			});
		}
		const styll={
				height:bbb*18,
				position: 'relative',
				zIndex:'2',
				backgroundColor: aaa.fcol
				}
		return (
		
			<div className="row">
				<div className="boxed col s12 m3 offset-m1">
					<img 
					alt="collection_logo" 
					src={aaa.logo} 
					id='cl'
					/>
					<p id="coll">
					{aaa.collection}
					</p>
					<h3 
					id="name" 
					style={{color:aaa.fcol}}>{aaa.name}
					</h3>
					<p 
					id='tag'>{aaa.tag}
					</p>
					<p 
					id="price">${aaa.price}*
					</p>      
					<div className="parentElement">  
						<NavLink 
						to="/market/akfs" 
						className="btn waves-effect waves-light" 
						style={{backgroundColor:aaa.fcol}}>
						<p 
						id="aa">Buy Now
						</p>
						</NavLink>
					</div>
				</div>
					<div className="dot col s12 offset-m1 offset-s0" 
					style={{
						border: '1px solid #527F5D',
						backgroundImage: aaa.grad,
						}}>
			<img 
			alt="skin_image" 
			src={aaa.skin} 
			className="img-responsive" 
			id='skin'/>
			<div 
				className="inner-circle" 
				style={{borderColor: aaa.fcol}}>
					<div 
						className="smallcs" 
						style={{top:this.state.top,
								left:this.state.left,
								color: aaa.fcol}}>
					</div>
				</div>
			</div>
			<div className="controller right">
				<div className="fillbar" 
					style={styll}>
			</div>
			<button 
			id="add" 
			onClick={handleInc} 
			className="btn-small waves-effect waves-light white">{bbb}
			</button>
			<button 
			id="sub" 
			onClick={handleDec} 
			className="btn-small waves-effect waves-light white">6
			</button>
		</div>
	</div>
		)
	}
}
export default Home
