//Get Default State
//Set Default State
//Before get Created
//Render
//After get Created

import React, { Component, Fragment } from 'react';

class LifeCycle extends Component{

    //1 get default state
    constructor(props){
        super(props)

    //2 set default state
        this.state={
            title:"LifeCycle"
        }

        console.log(">>>>>>inside Constructor<<<<<<");
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(">>>>>>inside shouldComponentUpdate<<<<<<");
        if(nextState.title===this.state.title){
            return false
        }else{
            return true
        } 
    }

    //3 before get created
    componentWillMount(){
        console.log(">>>>>>>>inside componentWillMount<<<<<");
    }

    componentWillUpdate(){
        console.log(">>>>>>>>inside componentWillUpdate<<<<<")
    }

    componentDidUpdate(){
        console.log(">>>>>>>>inside componentDidUpdate<<<<<");
    }


    //4 render function
    render(){
        console.log(">>>>>>>>inside render<<<<<<<<");
        const data = this.state
        return(
            <Fragment>
                <div>{data.title}</div>
                <div className="btn btn-success"
                onClick={() =>{this.setState({title:"somethig else"})}}>
                    Click Me
                </div>
            </Fragment>
        )
    }

    //5 after get created 
    componentDidMount(){
        console.log(">>>>>>>inside componentDidMount<<<<<<<");
    }

    componentWillUnmount(){
        alert("Do you Want to Leave");
    }
}


export default LifeCycle;