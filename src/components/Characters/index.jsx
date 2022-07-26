import { useEffect, useState } from "react";
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import CharCard from "../CharCard";
import { Buttons, Chars, CharsHeader } from "./styles";

const Characters = () => {

    const [characterList, setCharacterList] = useState([]);
    const [page, setPage] = useState(1);

    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const nextPage = () => {
        if (page < 42) {
            setPage(page + 1);
        }
    }
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then((res) => res.json())
            .then((res) => {
                setCharacterList(res.results)
            });
    }, [page])

    return (
        <Chars>
            <CharsHeader>
                <h1>Meus personagens</h1>
            </CharsHeader>

            <ul>
                {
                    characterList.map((char) => {
                        return (<CharCard key={char.id} character={char} />)
                    })
                }
            </ul>

            <Buttons>
                <button onClick={() => previousPage()}><BiSkipPrevious />Anterior</button>
                <h2>{page}</h2>
                <button onClick={() => nextPage()}>Próximo<BiSkipNext /></button>
            </Buttons>
        </Chars>
    );
}

export default Characters;