import { Box, Button, Flex } from "@chakra-ui/react"; 
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { userLogout } from "../redux/action";

const links = [
  { to: "/", text: "HOME" },
  { to: "/movies", text: "MOVIES" },
  { to: "/wishlist", text: "WISHLIST" },
  { to: "/login", text: "LOGIN" },
  
];

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <Box w="100%" h="80px" bg="black" color="gold">
      <Flex w="60%" h="100%" m="0 auto" justify="space-around" align="center">
        {links?.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            style={({ isActive }) => ({
              color: isActive ? "#FFD700" : "#E5C100",  
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: "none",
              padding: "12px 18px",
              borderBottom: isActive ? "3px solid #FFD700" : "none",  
              transition: "0.3s ease-in-out",
              fontSize: "17px",
              letterSpacing: "1.2px",
              textTransform: "uppercase",  
            })}
          >
            {link.text}
          </NavLink>
        ))}
        <Button onClick={()=>dispatch(userLogout())} colorPalette={"yellow"} w="100px" h="40px">Logout</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
