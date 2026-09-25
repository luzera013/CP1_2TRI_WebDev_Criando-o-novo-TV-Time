export type Movie = {
    id: number;
    title: string;
    poster_path?: string | null;
    overview?: string;
    vote_average?: number;
    status?: string;
};

export type MovieList = Movie[];
