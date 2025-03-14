function Signin() {
    return (
      <div className="signin">
        <h1>Sign in</h1>
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" id="email" className="details" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" className="details" />
            <button className="submit">Sign in</button>
        </form>
      </div>
    );
  }
  
  export default Signin; 
  