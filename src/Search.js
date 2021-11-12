import React from "react";
import searchIcon from "./imgs/icon-search.svg";
import styles from  "./css/style.css";

function Search() {
    const [username, setUsername] = React.useState(null);
    const [userAccount, setUserAccount] = React.useState(null);
    
    const getUserAccount = () => {
      fetch('/api/github/' + username)
        .then(result => result.json())
        .then(body => setUserAccount(body));
    }

    return(
        <div className={'search ' + styles.search}>
            <img alt="search icon" className="search_icon" src={searchIcon}/>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="search_input" placeholder="Search GitHub username..."></input>
            <button onClick={getUserAccount} className="search_button">Search</button>
            {console.log(userAccount)}
        </div>
    )
}

export default Search;