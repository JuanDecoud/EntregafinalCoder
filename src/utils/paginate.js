const paginateEstile = (numberOfpages)=>{
    let pages = []
    do {
        let number = {
            page : numberOfpages
        }
        pages.push(number)
        numberOfpages--
    } while (numberOfpages!=0);

    let reversed = pages.reverse();
    return reversed
}


export default paginateEstile