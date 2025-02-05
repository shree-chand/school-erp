export default function Login() {
    return (
        <main>
            <div className="FormOuter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h2 className="card-title">Create an Account</h2>
                                    <form className="groFrom needs-validation">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="form-label">Your Name</label>
                                                    <input type="text" name="name" className="form-control" id="yourName" />
                                                    <div className="invalid-feedback">Please, enter your name!</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="form-label">Your Email</label>
                                                    <input type="email" name="email" className="form-control" id="yourEmail" required />
                                                    <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="form-label">Username</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                        <input type="text" name="username" className="form-control" id="yourUsername" required />
                                                        <div className="invalid-feedback">Please choose a username.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="form-label">Password</label>
                                                    <input type="password" name="password" className="form-control" id="yourPassword" required />
                                                    <div className="invalid-feedback">Please enter your password!</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check m-b-15">
                                                    <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                                                    <label className="form-check-label">I agree and accept the <a href="#">terms and conditions</a></label>
                                                    <div className="invalid-feedback">You must agree before submitting.</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <button className="btn btn-primary w-100 h40" type="submit">Create Account</button>

                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <p className="small mb-0">Already have an account? <a href="/login">Log in</a></p>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}







