import { Sidebar } from "@/widgets/sidebar";
import { useRouter } from "next/router";
import { MovieDetails } from "@/widgets/movie-details";
import { HeaderSidebarLayout } from "@/widgets/layouts";
import { Header } from "@/widgets/header";

export default function Movie() {
  const { id } = useRouter().query;

  return (
    <HeaderSidebarLayout
      header={<Header />}
      sidebar={<Sidebar />}
      content={<MovieDetails movieId={id} />}
      maxWidth="800px"
    />
  );
}
