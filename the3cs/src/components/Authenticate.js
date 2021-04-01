import React, { useState } from 'react';

function Authenticate() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    return (
        <div>
            <div>
                <h1>Register</h1>
                <input placeholder="username" />
                <input placeholder="password" />
                <button>Submit</button>
            </div>

            <div>
                <h1>Login</h1>
                <input placeholder="username" />
                <input placeholder="password" />
                <button>Submit</button>
            </div>



        </div>
    );
}


export default Authenticate;