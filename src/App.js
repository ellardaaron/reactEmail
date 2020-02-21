import React from "react";

class App extends React.Component {
  //nested state object can be tricky, careful!
  state = {
    values: {}
  };

  //one onChange helper that can be tied to *any* input!
  //we use the spread operator to maintain the nested values state
  //and also use the name attribute of the event's target as the new key i.e. "email"
  //and use the event's target value as the value for the new key i.e. { email: 'herp@derp.com' }
  handleChanges = e =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });

  handleClick = e => {
    //prevent form submit event from refreshing page
    e.preventDefault();
    console.log(this.state.values);
    //clears the values so the form "clears" after clicking button
    this.setState({ values: {} });
  };

  render() {
    return (
      <main className="container">
        <section className="row justify-content-center my-2">
          <div className="col-md-8">
            <form className="form-group p-3 border rounded shadow-sm">
              <label>Email</label>
              <input
                //javascript "short-circuit" technique
                //if values.email is undefined?  it's false
                //and it defaults to the blank '' for the initial value
                //otherwise if values.email has a value?  it's true
                //and uses that value instead
                value={this.state.values.email || ""}
                //one onChange to rule them all!
                onChange={this.handleChanges}
                name="email"
                type="email"
                className="form-control my-1"
              />
              <label>Password</label>
              <input
                value={this.state.values.password || ""}
                onChange={this.handleChanges}
                name="password"
                type="password"
                className="form-control my-1"
              />
              <button
                onClick={this.handleClick}
                className="btn btn-primary btn-block mx-auto w-50 mt-3"
              >
                Register!
              </button>
            </form>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
