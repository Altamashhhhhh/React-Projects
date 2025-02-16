import { Flex, Input, Button, Heading, Text, Link } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toaster } from "../components/ui/toaster";
import { registerUser } from "../redux/action";
import { useDispatch } from "react-redux";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const inputs = [
    {
      type: "text",
      placeholder: "Enter Full Name",
      value: userInput.fullName,
      name: "fullName",
    },
    {
      type: "text",
      placeholder: "Enter Username",
      value: userInput.username,
      name: "username",
    },
    {
      type: "email",
      placeholder: "Enter Email",
      value: userInput.email,
      name: "email",
    },
    {
      type: "password",
      placeholder: "Enter Password",
      value: userInput.password,
      name: "password",
    },
  ];

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };
  function handleRegistration(e) {
    e.preventDefault();
    const { fullName, username, email, password } = userInput;
    if (fullName === "" || username === "" || email === "" || password === "") {
      toaster.create({
        title: "Input Field Must filled",
        type: "error",
      });
      return;
    }
    dispatch(registerUser({ fullName, username, email, password }));
    setUserInput({ fullName: "", username: "", email: "", password: "" });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }
  return (
    <Flex w="100%" h="90vh" justify="center" align="center" bg="white">
      <Flex
        as="form"
        w={{base : "90%" , sm : "90%" , md : "60%" , lg : "50%", xl : "50%"}}
        maxW="500px"
        p={10}
        h="auto"
        minH="70vh"
        direction="column"
        borderRadius="xl"
        justify="space-between"
        bg="rgba(255, 255, 255, 0.6)"
        backdropFilter="blur(15px)"
        boxShadow="0px 8px 20px rgba(0, 0, 0, 0.1)"
        border="1px solid rgba(0, 0, 0, 0.1)"
        onSubmit={handleRegistration}
      >
        <Heading
          size="xl"
          textAlign="center"
          mb={6}
          letterSpacing="2px"
          textTransform="uppercase"
          color="#0F52BA"
        >
          Register
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
              onChange={handleUserInput}
              value={input.value}
              name={input.name}
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
          Already have an account?{" "}
          <Link
            onClick={() => navigate("/login")}
            color="#0F52BA"
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            Login now
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
          Sign Up
        </Button>
      </Flex>
    </Flex>
  );
};

export default Signup;
