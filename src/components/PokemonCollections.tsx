import { useState } from 'react';
import { Pokemon } from '../interface';
import PokemonItem from './PokemonItem';
import './pokemon.css';
interface Props {
    pokemons: Pokemon[];
}

const PokemonCollections: React.FC<Props> = (props) => {
    const { pokemons } = props;
    const [indexPokemon, setIndexPokemon] = useState<number | null>(null);
    const viewDetails = (index: number) => {
        setIndexPokemon(index);
    };

    const handleOpen: () => void = () => {
        setIndexPokemon(null);
    };

    return (
        <div>
            <section className="collection-container">
                {pokemons.map((pokemon, index) => {
                    return (
                        <PokemonItem
                            handleOpen={handleOpen}
                            abilities={pokemon.abilities}
                            onClick={() => viewDetails(index)}
                            key={pokemon.id}
                            name={pokemon.name}
                            img={pokemon.sprites.front_default}
                            isViewDetails={indexPokemon === index}
                        />
                    );
                })}
            </section>
        </div>
    );
};

export default PokemonCollections;
