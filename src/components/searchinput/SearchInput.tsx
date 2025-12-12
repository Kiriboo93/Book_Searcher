import '../../css/components/searchInput.css';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

function SearchInput({ type, placeholder }: { type: string, placeholder: string }) {
    /**
     * Context of the app.
     */
    const context = useContext(SearchContext);

    /**
     * Variable to store timeout to set query.
     */
    let timeout: ReturnType<typeof setTimeout>;

    /**
     * Onchange function for the search input.
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        /**
         * Sets query value to use the get.
         */
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            context.setQuery(event.target.value);
        }, 750);
    }

    return (
        <div className='div-search' data-testid="search">
            <Icon className='search-icon' path={mdiMagnify} size={2} />
            <input className='search-input' type={type} placeholder={placeholder} data-testid="search-input" onChange={handleChange} />
        </div>
    )
}

export default SearchInput;