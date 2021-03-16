import React,{Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { latestNews,articleNews,galleryNews} from '../actions';
import { bindActionCreators} from 'redux';
import LatestDisplay  from '../component/Home/LatestDisplay';
import ArticleDisplay from '../component/Home/ArticleDisplay';
import GalleryDisplay from '../component/Home/GalleryDisplay';


class Home extends Component{
    componentDidMount(){
        this.props.latestNews()
        this.props.articleNews()
        this.props.galleryNews()
    }

    render(){
        return(
            <Fragment>
                <LatestDisplay ldata={this.props.datalist.latestData}/>
                <ArticleDisplay adata={this.props.datalist.articleData}/>
                <GalleryDisplay gdata={this.props.gallist.galleryData}/>
            </Fragment>
        )
    }
}


function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.articles,
        gallist:state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,articleNews,galleryNews}, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)