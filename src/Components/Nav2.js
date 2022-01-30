import { Link } from "react-router-dom";
import SwitchButton from "../Button";
function Nav2(){
    return (
        <nav>
            <ul className="navLinks">


    

            <Link style={{textDecoration:"none"}} to='YourThoughts'>
                <li>
                    Your Thoughts?
                </li>
            </Link>
            
            <Link style={{textDecoration:"none"}} to='Search'>
            <li>
                Search!
            </li>
            </Link>
        

        <SwitchButton/>



            </ul>






        </nav>




    )

};

export default Nav2

