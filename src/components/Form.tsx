export const SignUpForm = () => {
    return (
        <form action={() => {}}>
            <div className="formContainer">

                <label className="formContainerTitle">Sign Up</label>

                <div className="inputContainer">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="example@gmail.com" id="email" name="email" required />
                </div>

                <div className="inputContainer">
                <label htmlFor="username">Username</label> 
                <input type="text" placeholder="Username" id="username" name="username" required />
                </div>

                <div className="inputContainer">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" name="password" required    />
                </div>
                
                <button type="submit">Sign Up</button>
            </div>
        </form>
    )
}

export const LoginForm = () => {
    return (
     <form action={() => {}}>
            <div className="formContainer">

                <label className="formContainerTitle">Log In</label>

                <div className="inputContainer">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="example@gmail.com" id="email" name="email" required />
                </div>

                <div className="inputContainer">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" name="password" required    />
                </div>
                
                <button type="submit">Log In</button>
            </div>
        </form>
    )
}