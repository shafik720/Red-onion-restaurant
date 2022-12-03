

function addToDb(id){
    let getStoredItems = JSON.parse(localStorage.getItem('food') || '{}')    ;
    
    if(getStoredItems[id]){
        getStoredItems[id] = getStoredItems[id] + 1;
    }else{
        getStoredItems[id] = 1;
    }
    localStorage.setItem('food', JSON.stringify(getStoredItems));
}

function getStoredItem(){
    let getStoredItems = JSON.parse(localStorage.getItem('food') || '{}')    ;
    return getStoredItems;
}

function decreaseFromDb(id){
    let getStoredItems = JSON.parse(localStorage.getItem('food') || '{}');
    if(getStoredItem[id]){
        getStoredItem[id] = getStoredItem[id] - 1;
    }
    localStorage.setItem('food', JSON.stringify(getStoredItems));
}

export {
    addToDb,
    getStoredItem,
    decreaseFromDb
}
