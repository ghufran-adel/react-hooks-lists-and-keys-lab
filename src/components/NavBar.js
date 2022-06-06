import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const Link =links.map((el)=>{
  return ( <a href={'#el'} key={el}> {el} </a> )
  });
  return <nav>
{Link}
  </nav>;
}

export default NavBar;
