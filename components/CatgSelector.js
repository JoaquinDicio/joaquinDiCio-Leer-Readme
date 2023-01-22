export default function CatgSelector( props ){
    
    const uniqueCategories = props.clothes.reduce((uniqueCategories, item) => { //removing duplicates and extracting only category info
        if (!uniqueCategories.some(x => x.name === item.category)) {
            uniqueCategories.push({name:item.category,img:item.categoryImg});
        }
        return uniqueCategories;
    }, []);
    
    //generating six cards
    let categoriesHTML = ''
    uniqueCategories.slice(0,6).forEach((category)=>categoriesHTML+=`
        <div style="background-image:url(${category.img})" class="category-card"> 
            <div class="d-flex align-items-center card-opacity">
                <p class="text-white text-center w-100 category-card-name">${category.name}</p>
            </div>
        </div>
    `)
    //returning the category selector
    return(`
        <div class="category-list d-flex justify-content-center">
            ${categoriesHTML}
        </div>
    `)
}