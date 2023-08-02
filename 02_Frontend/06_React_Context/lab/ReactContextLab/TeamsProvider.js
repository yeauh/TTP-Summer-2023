import React, { useState } from "react";
import TeamContext from "./TeamContext";

const TeamsProvider = ({ children }) => {
    const [team, setTeam] = useState(null);
    const [allTeams, setAllTeams] = useState([]);

    // Rest of the code goes here

    return (
        <TeamContext.Provider value={{ team, setTeam, allTeams, setAllTeams}}>
            {children}
        </TeamContext.Provider>
    );
};