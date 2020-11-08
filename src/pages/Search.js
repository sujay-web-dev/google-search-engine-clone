import React, { useState } from 'react'
import "./Search.css"
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({hidebuttons}) {
    const [{},dispatch] = useStateValue();

    const [input, setinput] = useState("")
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        console.log("You hit the search button");
        console.log("term from search.js",input);

        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })

        history.push('/search')


    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputicon" />
                
                <input value={input} onChange={e => setinput(e.target.value)} />
                <MicIcon />
            </div>

            {!hidebuttons ? (
                <div className="search__buttons">
                <Button type="submit" variant="outlined" onClick={search} >Google Search</Button>
                <Button variant="outlined" >I'm Feeling Lucky</Button>
            </div>
            ) : (
                <div className="search__buttons">
                <Button className="search__buttonshidden" type="submit" variant="outlined" onClick={search} >Google Search</Button>
                <Button className="search__buttonshidden" variant="outlined" >I'm Feeling Lucky</Button>
            </div>
            )}
            
            
        </form>
    )
}

export default Search
