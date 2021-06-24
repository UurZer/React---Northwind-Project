import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://res.cloudinary.com/uurzer/image/upload/v1624189922/wrd0uxt6q2c2gvyu7jko.jpg"
        />
        <Dropdown pointing="top left" text="Uğur">
          <Dropdown.Menu>
            <Dropdown.Item text="Profilim" icon="info"/>
            <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
          </Dropdown.Menu>
        </Dropdown> 
      </Menu.Item>
    </div>
  );
}
