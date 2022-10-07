/***GENERAL***/
import React from "react";
import { Link } from "react-router-dom";

/***Page***/
function Error404() {
    return (
        <div className="intro quatrecentquatre">
            <div className="overlay">
                {/*Animated Text*/}
                <div className="logo quatre1">
                    <b>
                        4<span>0</span>4
                    </b>
                </div>
                <div className="logo quatre2">
                    <b>
                        LA<span> PA</span>GE
                        <span> QUE VOUS </span>
                        DEMANDEZ N'<span>EXI</span>STE
                        <span> P</span>AS
                    </b>
                </div>
                {/*Return button*/}
                <Link to="/accueil">
                    <div className="logo quatre4">
                        <p>Retourner sur la page d'accueil</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default Error404;
