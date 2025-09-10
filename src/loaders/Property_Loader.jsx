export async function All_Properties(){
    let res = await fetch('https://dinmaegler.onrender.com/homes')
    let data = await res.json()
    return data 
}

export async function Single_Property({params}){
 console.log(params);
    let response = await fetch (`https://dinmaegler.onrender.com/homes/${params.id}`);
    let data = await response.json()
    return data
}