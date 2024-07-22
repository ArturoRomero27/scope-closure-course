function greating() {
    let userName = 'Oscar'
    
    function displayUserName() {
        return 'Hello ' + userName
        
    }
    return displayUserName
}

const g = greating ();
console.log(g);
console.log(g());