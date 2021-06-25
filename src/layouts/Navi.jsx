import React,{useState} from "react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { Container, Menu } from "semantic-ui-react";
import { NavLink, useHistory } from "react-router-dom";
export default function Navi() {
  const [isAuthenticated,setIsAuthenticated]=useState(true);
  const history=useHistory();
  function  handleSignOut(){
    setIsAuthenticated(false);
    history.push("/")
  }

  function  handleSignIn(){
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu fixed="top" size="max">
        <Container>
          <Menu.Item as={NavLink} to="/" name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />

          {isAuthenticated?<SignedIn signOut={handleSignOut}/>
          :<SignedOut signIn={handleSignIn} />}
            
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
