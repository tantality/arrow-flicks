import { QueryParam } from "@/pages/api/proxy/types/common";

export const validateGenreId = (genreId: QueryParam): string | null => {
  if (!genreId) {
    return null;
  }

  const genreIdAsNumber = Number(genreId);
  const isGenreIdNumber = !isNaN(genreIdAsNumber);

  if (!isGenreIdNumber) {
    return "genreId must be a number";
  }

  return null;
};
