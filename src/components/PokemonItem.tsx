import './pokemon.css';

interface Props {
    name: string;
    img: string;
    onClick: () => void;
    isViewDetails: boolean;
    abilities: [
        {
            ability: {
                name: string;
            };
            is_hidden: boolean;
        },
    ];

    handleOpen: () => void;
}

const PokemonItem: React.FC<Props> = (props) => {
    const { name, img, onClick, isViewDetails, abilities, handleOpen } = props;
    return (
        <>
            {isViewDetails ? (
                <>
                    <section className="pokemon-list-detailed">
                        <div className="detail-container">
                            <p className="detail-close" onClick={handleOpen}>
                                X
                            </p>

                            <div className="detail-info">
                                <img src={img} alt="pokemon" />
                                <p className="detail-name">{name}</p>
                            </div>

                            <div className="detail-skill">
                                <p className="detail-ability">Abilities </p>
                                {abilities.map((ability, index) => (
                                    <span key={index}>
                                        {ability.is_hidden ? `${ability.ability.name} (hidden)` : ability.ability.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section onClick={onClick} className="pokemon-list-container">
                        <p className="pokemon-name">{name}</p>
                        <img src={img} alt="pokemon" />
                    </section>
                </>
            ) : (
                <section onClick={onClick} className="pokemon-list-container">
                    <p className="pokemon-name">{name}</p>
                    <img src={img} alt="pokemon" />
                </section>
            )}
        </>
    );
};

export default PokemonItem;
