import React, { useEffect, useState } from "react";
import CharacterForm from "./character-form";

export default function Character() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState();

    async function getData() {
        const response = await fetch("characters");
        const data = await response.json();
        setCharacters(data);
        setLoading(false);
    }

    // useEffect(() => {
    //     getData();
    // });

    function renderCharacterData(characters) {
        return (
            <table className='table table-striped' aria-labelledby='characterTable'>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Race</th>
                    </tr>
                </thead>
                <tbody>
                    {characters.map(character =>
                        <tr key={character.id}>
                            <td>{character.firstname}</td>
                            <td>{character.lastname}</td>
                            <td>{character.age}</td>
                            <td>{character.race}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    let content = loading
        ? <p><em>Loading...</em></p>
        : renderCharacterData(characters);
    
    return (
        <div>
            <h1 id="characterIndexHeader">Characters</h1>
            {content}
            <button className='btn btn-primary'>New</button>
            <button className='btn btn-primary' onClick={getData}>Load</button>

            <CharacterForm />
        </div>
    )
}