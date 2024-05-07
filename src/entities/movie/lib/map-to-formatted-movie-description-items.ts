import dayjs from "dayjs";
import { MovieCardSize } from "../ui/movie-card/movie-card";
import { MovieCardDescriptionListItem } from "../model/types/movie";

interface MovieDetails {
  release_date: string;
  genres: string[];
  revenue?: number;
  runtime?: number;
  budget?: number;
}

function mapToFormattedMovieDescriptionItems(
  cardSize: MovieCardSize,
  movieDetails: MovieDetails
) {
  const { release_date, revenue, runtime, budget, genres } = movieDetails;
  const joinedGenres = genres.join(", ");

  if (cardSize === MovieCardSize.L) {
    return [
      runtime && {
        name: "Duration",
        value: toHoursAndMinutes(runtime),
      },
      {
        name: "Premiere",
        value: dayjs(release_date).format("MMMM D, YYYY"),
      },
      budget && {
        name: "Budget",
        value: translateNumberIntoThousandsOfDollars(budget),
      },
      revenue && {
        name: "Gross worldwide",
        value: translateNumberIntoThousandsOfDollars(revenue),
      },
      {
        name: "Genres",
        value: joinedGenres,
      },
    ].filter((item) => Boolean(item)) as MovieCardDescriptionListItem[];
  }

  return [
    {
      name: "Genres",
      value: joinedGenres,
    },
  ];
}

function toHoursAndMinutes(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return formatHours(hours) + " " + formatMinutes(minutes);
}

function formatHours(hours: number): string {
  if (hours === 0) {
    return "";
  }

  return hours + "h";
}

function formatMinutes(minutes: number): string {
  if (minutes === 0) {
    return "";
  }

  if (minutes < 10) {
    return `0${minutes}m`;
  }

  return minutes + "m";
}

function translateNumberIntoThousandsOfDollars(x: number): string {
  return `$${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export { mapToFormattedMovieDescriptionItems };
