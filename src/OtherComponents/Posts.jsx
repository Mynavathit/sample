import React from 'react';

class Posts extends React.Component {
	render() {
			let {title1, title2, title3}= this.props;
		return(
			<div className="card">
              <h3>Popular Post</h3>
              <div className="fakeimg"><p>{title1}</p></div>
              <div className="fakeimg"><p>{title2}</p></div>
              <div className="fakeimg"><p>{title3}</p></div>
            </div>
			);
	}
}

export default Posts;