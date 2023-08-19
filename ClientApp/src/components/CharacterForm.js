import React, { Component } from "react";

export class CharacterForm extends Component {
    static displayName = CharacterForm.name;

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <form>
                <label for="characterName">First Name</label>
                <input id="characterName" type="text" />
                <label for="characterLastName">Last Name</label>
                <input id="characterLastName" type="text" />
                <label for="characterAge">Age</label>
                <input id="characterAge" type="number" />
                <label for="characterRace">First Name</label>
                <input id="characterRace" type="text" />
            </form>
        )
    }
}