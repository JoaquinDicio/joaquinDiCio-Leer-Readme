import getData from "../utils/getData.js"

export default async function SearchModal(props) {
    //getting data
    const {clothes} = await getData('../db/fake-data.json')
    //finding coincidences
    const filteredClothes = clothes.filter((item) => item.name.toLowerCase().includes(props.searchValue.toLowerCase()));
    let clothesHTML =''
    //returning component
    return (
        `
        <div class="d-flex flex-column">
            <div class="search-info">
                <h5>Busquedas populares</h5>
                ${props.searchValue}
            </div>
            <div class="search-info">
                <h5>Busquedas recientes</h5>
            </div>
        </div>  
        <div class="results-info d-flex justify-content-center align-items-center">
            NO RESOULTS FOUND
        </div>
        `
    )
    
}