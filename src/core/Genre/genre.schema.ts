export interface GenreListResponse {
  genres: Genre[];
}

interface Genre {
  id: number;
  name: string;
}