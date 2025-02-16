import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toaster } from "../components/ui/toaster";
import { useNavigate } from "react-router-dom";
import { checkUserLogin } from "../redux/action";
import { Box, Flex, Button, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  useEffect(() => {
    const isExist = localStorage.getItem("currentUserId");
    if (isExist) {
      dispatch(checkUserLogin({status : true , userId : isExist})); 
    } else {
      dispatch(checkUserLogin({status : false , userId : ""}));
      toaster.create({
        title: "Please Login First : Redirecting to Login Page",
        type: "error",
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }, []);

  return (
    <Flex height="80vh" justify="center" align="center">
      <Box textAlign="center">
        <Heading mb={4}>Welcome to Movie Explorer</Heading>
        <Text fontSize="lg" mb={6}>
          Discover and explore your favorite movies. Add them to your wishlist
          and never lose track of what you want to watch next.
        </Text>
        <Button
          colorPalette="blue"
          color={"white"}
          mr={4}
          onClick={() => navigate("/movies")}
        >
          View Movies
        </Button>
        <Button
          colorPalette="green"
          color={"white"}
          onClick={() => navigate("/wishlist")}
        >
          Wishlist
        </Button>
      </Box>
    </Flex>
  );
};

export default Home;
