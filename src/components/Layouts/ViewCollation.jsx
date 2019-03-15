import React, {Component} from 'react'

class ViewCollation extends Component{

render(){
	return(
		<div>
			<button onClick={this.props.viewCollation}>View Collated Results</button>
		</div>
		)
	}
}

export default ViewCollation;