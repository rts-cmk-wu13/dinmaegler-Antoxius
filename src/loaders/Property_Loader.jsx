export async function All_Properties(){
    let res = await fetch('https://dinmaegler.onrender.com/homes')
    let data = await res.json()
    return data 
}