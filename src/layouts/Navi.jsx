import React,{useState} from "react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { Container, Menu } from "semantic-ui-react";
export default function Navi() {
  const [isAuthenticated,setIsAuthenticated]=useState(true);

  function  handleSignOut(){
    setIsAuthenticated(false);
  }

  function  handleSignIn(){
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu fixed="top" size="max">
        <Container>
          <Menu.Item name="home" />
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
