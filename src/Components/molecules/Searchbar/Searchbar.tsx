import "./Searchbar.css"
import { Button } from "@atoms/Button"
import { Input } from "@atoms/Input"
import { SearchbarProps } from "./Searchbar.props"

export const Searchbar = ({ searchValue, setSearchValue, handleSearch }: SearchbarProps) => {
    return <>
        <div className="searchbar">
            <Input id="search" type="text" value={searchValue} setValue={setSearchValue} />
            <Button label="Search" handleClick={handleSearch} />
        </div>
    </>
}