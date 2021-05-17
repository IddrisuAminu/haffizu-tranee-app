import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddTrainee from "./screens/AddTrainee";
import Trainees from "./screens/Trainees";
import Header from "./components/Header";
import Home from "./screens/Home";
import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import RegisterUserScreen from "./screens/RegisterUserScreen";

function App() {
  return (
    <main>
      <Header />
      <Container>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/trainees" component={Trainees} />
          <Route path="/addtrainee" component={AddTrainee} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterUserScreen} />
        </Switch>
      </Container>
    </main>
  );
}

export default App;
