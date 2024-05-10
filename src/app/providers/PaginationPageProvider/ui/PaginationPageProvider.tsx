import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface PaginationPageProviderProps {
  children: ReactNode;
}

export const PaginationPageContext = createContext<number | null>(null);

export const PaginationPageDispatchContext = createContext<Dispatch<
  SetStateAction<number>
> | null>(null);

export const PaginationPageProvider = ({
  children,
}: PaginationPageProviderProps) => {
  const [page, setPage] = useState<number>(1);

  return (
    <PaginationPageContext.Provider value={page}>
      <PaginationPageDispatchContext.Provider value={setPage}>
        {children}
      </PaginationPageDispatchContext.Provider>
    </PaginationPageContext.Provider>
  );
};

export default PaginationPageProvider;
