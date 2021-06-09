import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

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
    const formPane = (
        <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={isPaneOpen}
        title="Hey, it is optional pane title.  I can be React component too."
        subtitle="Optional subtitle."
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setIsPaneOpen(!isPaneOpen);
        }}
      >
        <div>Slide in the DMs like this! ;)</div>
        <br />
       
      </SlidingPane>

    );
    return <div>
        {formPane}
    <a onClick={() => setIsPaneOpen(true)}> New Update </a>
     {updateRenderer}
    </div>;
};

export default ClientDetail;