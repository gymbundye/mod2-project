import { Link } from "react-router-dom";
function Nav(){
    return (
        <nav>
            <ul className="navLinks">

        <Link style={{textDecoration: "none"}} to ='Home'>
            <li>
                Home
            </li>
            
        </Link>
        <Link style={{textDecoration:"none"}} to='ThisWeek'>
                <li>This Week!</li>
            </Link>
        <Link style={{textDecoration:"none"}} to='NextWeek'>
            <li>
                Next Week!
            </li>
            </Link>

    

        
        





            </ul>






        </nav>




    )

};

export default Nav

