export interface Pokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    abilities: [
        {
            ability: {
                name: string;
            };
            is_hidden: boolean;
        },
    ];
}
