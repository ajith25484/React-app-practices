
import React from 'react'

const listMovies = (props) => {
    const renderlist=({datalist}) => {
        if(datalist){
            return datalist.map((item) => {
                return(
                    <div key={item.key}>
                        {item.name}
                    </div>
                )
            })
        }
    }

    return(
        <div>
            {renderlist(props)}    
        </div>
    )
}

export default listMovies;