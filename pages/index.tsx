import { Box } from "@mui/material";
import type { NextPage } from "next";
import { Professor } from "../src/@types/Professor";
import Lista from "../src/components/Lista/Lista";

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      name: "Professor 1",
      photo: "https://github.com/igordmoura.png",
      description: "Descrição do Professor 1",
      value_hour: 100
    },
    {
      id: 2,
      name: "Professor 2",
      photo: "https://github.com/igordmoura.png",
      description: "Descrição do Professor 2",
      value_hour: 120
    },
    {
      id: 3,
      name: "Professor 3",
      photo: "https://github.com/igordmoura.png",
      description: "Descrição do Professor 3",
      value_hour: 150
    },
    {
      id: 4,
      name: "Professor 4",
      photo: "https://github.com/igordmoura.png",
      description: "Descrição do Professor 4",
      value_hour: 180
    },
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main'}}>
      <Lista professores={professores}></Lista>
    </Box>
  );
};

export default Home;
