import react,{useEffect} from "react";
import { Link } from 'react-router-dom';
const QuickNavi = () => {

return (<div className="quickNavbar">
<button><Link to="/">welcome</Link></button>
<button><Link to="/blog">blog</Link></button>
<button><Link to="/aboutme">aboutme</Link></button>
</div>)
}

export default QuickNavi