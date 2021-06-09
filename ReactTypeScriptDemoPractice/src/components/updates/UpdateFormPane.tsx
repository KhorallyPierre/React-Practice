import React, { useDebugValue } from 'react'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";



interface IUpdateFormPaneProps {
    isOpen: boolean;
    handleClose: () => void;
}
const UpdateFormPane = (props: IUpdateFormPaneProps) => {
    const {isOpen, handleClose} = props
    return (
        <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={isOpen}
        title="Hey, it is optional pane title.  I can be React component too."
        subtitle="Optional subtitle."
        onRequestClose={handleClose} 
        
      >
        <div>Slide in the DMs like this! ;)</div>
        <br />
       
      </SlidingPane>
    )
}

export default UpdateFormPane