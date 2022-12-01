

function addToDb(id){
    let getStoredItems = JSON.parse(localStorage.getItem('food') || '{}')    ;
    getStoredItems[id] = 1;
    localStorage.setItem('food', JSON.parse(getStoredItems));
}



export {
    addToDb
}
