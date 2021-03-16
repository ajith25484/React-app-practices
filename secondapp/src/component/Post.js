import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';

const Post= () => {
    return(
        <Fragment>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2>Profile page</h2>
                </div>
                <div className="panel-body">
                    <div className="jumbotron">
                        <h2>Profile page</h2>
                        <div>
                            <h4>JavaScript</h4>
                            <Link to="/post/JavaScript">Details</Link>
                        </div>
                        <div>
                            <h4>React</h4>
                            <Link to="/post/React">Details</Link>
                        </div>
                        <div>
                            <h4>Node</h4>
                            <Link to="/post/Node">Details</Link>
                        </div><div>
                            <h4>Angular</h4>
                            <Link to="/post/Angular">Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Post;
