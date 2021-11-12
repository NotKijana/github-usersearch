import React from "react";
import locationIcon from "./imgs/icon-location.svg";
import companyIcon from "./imgs/icon-company.svg";
import twitterIcon from "./imgs/icon-twitter.svg";
import websiteIcon from "./imgs/icon-website.svg";
import styles from  "./css/style.css";

function Card(props) {
    var d = new Date(props.date);
    var day = d.getDay();
    var year = d.getFullYear();
    var monthIndex = d.getMonth();
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'];
    var month = months[monthIndex];
    var date = day + " " + month + " " + year;
    return (
        <main className={'card ' + styles.card}>
            <section className="card_header">
                <img className="card_header--img" src={props.pfp} alt="profile icon github" />
                <div className="card_header--text">
                    {props.name
                        ? <h1 className="card_header--text-name">{props.name}</h1>
                        :<h1 className="card_header--text-name">{props.login}</h1>
                    }
                    <p className="card_header--text-tag">
                        <a href={props.page} rel="noreferrer" target="_blank">@{props.login}</a>
                    </p>
                    <p className="card_header--text-joinDate"> Joined {date}</p>
                </div>

            </section>

            <section className="card_bio">
                {props.bio
                    ?<p className="card_bio--text">{props.bio}</p>
                    :<p className="card_bio--text lowLight">This profile has no bio</p>
                }
            </section>

            <section className="card_stats">
                <div className="card_stats--sub">
                    <p className="card_stats--header">Repos</p>
                    <h2 className="card_stats--number">{props.repos}</h2>
                </div>

                <div className="card_stats--sub">
                    <p className="card_stats--header">Followers</p>
                    <h2 className="card_stats--number">{props.followers}</h2>
                </div>

                <div className="card_stats--sub">
                    <p className="card_stats--header">Following</p>
                    <h2 className="card_stats--number">{props.following}</h2>
                </div>
            </section>

            <section className="card_links">
                <div className="card_links--item">
                    <img src={locationIcon} alt="Location ping icon"></img>
                    {props.location
                        ?<p className="card_links--text">{props.location}</p>
                        :<p className="card_links--text lowLight">Not Available</p>
                    }
                </div>

                <div className="card_links--item">
                    <img src={websiteIcon} alt="Location ping icon"></img>
                        {props.blog
                            ?<p className="card_links--text">
                                <a href={props.blog} rel="noreferrer" target="_blank">{props.blog}</a>
                             </p>
                            :<p className="card_links--text lowLight">Not Available</p>
                        }
                </div>

                <div className="card_links--item">
                    <img src={twitterIcon} alt="Location ping icon"></img>
                    {props.twitter
                        ?<p className="card_links--text">
                            <a href={props.twitter} rel="noreferrer" target="_blank">{props.twitter}</a>
                        </p>
                        :<p className="card_links--text lowLight">Not Available</p>
                    }
                    
                </div>

                <div className="card_links--item">
                    <img src={companyIcon} alt="Location ping icon"></img>
                    {props.company
                        ?<p className="card_links--text">{props.company}</p>
                        :<p className="card_links--text lowLight">Not Available</p>
                    }
                </div>
            </section>
        </main>
    )

}

export default Card;