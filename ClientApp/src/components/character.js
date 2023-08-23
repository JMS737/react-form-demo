import React, { useEffect, useState } from "react";
import CharacterForm from "./character-form";

export default function Character() {
    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState();
    const [showForm, setShowForm] = useState(false);

    async function getData() {
        const response = await fetch("characters");
        const data = await response.json();
        setCharacters(data);
        setLoading(false);
    }

    function enableForm() {
        setShowForm(true);
    }

    function handleCreated() {
        getData();
        setShowForm(false);
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
        : characters
            ? renderCharacterData(characters)
            : <p><em>Click the load button...</em></p>;
    
    return (
        <div>
            <h1 id="characterIndexHeader">Characters</h1>
            {content}
            <div className="mt-3">
                <button className='btn btn-primary' onClick={enableForm}>New</button>
                <button className='btn btn-primary ms-2' onClick={getData}>Load</button>
            </div>

            {showForm && <CharacterForm onCreated={handleCreated} />}
        </div>
    )
}