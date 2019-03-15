import React, {Component} from 'react'

class DisplayStateResults extends Component{


render(){
	return(
		<div>
		    <table className="table table-bodered">
			    <tbody>
				    <tr>
					    <td width='100'>{this.props.name}</td>
					    <td width='50'>{this.props.apcVotes}</td>
					    <td width='50'>{this.props.pdpVotes}</td>
					</tr>
			    </tbody>
		    </table> 
    </div>
		)
	}
}

export default DisplayStateResults;