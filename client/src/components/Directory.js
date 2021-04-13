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
            url: "/user",
        }).then((res) => this.setState({ user: res.data})).then((res) => {console.log(this.state.user); this.calcTotal()});
    }

     calcTotal() {
        var totalBudget = this.state.user.totalBudget
      
            for (var i=0; i < this.state.user.events.length; i++){
                totalBudget = totalBudget + this.state.user.events[i].transaction;
            };
            
            this.setState(prevState => ({
                user: {
                    ...prevState.user,
                    totalBudget: totalBudget
                }
            }))
            console.log(this.state)
        };
      

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