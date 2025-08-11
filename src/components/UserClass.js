import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
               this.state = {
            userInfo:{
                name: "dummy",
                location: "default"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/kirandm99");
       const json = await data.json(); 
       
       this.setState({
           userInfo: json
       })
    }

    render() {
        const { name, location} = this.state.userInfo;
        console.log(this.state.userInfo);
        return (
            <div className="user-card">
                <div>
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <h2 className="text-xl font-bold">User : {loggedInUser}</h2>}
                    </UserContext.Consumer>
                </div>
            <h2>User : {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact : kiran@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;