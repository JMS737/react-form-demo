import React, { useState } from "react";

export default function CharacterForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("characters", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ character: inputs })
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row mt-2">
                <div className="col">
                    <label
                        className="form-label"
                        for="characterName">First Name</label>
                    <input
                        className="form-control"
                        id="characterName"
                        name="firstName"
                        type="text"
                        value={inputs.firstName || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="col">
                    <label className="form-label" for="characterLastName">Last Name</label>
                    <input
                        className="form-control"
                        name="lastName"
                        id="characterLastName"
                        type="text"
                        value={inputs.lastName || ""}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label className="form-label" for="characterAge">Age</label>
                    <input
                        className="form-control"
                        name="age"
                        id="characterAge"
                        type="number"
                        value={inputs.age || 25}
                        onChange={handleChange}
                    />
                </div>
                <div className="col">
                    <label className="form-label" for="characterRace">Race</label>
                    <select
                        className="form-select"
                        name="race" id="characterRace"
                        type="text"
                        value={inputs.race || ""}
                        onChange={handleChange}
                    >
                        <option selected hidden>Select a race...</option>
                        <option value={0}>Human</option>
                        <option value={1}>Elf</option>
                        <option value={2}>Halfling</option>
                        <option value={3}>Dwarf</option>
                        <option value={4}>Orc</option>
                        <option value={5}>Gnome</option>
                    </select>
                </div>
            </div>
            <div className="mt-2">
                <input type="submit" className="btn btn-primary" />
            </div>
        </form>
    )
}