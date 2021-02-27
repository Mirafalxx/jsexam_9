import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import ContactsList from "./containers/ContactsList/ContactsList";
import AddNewContact from "./containers/AddNewContact/AddNewContact";
const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={ContactsList} />

          <Route path="/add-new-contact" component={AddNewContact} />
          <Route
            render={() => (
              <h2>
                <i>ERROR</i>:404 not found
              </h2>
            )}
          />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
