import PokemonCollections from './components/PokemonCollections';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pokemon } from './interface';
import './App.css';

interface Pokemons {
    name: string;
    url: string;
}

const App: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [nextPokemons, setNextPokemons] = useState<string>('API coming soon...');
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const getPokemon = async () => {
            setLoading(true);
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=480&offset=0');
            const allPokemons: Pokemon[] = await Promise.all(
                res.data.results.map(async (pokemon: Pokemons) => {
                    const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                    return poke.data;
                }),
            );

            setPokemons(allPokemons);
            setLoading(false);
            setNextPokemons(res.data.next);
        };
        getPokemon();
    }, []);

    const loadMore = async () => {
        if (!loading) {
            setLoading(true);
            const res = await axios.get(nextPokemons);
            const allPokemons: Pokemon[] = await Promise.all(
                res.data.results.map(async (pokemon: Pokemons) => {
                    const poke = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                    return poke.data;
                }),
            );
            setPokemons((pre: Pokemon[]) => [...pre, ...allPokemons]);
            setLoading(false);
            setNextPokemons(res.data.next);
        }
    };
    return (
        <div className="App">
            <div className="container">
                <header className="pokemon-header">Pokemon</header>
                <PokemonCollections pokemons={pokemons} />
                {nextPokemons ? (
                    loading ? (
                        <div className="loading">
                            <p>Loading</p>
                            <img src="https://f.top4top.io/p_1990j031.gif" alt="loading" />
                        </div>
                    ) : (
                        <button onClick={loadMore}>Load More</button>
                    )
                ) : (
                    <h4>Coming soon ...</h4>
                )}
            </div>
        </div>
    );
};

export default App;
