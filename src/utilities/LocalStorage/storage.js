

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
    if(getStoredItems[id] != 0){
        getStoredItems[id] = getStoredItems[id] - 1;
        localStorage.setItem('food', JSON.stringify(getStoredItems));
    }    
}

function increaseFromDb(id){
    let getStoredItems = JSON.parse(localStorage.getItem('food') || '{}');
    if(getStoredItems[id] !=5){
        getStoredItems[id] = getStoredItems[id] + 1 ;
        localStorage.setItem('food', JSON.stringify(getStoredItems));
        console.log('ok');
    } 
}

function deleteFromDb(id){
    let getStoredItems = JSON.parse(localStorage.getItem('food') || '{}');
    if(id in getStoredItems){
        delete getStoredItems[id];
        localStorage.setItem('food', JSON.stringify(getStoredItems));
    }
}
export {
    addToDb,
    getStoredItem,
    decreaseFromDb,
    increaseFromDb,
    deleteFromDb
}
