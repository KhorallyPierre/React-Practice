import React from "react";
import {useParams} from "react-router-dom";

const data = [
    {date: "2021-06-08", 
    updates: [
        {content: "Created new react site"},
        {content: "Created ndfdsg"},
        {content: "Created nadfsgite"},
        {content: "Created hello"}
    ]   
    },
    {date: "2021-10-08", 
    updates: [
        {content: "Created new react site"},
        {content: "Created ndfdsg"},
        {content: "Created nadfsgite"},
        {content: "Created hello"}
    ]   
    },
];
const ClientDetail = () => {
    const {id }: {id: string } = useParams();

    const updateRenderer = data.map((dateOfWorkPerformed: any) => (<div key ={dateOfWorkPerformed.date}> 
    {dateOfWorkPerformed.date}
    
    <div>
        {dateOfWorkPerformed.updates.map((update: {content: string}) => (<div key={update.content}>{update.content} </div> 
        ))}
    </div>
    </div>
    ));
    return <div>
     {updateRenderer}
    </div>;
};

export default ClientDetail;