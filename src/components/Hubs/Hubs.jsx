import React from 'react'
import{useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getHubs} from '../../actions/HubsActions'

const Hubs = (hubs, getHubs) => {

    useEffect(() => {
        getHubs()
    }, [])

    return (
        <div>
            <h1>Hubs</h1>
            <ul>
                {hubs.hubs.map(hub => <li>{hub.name}</li>)}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        hubs: state.hubs
    }
}

export default connect(mapStateToProps, {getHubs})(Hubs)