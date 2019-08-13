import React from 'react';

class Links extends React.Component {
	render() {
			let {Link1, Link2, Link3,Link4}= this.props;
		return(
			<div className="topnav">
	          <a href="#">{Link1}</a>
	          <a href="#">{Link2}</a>
	          <a href="#">{Link3}</a>
	          <a href="#" style={{float:'right'}}>{Link4}</a>
	        </div>
			);
	}
}

export default Links;