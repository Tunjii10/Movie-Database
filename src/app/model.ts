export interface Movie {
    poster_path?: string | null;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: number[];
    id?: number;
    original_title?: string;
    title?: string;
    backdrop_path?: string | null;
    popularity?: number;
    vote_count?: number;
    video?: number;
    vote_average?: number;
}

export interface Series {
    poster_path?: string | null;
    popularity?: number;
    id?: number;
    backdrop_path?: string | null;
    vote_average?: number;
    overview?: string;
    first_air_date?: string;
    origin_country?: string[];
    genre_ids?: number[];
    original_language?: string;
    vote_count?: number;
    name?: string;
    original_name?: string;
}

export interface MovieDetail {
    adult?: boolean;
    backdrop_path?: string | null;
    belongs_to_collection?: null | object;
    budget?: number;
    genres?: Array<Genres_Series>;
    homepage?: string | null;
    id?: number;
    imdb_id?: string | null;
    original_language?: string;
    original_title?: string;
    overview?: string | null;
    popularity?: number;
    poster_path?: string | null;
    production_companies?: Array<Production_Companies_Series>;
    production_countries?: Array<Production_Countries_Series>;
    release_date?: string;
    revenue?: number;
    runtime?: number | null;
    spoken_languages?: Array<Spoken_Languages_Movie>;
    status?: string;
    tagline?: string | null;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

export interface SeriesDetail {
    backdrop_path?: string | null;
    created_by?: Array<Created_By_Series>;
    episode_run_time: number[];
    first_air_date?: string;
    genres?: Array<Genres_Series>;
    homepage?: string;
    id?: number;
    in_production?: boolean;
    languages?: string[];
    last_air_date?: string;
    last_episode_to_air: Array<Last_Episode_To_Air_Series>;
    name?: string;
    next_episode_to_air?: null;
    networks?: Array<Networks_Series>;
    production_companies?: Array<Production_Companies_Series>;
    production_countries?: Array<Production_Countries_Series>;
    seasons?: Array<Seasons_Series>;
    spoken_languages?: Array<Spoken_Languages_Series>;
    status?: string;
    tagline?: string;
    type?: string;
    vote_average?: number;
    vote_count?: number;
}

export interface ApiResponse<T> {
    page: number;
    results: Array<T>;
    total_results: number;
    total_pages: number;
}

// *****array objects doen below*************

export interface Created_By_Series {
    id?: number;
    credit_id?: string;
    name?: string;
    gender?: number;
    profile_path?: string | null;
}

export interface Genres_Series {
    id?: number;
    name?: string;
}

export interface Last_Episode_To_Air_Series {
    air_date?: string;
    episode_number?: number;
    id?: number;
    name?: string;
    overview?: string;
    production_code?: string;
    season_number?: number;
    still_path?: string | null;
    vote_average?: number;
    vote_count?: number;
}

export interface Networks_Series {
    number_of_episodes?: number;
    number_of_seasons?: number;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string | null;
}

export interface Production_Countries_Series {
    iso_3166_1?: string;
    name?: string;
}

export interface Production_Companies_Series {
    name?: string;
    id?: number;
    logo_path?: string | null;
    origin_country?: string;
}

export interface Seasons_Series {
    air_date?: string;
    episode_count?: number;
    id?: number;
    name?: string;
    overview?: string;
    poster_path?: string;
    season_number?: number;
}

export interface Spoken_Languages_Series {
    english_name?: string;
    iso_639_1?: string;
    name?: string;
}

export interface Spoken_Languages_Movie {
    iso_639_1?: string;
    name?: string;
}
