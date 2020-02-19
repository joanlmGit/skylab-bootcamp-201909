
const   API_URL= process.env.REACT_APP_API_URL_IMG

export default function (id,image){
    let fs=new FormData()
    fs.append('file',image)
    

    return (async () => {

        const response = await fetch (`${API_URL}/image/${id}`, {
            method: 'POST',
            //headers: { 'content-type': 'application/json'},
            body: fs
        })

        if (response.status !==200){
            const {error} =await response.json()
            throw Error(error)

        }else{
            return await response.json()
        }
    })()

}