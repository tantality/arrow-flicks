import { Sidebar } from "@/widgets/sidebar";
import cls from "./movies-page.module.scss";
import { useRouter } from "next/router";
import { MovieDetails } from "@/widgets/movie-details";

export default function Movie() {
  const { id } = useRouter().query;

  return (
    <div className={cls.app}>
      <div className={cls.appContainer}>
        <Sidebar className={cls.appSidebar} />
        <div className={cls.appPage}>
          <div className={cls.pageContainer} style={{ maxWidth: "800px" }}>
            <MovieDetails movieId={id}></MovieDetails>
          </div>
        </div>
      </div>
    </div>
  );
}
