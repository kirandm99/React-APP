import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is About Us Component</h2>
                {/* <User /> */}
                <UserClass name={"Kiran"} location={"Karnataka"} />
            </div>
        );
    }

}
    
// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>This is About Us Component</h2>
//             <User />
//             <UserClass name={"Kiran"} location = {"Karnataka"} />
//         </div>
//     )
// }

export default About;