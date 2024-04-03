import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component{
    constructor(){
        super();
          console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent Mount");
    }
    render(){
        console.log("Parent Render");
        return(
            <div>
                <h2>This is a food app created by Bakul!!!</h2>
                {/* <User name={"Bakul Ghive(function)"}/> */}
                <UserClass name={"First child(class)"}/>
            </div>
        )

    }
}

export default About;