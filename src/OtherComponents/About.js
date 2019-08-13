import React from 'react';

class About extends React.Component {
	render() {
		var {title, p_text1} = this.props;
		return(
			<div className="card">
      			<h2>{title}</h2>
      			<div className="fakeimg" style={{height:'100px'}}>Image</div>
      			<p>{p_text1}</p>
      		</div>
			);
	}
}

export default About;