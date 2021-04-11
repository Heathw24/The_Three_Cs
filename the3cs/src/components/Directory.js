import React, { Component } from 'react';
import Authenticate from './Authenticate';
import App from './App';
import axios from 'axios';



class Directory extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        axios({
            method: "get",
            withCredentials: true,
            url: "http://localhost:4000/user",
        }).then((res) => this.setState({ user: res.data}));
    }

    updateUserState = (user) => {
        this.setState({ user: user})
    }

    // saveEvent() {
    //     axios({
    //         method: "put",
    //         data: {
    //             name: 
    //             transaction: 
    //         },
    //         withCredentials: true,
    //         url: "http://localhost:4000/user/event",
    //     })
    // }


    

    render() {
       return (
           <div>
             {this.state.user? <App user={this.state.user}/> : <Authenticate updateUserState={this.updateUserState}/>}
           </div>
       )

    }
}

export default Directory;