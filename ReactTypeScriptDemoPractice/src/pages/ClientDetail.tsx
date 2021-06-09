import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import UpdateFormPane from "../components/updates/UpdateFormPane"

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
    const [isPaneOpen, setIsPaneOpen] = useState(false);
    const [updates, setUpdates] = useState([]);

    useEffect(() => {
        setUpdates(data);
    }, [])
    const updateRenderer = updates.map((dateOfWorkPerformed: any) => (<div key ={dateOfWorkPerformed.date}> 
    {dateOfWorkPerformed.date}
    
    <div>
        {dateOfWorkPerformed.updates.map((update: {content: string}) => (<div key={update.content}>{update.content} </div> 
        ))}
    </div>
    </div>
    ));
    
       
    return ( 
    <div> 
     <UpdateFormPane 
     isOpen={isPaneOpen}
     handleClose={() => setIsPaneOpen(false)}
     />
    <a onClick={() => setIsPaneOpen(true)}> New Update </a>
     {updateRenderer}
    </div> );

};

export default ClientDetail;