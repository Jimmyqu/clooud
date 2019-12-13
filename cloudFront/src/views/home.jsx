import React ,{useState} from 'react';
import { connect } from 'react-redux'

function HomeView(porps){
    // throw new Error('1')

    console.log(porps.state.num)
    return <div>
        <button>add</button>
    </div>
}

export default connect(state => ({ state: state }))(HomeView)