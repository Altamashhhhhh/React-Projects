import { Flex, Input, Button, Heading, Text, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/action";
import { toaster } from "../components/ui/toaster";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({ username: "", password: "" });

  const inputs = [
    {
      type: "text",
      placeholder: "Enter Username",
      name: "username",
      value: userInput.username,
    },
    {
      type: "password",
      placeholder: "Enter Password",
      name: "password",
      value: userInput.password,
    },
  ];

  function handleUserInput(e) {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  }

  function handleUserLogin(e) {
    e.preventDefault();
    const { username, password } = userInput;
    if (username === "" || password === "") {
      toaster.create({
        title: "Please pass both value : username and password",
        type: "error",
        duration: 3000,
      });
      return;
    }
    dispatch(loginUser({ username, password }, navigate));
  }
  return (
    <Flex w="100%" h="90vh" justify="center" align="center" bg="white">
      <Flex
        as="form"
        w={{base : "90%" , sm : "90%" , md : "60%" , lg : "50%", xl : "50%"}}
        maxW="500px"
        p={10}
        h="auto"
        minH="50vh"
        direction="column"
        borderRadius="xl"
        justify="space-between"
        bg="rgba(255, 255, 255, 0.6)"
        backdropFilter="blur(15px)"
        boxShadow="0px 8px 20px rgba(0, 0, 0, 0.1)"
        border="1px solid rgba(0, 0, 0, 0.1)"
        onSubmit={handleUserLogin}
      >
        <Heading
          size="xl"
          textAlign="center"
          mb={6}
          letterSpacing="2px"
          textTransform="uppercase"
          color="#0F52BA"
        >
          Login Now
        </Heading>

        <Flex direction="column" gap={5}>
          {inputs.map((input, index) => (
            <Input
              key={index}
              type={input.type}
              placeholder={input.placeholder}
              p={4}
              border="2px solid lightgray"
              borderRadius="lg"
              outline="none"
              color="black"
              name={input.name}
              value={input.value}
              onChange={handleUserInput}
              bg="white"
              fontSize="md"
              _placeholder={{ color: "gray.500" }}
              transition="0.3s"
              _hover={{
                borderColor: "rgba(50, 66, 168 , 0.5)",
              }}
            />
          ))}
        </Flex>
        <Text textAlign="center" mt={3} fontSize="md" color="gray.600">
          Don’t have an account?{" "}
          <Link
            onClick={() => navigate("/signup")}
            color="#0F52BA"
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            Register now
          </Link>
        </Text>

        <Button
          w="170px"
          h="45px"
          m="10px auto"
          color="white"
          fontSize="lg"
          variant="solid"
          type="submit"
          colorPalette="blue"
          _hover={{
            bgGradient: "linear(to-r, #008080, #0F52BA)",
            transform: "scale(1.05)",
          }}
          transition="0.3s"
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;
