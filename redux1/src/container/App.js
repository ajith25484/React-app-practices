import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import{movieList} from '../actions'
import DisplayList from '../component/DisplayList'


class App extends Component {

    //calling action
    componentDidMount(){
        this.props.movieList()
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayList datalist={this.props.mydata}/>
            </div>
        )
    }

}

//helps to receive state from store
function mapStateToProps(state){
        console.log(state);
        return{
            mydata:state.movies
        }
}
//helps to dispatch action
function mapDispatchToProps(dispatch){
    return bindActionCreators({movieList},dispatch)

}


export default connect(mapStateToProps,mapDispatchToProps)(App)