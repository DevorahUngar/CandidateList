import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const CandidateStatusCountContext = createContext()

const CandidateStatusComponent = (props) => {
    const [pendingCount, setPendingCount] = useState(0)
    const [rejectedCount, setRejectedCount] = useState(0)
    const [acceptedCount, setAcceptedCount] = useState(0)

    useEffect(() => {
        refreshCounts()
    }, [])

    const refreshCounts = async () => {
        const pending = await axios.get('/api/shidduch/researching')
        setPendingCount(pending.data.length)

        const rejected = await axios.get('/api/shidduch/saidno')
        setRejectedCount(rejected.data.length)

        const accepted = await axios.get('/api/shidduch/saidyes')
        setAcceptedCount(accepted.data.length)
    }

    const obj = {
        pendingCount, 
        acceptedCount, 
        rejectedCount, 
        refreshCounts
    }

    return <CandidateStatusCountContext.Provider value={obj}>
        {props.children}
    </CandidateStatusCountContext.Provider>
}

const useStatusCount = () => {
    return useContext(CandidateStatusCountContext)
}


export default CandidateStatusComponent
export { useStatusCount }
