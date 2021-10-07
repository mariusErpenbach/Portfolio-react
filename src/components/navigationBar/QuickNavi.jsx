import react from "react";
import { Link } from 'react-router-dom';
import Draggable from "react-draggable";
const QuickNavi = () => {



return (
<Draggable>
<div className="quickNavbar">
<button><Link to="/">welcome</Link></button>
<button><Link to="/blog">blog</Link></button>
<button><Link to="/aboutme">aboutme</Link></button>
</div>
</Draggable>
)
}

export default QuickNavi