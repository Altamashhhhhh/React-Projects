import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFetchedMovies, nextPage, previousPage } from "../redux/movieAction";
import { Flex, Grid, Image, Text, Box, Button, Input } from "@chakra-ui/react"; 
import { addWishlist } from "../redux/WishlistAction";
import {toaster} from "../components/ui/toaster"
import { useNavigate } from "react-router-dom";
const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate()
  const apiKeys = import.meta.env.VITE_API_KEY;
  const { page, movies } = useSelector((state) => state.movie);
   const userId = useSelector((state) => state.auth.currentUserId);
   const isLogged = useSelector((state) => state.auth.isLogged);

  const URL =
    searchQuery === ""
      ? `https://api.themoviedb.org/3/movie/popular?api_key=${apiKeys}&page=${page}`
      : `https://api.themoviedb.org/3/search/movie?api_key=${apiKeys}&query=${searchQuery}&page=${page}`;

  const dispatch = useDispatch();

  const fetchMovies = async (url) => {
    try {
      const response = await axios.get(url);
      dispatch(addFetchedMovies(response.data.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  function handleAddWishlist(payload) {
    dispatch(addWishlist({ ...payload, userId }));
  }

  function handleSearchMovie(e){
    const value = e.target.value
     setSearchQuery(value)
  }
  useEffect(() => {
    if (page > 0) fetchMovies(URL);
  }, [page  , searchQuery ]);


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
        🎬 Popular Movies
      </Text>

      <Input
        placeholder="🔍 Search Movie"
        m={8}
        w="85%"
        h="50px"
        border="2px solid yellow"
        borderRadius="8px"
        value={searchQuery}
        onChange={handleSearchMovie}
        p={3}
        fontSize="lg"
        color="white"
        bg="gray.800"
        _placeholder={{ color: "gray.400" }}
        _focus={{
          border: "2px solid #FFD700",
          boxShadow: "0 0 8px #FFD700",
        }}
      />

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
        {isLogged && movies?.map((movie) => (
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
                onClick={() => handleAddWishlist(movie)}
                mt={4}
                variant={"solid"}
                colorPalette={"yellow"}
              >
                ADD TO WISHLIST
              </Button>
            </Box>
          </Flex>
        ))}
      </Grid>

      <Flex justify="space-around" mt={6} w="40%" m="30px auto">
        <Button
          colorPalette="blue"
          color={"white"}
          mr={4}
          w="200px"
          h="45px"
          onClick={() => dispatch(previousPage())}
          isDisabled={page === 1}
        >
          Previous
        </Button>
        <Button
          w="200px"
          h="45px"
          colorPalette="green"
          color="white"
          onClick={() => dispatch(nextPage())}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default Movies;
