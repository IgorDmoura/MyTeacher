import { Button } from "@mui/material";
import { Professor } from "../../@types/Professor";
import {
  Description,
  Information,
  ItemList,
  ListaStyled,
  ListEmpty,
  Name,
  Photo,
  Value,
} from "./Lista.style";

interface ListaProps {
  professores: Professor[];
}

const Lista = (props: ListaProps) => {
  return (
    <div>
      {props.professores.length > 0 ? (
        <ListaStyled>
          {props.professores.map((professor) => (
            <ItemList key={professor.id}>
              <Photo src={professor.photo}></Photo>
              <Information>
                <Name>{professor.name}</Name>
                <Value>{professor.value_hour.toLocaleString('pt-BR',{ minimumFractionDigits: 2, style: 'currency', currency:'BRL'})} por hora</Value>
                <Description>{professor.description}</Description>
                <Button sx={{ width: "70%" }}>Marcar Aula com Igor</Button>
              </Information>
            </ItemList>
          ))}
        </ListaStyled>
      ) : (
        <ListEmpty>Nenhum Item Encontrado</ListEmpty>
      )}
    </div>
  );
};

export default Lista;
