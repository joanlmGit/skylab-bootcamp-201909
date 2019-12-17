
const URL_APP_API= process.env.REACT_APP_API_URL

export default function (image){
    let fs=new FormData()
    fs.append('file',image)


    return (async () => {


        const response = await fetch (`${URL_APP_API}/data/images`, {
            method: 'POST',
            body: FormData
        })

        if (response.status !==200){
            const {error} =await response.json()
            throw Error(error)

        }else{
            return await response.json()
        }
    })()



}