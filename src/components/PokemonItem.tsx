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
                            <div className="detail-close" onClick={handleOpen}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    width="1.5rem"
                                    height="1.5rem"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>

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
