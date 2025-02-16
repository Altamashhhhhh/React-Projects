import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toaster } from "../components/ui/toaster";
import {
  addFetchedWishlist,
  removeFromWishlist,
} from "../redux/WishlistAction";
import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.currentUserId);
  const wishlists = useSelector((state) => state.wishlist.wishlists);
  const isLogged = useSelector((state) => state.auth.isLogged);

  function handleRemoveFromWishlist(id) {
    dispatch(removeFromWishlist(id));
    return;
  }
  useEffect(() => {
    const fetchWishlist = async () => {
      const response = await axios(
        "https://movie-redux-5e6d5-default-rtdb.asia-southeast1.firebasedatabase.app/wishlist.json"
      );
      const data = Object.entries(response.data)
        .map(([id, movie]) => ({ ...movie, id }))
        .filter((movie) => movie.userId === userId);

      dispatch(addFetchedWishlist(data));
    };
    fetchWishlist();
  }, [dispatch]);

  useEffect(() => {
    if (!isLogged) {
      toaster.create({
        title: "Please Login First, Redirecting to login page",
        type: "error",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }, [isLogged]); // 🔥 Runs only when `isLogged` changes

  return (
    <Box w="100%" minH="100vh" p={10} textAlign="center" bg="gray.900">
      <Text fontSize="3xl" fontWeight="bold" mb={6} color="blue.400">
        🎬 Wishlist Movies
      </Text>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {isLogged && wishlists?.map((movie) => (
          <Flex
            key={movie.id}
            p={4}
            direction="column"
            align="center"
            justify={"space-between"}
            bg="gray.800"
            borderRadius="lg"
            boxShadow="lg"
            overflow="hidden"
            transition="transform 0.2s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              borderRadius="md"
              objectFit="cover"
              h="300px"
              w="100%"
            />

            <Box p={4} textAlign="center">
              <Text fontSize="lg" fontWeight="bold" color="white">
                {movie.title}
              </Text>

              <Text fontSize="sm" color="gray.400" mt={1}>
                📅 {movie.release_date} | ⭐ {movie.vote_average}
              </Text>

              <Text fontSize="sm" color="gray.300" mt={3} noOfLines={3}>
                {movie.overview.split(" ").slice(0, 20).join(" ") + " ......"}
              </Text>
              <Button
                onClick={() => handleRemoveFromWishlist(movie.id)}
                colorPalette={"yellow"}
                mt={5}
              >
                REMOVE FROM WISHLIST
              </Button>
            </Box>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default Wishlist;
