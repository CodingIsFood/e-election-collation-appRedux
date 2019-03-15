import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addState} from '../../actions/displayStateResultsAction.js'

class AddStateResult extends Component {

  render() {
    return (
    	<div class="container">
        <form onSubmit={this.props.handleSubmit}>
        	<br />
        	<h2>Add State</h2>
            <div class="form-group">
        		<label for="nameofstate">Name of State: </label>
        		<select class="form-control" onChange={this.props.handleChange} name='nameofstate' value={this.props.nameofstate}>
					<option value=''>-- Please select a state --</option>
					<option value='Abia'>Abia State</option>
					<option value='Akwa-Ibom'>Akwa Ibom State</option>
					<option value='Anambra'>Anambra State</option>
					<option value='Benue'>Benue State</option>
				</select>
            </div>
				<br />
				<p><input type='text' placeholder='Please enter APC votes' name='apcVotes' onChange={this.props.handleChange} /></p>
				<p><input type='text' placeholder='Please enter PDP votes' name='pdpVotes' onChange={this.props.handleChange} /></p>
				<br />
				<input type="submit" value="Collate" />
        </form>


        </div>
    )
    }
}
    
AddStateResult.propTypes={
    addState: PropTypes.func.isRequired
}

 export default connect(null, {addState})(AddStateResult);
