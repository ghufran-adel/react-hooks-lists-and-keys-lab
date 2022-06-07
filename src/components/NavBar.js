import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const Link =links.map((el)=>{
    const id ='#'+ el
  return ( <a href={id} key={el}> {el} </a> )
  });
  return <nav>
{Link}
  </nav>;
}

export default NavBar;
