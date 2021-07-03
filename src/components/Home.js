
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderSide from "./Header";
import Landing from "./Landing";

export default function Home() {
    return (
        <Router>
            <Route path="/" exact component={Landing} />
            <Route path="/home" exact component={HeaderSide} />
        </Router>
    );
}

