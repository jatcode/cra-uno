import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as actionCreators  from '../actions/actions';
import Main from '../components/Main';


function mapStateToProps(state){
    return {
			mytodos: state.mytodos,
      currTodo: state.currTodo, 
		};
}

function mapDispatchToProps(dispatch){
		return bindActionCreators(actionCreators, dispatch);
}

const App = connect (mapStateToProps,mapDispatchToProps)(Main);

export default App;
