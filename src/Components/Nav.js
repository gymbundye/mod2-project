import { Link } from "react-router-dom";
function Nav(){
    return (
        <nav>
            <ul className="navLinks">
        <Link to ='Home'>
            <li>
                Home
            </li>
        </Link>
        <Link to='NextWeek'>
            <li>
                Next Week!
            </li>
            </Link>
            <Link to='ThisWeek'>
                <li>This Week!</li>
            </Link>
            <Link to='YourThoughts'>
                <li>
                    Your Thoughts?
                </li>
            </Link>
        





            </ul>






        </nav>




    )

};

export default Nav

