import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		if (loginStatus) {
			return (
				<div style={{marginTop:'56px'}}>写文章页面</div>
			)
		}else {
			return <Redirect to='/login'/>
		}
	}
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'loginStatus'])
})

export default connect(mapState, null)(Write);