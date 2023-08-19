import React, { Component } from 'react';
import { CharacterForm } from './CharacterForm';

export class Character extends Component {
    static displayName = Character.name

    constructor(props) {
        super(props);
        this.state = { characters: [], loading: true };
    }

    componentDidMount() {
        this.getData();
    }

    static renderCharacterData(characters) {
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

    render() {
        let content = this.state.loading
            ? <p><em>Loading...</em></p>
            : Character.renderCharacterData(this.state.characters);
        return (
            <div>
                <h1 id="characterIndexHeader">Characters</h1>
                {content}
                <button className='btn btn-primary'>New</button>

                <CharacterForm />
            </div>
        )
    }

    async getData() {
        const response = await fetch("characters");
        const data = await response.json();
        this.setState({ characters: data, loading: false });
    }
}