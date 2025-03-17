import { useState } from 'react';

function Login() {
    const [formdata, setFormdata] = useState({
        userName: 'a',
        userEmail: 'b@c',
        userPassword: 'd'
    });

    const [isRegister, setIsRegister] = useState(false);
    const handleChange = (e) => {
	console.log(`handleChange: ${e.target.name} => ${e.target.value}`);
	console.log("handleChange: old formdata: " + JSON.stringify(formdata));
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isRegister ? '/api/users' : '/api/auth/login';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formdata)
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Success:",data);
                alert(isRegister ? 'User Registered' : 'User Logged In');
            } else {
                console.log("Error:",response.statusText);
                alert("Error:",response.statusText);
            }

        } catch (error) {
            console.log("Error:",error);
            alert("Request failed ");
        }
    };

    return (
        <div>
            <h2>{isRegister ? 'Register' : 'Login'}</h2> 
            <form onSubmit={handleSubmit}>
                {isRegister && (
                    <div>
                        <label>Username</label>
                        <input type="text" name="userName" value={formdata.userName} onChange={handleChange} required />
                    </div>
                )}
                <div>
                    <label>Email</label>
                    <input type="email" name="userEmail" value={formdata.userEmail} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="userPassword" value={formdata.userPassword} onChange={handleChange} required/>
                </div>
                <button type="submit">{isRegister ? 'Register' : 'Login'}</button>

            </form>

                <button type="button" onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? 'Already have an account?' : 'Create an account'}
                </button>
        </div>
    );
}
export default Login;
