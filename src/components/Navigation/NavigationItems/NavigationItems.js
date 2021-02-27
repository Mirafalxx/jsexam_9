import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.css";

const Navigationitems = () => {
  return (
    <ul className="NavigationItems">
      <NavigationItem to="/" exact>
        Contacts
      </NavigationItem>
      <NavigationItem to="/add-new-contact" exact>
        Add new contact
      </NavigationItem>
    </ul>
  );
};

export default Navigationitems;
