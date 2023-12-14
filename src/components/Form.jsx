
import { useState } from "react";


const Form = ({ handleSubmit }) => {

    const [input, setInput] = useState({ name: '', profileImage: '', mobileNo: '', email: '', graduatedCheckbox: false, programSelect: '', graduationYear: 2023 })
    // const [name, setName] = useState('');


    return (
        < form onSubmit={() => { handleSubmit(input) }} >
            <span>Add a Student</span>
            <div>
                <label>
                    Full Name
                    <input name="fullName" type="text" placeholder="Full Name" value={input.name} onChange={(event) => setInput({ ...input, name: event.target.value })} />

                </label>

                <label>
                    Profile Image
                    <input name="image" type="url" placeholder="Profile Image" value={input.profileImage} onChange={(event) => setInput({ ...input, profileImage: event.target.value })} />
                    {console.log(input.profileImage)}
                </label>

                <label>
                    Phone
                    <input name="phone" type="tel" placeholder="Phone" value={input.mobileNo} onChange={(event) => setInput({ ...input, mobileNo: event.target.value })} />
                </label>

                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" value={input.email} onChange={(event) => setInput({ ...input, email: event.target.value })} />
                </label>
            </div>

            <div>
                <label>
                    Program
                    <select name="program" defaultValue="" value={input.programSelect} onChange={(event) => setInput({ ...input, programSelect: event.target.value })}>

                        <option value="">-- None --</option>
                        <option value="Web Dev">Web Dev</option>
                        <option value="UXUI">UXUI</option>
                        <option value="Data">Data</option>
                    </select>
                </label>

                <label>
                    Graduation Year
                    <input
                        name="graduationYear"
                        type="number"
                        placeholder="Graduation Year"
                        minLength={4}
                        maxLength={4}
                        min={2023}
                        max={2030}
                        value={input.graduationYear} onChange={(event) => setInput({ ...input, graduationYear: event.target.value })}


                    />
                </label>

                <label>
                    Graduated
                    <input name="graduated" type="checkbox" checked={input.graduatedCheckbox} onChange={(event) => setInput({ ...input, graduatedCheckbox: event.target.checked })} />

                </label>

                <button type="submit">Add Student</button>
            </div>

        </form >

    );
}

export default Form;