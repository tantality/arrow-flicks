import { useRouter } from "next/router";

export default function Movie() {
  const { id } = useRouter().query;

  return <div>movie with id = {id}</div>;
}
