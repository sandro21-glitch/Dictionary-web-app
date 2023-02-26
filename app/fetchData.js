async function getApi(api) {
    const res = await fetch(api).catch(Error => console.log(Error))
    if(res) {
        return res.json()
    }
    return res
}

export default getApi