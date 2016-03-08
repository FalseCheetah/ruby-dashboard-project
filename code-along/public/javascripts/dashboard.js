import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    
    
  }
  
  
  renderWidgets() {
		return this.props.widgets.map( widget => {
			return (
				<li className="list-group-item" key={widget.id}>
					<Link to={"posts/" + widget.id}>
            <span className="pull-xs-right">
              {widget.categories }
            </span>
						<strong>{ widget.title }</strong>
					</Link>
				</li>
			);
		});
	}
  
  render() {
    
  }
}