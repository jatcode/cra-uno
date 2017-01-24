import React,{Component} from 'react';

export default class Lista extends Component {
	componentDidMount() {
		
		console.log('this props en LISTA',this.props)
	}
	

    render() {
        return (
            <div className="class-name">
                content
            </div>
        );
    }
}