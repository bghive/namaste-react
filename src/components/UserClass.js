import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                name : "Dafault",
                location: "Dummy",

            }
        }
        //console.log(this.props.name + " const");
    }

    async componentDidMount(){
        //console.log(this.props.name  + "comp mount");
        const data = await fetch("https://api.github.com/users/bghive");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo : json,
        })
    }
    render(){
        //const {name} = this.props;
        const {name , avatar_url} = this.state.userInfo;
        
        //console.log(this.props.name + "render");
        return(
            <div className="user-card">
                <img src="avatar_url" />
                <h3>{name}</h3>
                <h3>Pune</h3>
                <h3>9673483924</h3>
            </div>
        )
    }
}

export default UserClass;