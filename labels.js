outerLoop: for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        console.log({i, j});
        if(i > j) break outerLoop;
    }
}
// as you can see this code has not break above loop of i, so use labels for that