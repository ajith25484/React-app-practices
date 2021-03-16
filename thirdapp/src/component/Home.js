import React,{Component,Fragment} from 'react';
import Banner from './Banner';
import Artist from './Artist';

const url = "http://localhost:8900/artists/"

class Home extends Component {
    constructor(){
        super()

        this.state={
            artist:''
        }
    }

    render(){
        return(
            <Fragment>
                <Banner/>
                <Artist artistData={this.state.artist}/>
            </Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({artist:data})
        })
    }
}

export default Home;