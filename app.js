const gameBoard = (() => {
    let gameboard = [];
    
    // function render(){
    //     let dom = document.getElementById('main');
    //     dom.innerHTML = gameboard;
    //     }
    //     render();
    // return {
    //     players
    // }
    
  return {gameboard};

    
})();

let game = function(){
    let dom = document.getElementById('main');
    dom.addEventListener('click',target);
    dom.addEventListener('click',check);

    function target(e){
        let d = e.target;
        //d.innerText = '✗';
        let i = d.id - 1 ;
        if(d.innerText == ''){
        d.innerText = '❍';
        gameBoard.gameboard[i] = 'o';
        console.log(gameBoard.gameboard);
        
    } else{
        console.log(gameBoard.gameboard);
        
    }
    }

    function check(){
    
        for(let i=0 ; i<7; i+=3){
            if(gameBoard.gameboard[i] == gameBoard.gameboard[i+1] &&
                 gameBoard.gameboard[i+2] == gameBoard.gameboard[i] 
                 && gameBoard.gameboard[i]!= null){
                console.log('we have a winner');
                
            }
        }
        for(let i=0 ; i<3; i++){
            if(gameBoard.gameboard[i] == gameBoard.gameboard[i+3] && 
                gameBoard.gameboard[i+3] == gameBoard.gameboard[i+6] &&
                gameBoard.gameboard[i] != null){
                    console.log('you won');
                }
        }
        if((gameBoard.gameboard[0] == gameBoard.gameboard[4] &&
             gameBoard.gameboard[4] == gameBoard.gameboard[8] && 
             gameBoard.gameboard[0] != null) || 
             (gameBoard.gameboard[2] == gameBoard.gameboard[4] && 
                gameBoard.gameboard[4] == gameBoard.gameboard[6] &&
                gameBoard.gameboard[2] != null)){
                    console.log('congratulation');
                }
                let n= 0;
        for(let i=0; i<9; i++){
            
            if(gameBoard.gameboard[i] != null){
                n = n+1;
            }
            if(n == 9){
                console.log('tie')
            }
        }
    }
    
}

game();

let players = function(name){
    return{
        name
    }
}



