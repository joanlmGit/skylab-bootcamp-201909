const API_URL = process.env.REACT_APP_API_URL
//const API_URL = process.env.REACT_APP_TEST_DB_URL
export default function(id){

    return(async ()=> {
        const res= await fetch(`${API_URL}/garbage/one/${id}`, {
            method: 'GET',
            heathers: {'constent-type': 'application/json'}
        })

        if (res.status !==200) {
            const {error} = await res.json()
            throw Error(error)
        }
        
            const {garbage}= await res.json()
            return garbage
    })()
}