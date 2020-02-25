import call from '../../utils/call'
const API_URL = process.env.REACT_APP_API_URL
//const API_URL = process.env.REACT_APP_TEST_DB_URL
/**
 * Call all points garbages
 */
export default function() {
    
    return (async ()=> {
       
            const res = await call (`${API_URL}/garbage`, {
            method: 'GET',
            headers: {'constent-type': 'application/json'},
        })

        if (res.status===200){
            const poinst=JSON.parse(res.body)
            return poinst
        }else{
            const {error}=  res.json()
            throw Error(error)
        }                 
    })()
}