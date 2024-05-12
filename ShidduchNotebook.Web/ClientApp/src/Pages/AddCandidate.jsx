import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddCandidate = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [notes, setNotes] = useState('')

    const isValid = firstName && lastName && email && phoneNumber && notes
    const navigate = useNavigate()

    const onFirstNameChange = e => {
        setFirstName(e.target.value)
    }
    const onLastNameChange = e => {
        setLastName(e.target.value)
    }
    const onEmailChange = e => {
        setEmail(e.target.value)
    }
    const onPhoneNumChange = e => {
        setPhoneNumber(e.target.value)
    }
    const onNotesChange = e => {
        setNotes(e.target.value)
    }

    const onSubmitClick = async () => {
        await axios.post('/api/shidduch/phonerang', {firstName, lastName, email, phoneNumber, notes})
        navigate('/')
    }

    return (
        <div className="container" style={{marginTop: '80px'}}>
            <div className="row" style={{marginTop: '20px'}}>
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Add Candidate</h4>
                        <form>
                            <input type="text" name="firstName" placeholder="First Name" className="form-control"
                                onChange={onFirstNameChange} value={firstName} />
                            <br />
                            <input type="text" name="lastName" placeholder="Last Name" className="form-control"
                                onChange={onLastNameChange} value={lastName} />
                            <br />
                            <input type="text" name="email" placeholder="Email" className="form-control"
                                onChange={onEmailChange} value={email} />
                            <br />
                            <input type="text" name="phoneNumber" placeholder="Phone Number" className="form-control"
                                onChange={onPhoneNumChange} value={phoneNumber} />
                            <br />
                            <textarea rows="5" className="form-control" name="notes"
                                onChange={onNotesChange} value={notes}>
                            </textarea>
                            <br />
                            <button className="btn btn-primary" disabled={!isValid} onClick={onSubmitClick}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCandidate