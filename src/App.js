import './css/style.css';
import Card from "./Card"
import moonIcon from "./imgs/icon-moon.svg";
import sunIcon from "./imgs/icon-sun.svg";
import React from 'react';
import searchIcon from "./imgs/icon-search.svg";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      userAccount: '',
      resultFound: true,
      darkMode: false
    };
    this.getUserAccount = this.getUserAccount.bind(this);
    this.updateUserAccount = this.updateUserAccount.bind(this);
    this.setUserAccount = this.setUserAccount.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }

  setUserAccount(account) {
    this.setState({
      userAccount: account
    })
  }
  setUsername(user) {
    this.setState({
      username: user
    })
  }

  changeTheme() {
    if(!this.state.darkMode) {
      document.body.classList.add('darkMode')
      this.setState({
        darkMode: true
      })
    } else {
      document.body.classList.remove('darkMode')
      this.setState({
        darkMode: false
      })
    }
  }

  getUserAccount(userName){
    var prevAccount = this.state.userAccount;
    fetch('http://api.github.com/users/' + userName)
      .then(result => result.json())
      .then(body => {
        if(body.message === "Not Found") {
          this.setUserAccount(prevAccount);
          this.setState({
            resultFound: false
          })
        } else {
          this.setUserAccount(body)
          this.setState({
            resultFound: true
          })
        }
      });
  }
  updateUserAccount(){
    var prevAccount = this.state.userAccount;
    fetch('http://api.github.com/users/' + this.state.username)
      .then(result => result.json())
      .then(body => {
        if(body.message === "Not Found") {
          this.setUserAccount(prevAccount);
          this.setState({
            resultFound: false
          })
        } else {
          this.setUserAccount(body)
          this.setState({
            resultFound: true
          })
        }
      });
  }
  componentDidMount() {
    this.getUserAccount('octocat');
  }

  render() {
    const isFound = this.state.resultFound;
    return (
      <div className={this.state.darkMode ? 'App darkMode': 'App'}>
        <header className="header">
          <h1 className="header_title">devfinder</h1>
          {this.state.darkMode
              ?<div className="header_theme" onClick={this.changeTheme}>
                <p className="header_theme--name">Light</p>
                <img className="header_theme--icon darkIcon" alt="Icon Moon" src={moonIcon}></img>
               </div>
              :<div className="header_theme" onClick={this.changeTheme}>
                  <p className="header_theme--name">Dark</p>
                  <img className="header_theme--icon light" alt="Icon sun" src={sunIcon}></img>
               </div>
          }
        </header>

        <div className={'search'}>
            <img alt="search icon" className="search_icon" src={searchIcon}/>
            <input type="text" value={this.state.username} onChange={e => this.setUsername(e.target.value)} className="search_input" placeholder="Search GitHub username..."></input>
            {!isFound && <span className="search_result">Not Found</span>}
            <button onClick={this.updateUserAccount} className="search_button">Search</button>
        </div>

        <Card name={this.state.userAccount.name} login={this.state.userAccount.login} date={this.state.userAccount.created_at}
              bio={this.state.userAccount.bio} repos={this.state.userAccount.public_repos} followers={this.state.userAccount.followers}
              following={this.state.userAccount.following} location={this.state.userAccount.location}
              blog={this.state.userAccount.blog} twitter={this.state.userAccount.twitter_username} company={this.state.userAccount.company}
              pfp={this.state.userAccount.avatar_url} page={this.state.userAccount.html_url}/>
      </div>
    );
  }
}

export default App;