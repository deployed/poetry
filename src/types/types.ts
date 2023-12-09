
export interface AuthorInfoProps {author: string, linecount: string, lines: string[], title: string}
export type PoemInfo = {title: string, author: string, lines: string[], linecount: string}
export interface SearchBar {setter: React.Dispatch<React.SetStateAction<PoemInfo[]>>}