import { Dispatch, SetStateAction, useContext } from "react";
import {
  PaginationPageContext,
  PaginationPageDispatchContext,
} from "../ui/PaginationPageProvider";

interface UsePaginationPageType {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const usePaginationPage = (): UsePaginationPageType => {
  const page = useContext(PaginationPageContext) as number;
  const setPage = useContext(PaginationPageDispatchContext) as Dispatch<
    SetStateAction<number>
  >;

  return { page, setPage };
};
