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
    vote_avarage?: number;
}

export interface Series {}

export interface ApiResponse<T> {
    page: number;
    results: Array<T>;
    total_results: number;
    total_pages: number;
}
