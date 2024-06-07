import React from 'react'
import galaxy from '../images/galaxyHeader.png'
export default class Image extends React.Component {
    render() {
        return (
            <div>
                <img src={galaxy} alt="" width="100%" />
            </div>
        )
    }
}
