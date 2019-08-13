import React from 'react';

class CardList extends React.Component {
	render() {
		var {title, description, p_text1, p_text2} = this.props;
		return(
			<div className="card">
      			<h2>{title}</h2>
      			<h5>{description}</h5>
      			<div className="fakeimg" style={{height:'200px'}}>Image</div>
      			<p><b>{p_text1}</b></p>
      			<p>{p_text2}</p>
    		</div>
			);
	}
}

export default CardList;