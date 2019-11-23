import React, {useEffect, useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";

const initialQuery = "";
const initialSuggestions = [];

const fetchSuggestions = async (query, setSuggestions) => {
    try {
        const response = await fetch(`/api/autocomplete?query=${query}`);
        const data = await response.json();

        setSuggestions(data.results);
    } catch (err) {
        return [];
    }
};

const Input = ({ onSelect }) => {
    const [query, setQuery] = useState(initialQuery);
    const [suggestions, setSuggestions] = useState(initialSuggestions);

    useEffect(()  => {
        if (query.length > 2) {
            fetchSuggestions(query, setSuggestions);
        }
    }, [query]);

    return(
        <Autocomplete
            options={ suggestions }
            getOptionLabel={option => option.name }
            onInputChange={ (event, value) => setQuery(value) }
            onChange={ (event, value) => onSelect(value) }
            renderInput={params => (
                <TextField {...params} label="Znajdź miejscowość" variant="outlined" />
            )}
            defaultValue={{name: ""}}
        />
    );
};

export default Input;
