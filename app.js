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
    let winner = document.getElementById('winner');
    
    

    let name = '';
    let randomNumber = 0;
    let computer = function(){
        
        let generate = function(){
            randomNumber = Math.floor(Math.random()*9);
            console.log(randomNumber);
        }
        generate();

        let addToBoard = function(){
            let i = randomNumber + 1;
            document.getElementById(i).innerText = '✗';
            gameBoard.gameboard[randomNumber] = 'x';
            console.log(i);
            console.log(gameBoard.gameboard);
        }

        let freeSpace = function(){
           
            if(gameBoard.gameboard[randomNumber] == null){
                addToBoard();
            }else{            
              generate();
              freeSpace();
          }
        }
        freeSpace();
    }

    

    function target(e){
        let d = e.target;
        //d.innerText = '✗';
        let i = d.id - 1 ;
        if(d.innerText == ''){
        d.innerText = '❍';
        gameBoard.gameboard[i] = 'o';
        check();
        computer();
        
    } else{
        console.log(gameBoard.gameboard);
        
    }
    }

    function clear(){
        gameBoard.gameboard = [];
        for(let i = 1 ; i<=9 ; i++){
            document.getElementById(i).innerText = '';
        }
    }

    function check(){
        
        for(let i=0 ; i<7; i+=3){
            if(gameBoard.gameboard[i] == gameBoard.gameboard[i+1] &&
                 gameBoard.gameboard[i+2] == gameBoard.gameboard[i] 
                 && gameBoard.gameboard[i] == 'o'){
                console.log('we have a winner');
                winner.style.display = 'flex';
                dom.style.display = 'none';
                
                clear();
            }else{
                console.log('no winner test 1 ');
            }
        }
        for(let i=0 ; i<3; i++){
            if(gameBoard.gameboard[i] == gameBoard.gameboard[i+3] && 
                gameBoard.gameboard[i+3] == gameBoard.gameboard[i+6] &&
                gameBoard.gameboard[i] == 'o'){
                    console.log('you won');
                    winner.style.display = 'flex';
                    dom.style.display = 'none';
                    
                    clear();
                }else{
                    console.log('no winner test 2');
                }
        }
        if((gameBoard.gameboard[0] == gameBoard.gameboard[4] &&
             gameBoard.gameboard[4] == gameBoard.gameboard[8] && 
             gameBoard.gameboard[0] == 'o') || 
             (gameBoard.gameboard[2] == gameBoard.gameboard[4] && 
                gameBoard.gameboard[4] == gameBoard.gameboard[6] &&
                gameBoard.gameboard[2] == 'o')){
                    console.log('congratulation');
                    winner.style.display = 'flex';
                    dom.style.display = 'none';
                    
                    clear();
                }else{
                    console.log('no winner test 3');
                }
                let n= 0;
        for(let i=0; i<9; i++){
            
            if(gameBoard.gameboard[i] != null){
                n = n+1;
            }
            if(n == 9){
                console.log('tie');
                winner.style.display = 'flex';
                winner.innerText = 'Tie';
                dom.style.display = 'none';
                
                clear();
            }
        }
    }

    function hide(){
       
        winner.style.display = 'none';
        dom.style.display = 'grid';
        
        document.getElementById('form').className = 'hide';
        document.getElementById('start').className = 'restart';
        
        dom.className = 'main';
        
        name = document.getElementById('name').value;
        players(name);
        name.value = '';
        clear();
        }

        let button = document.getElementById('start');
        button.addEventListener('click',hide);

        
       

    return{
        name
    }
    
}

game();

let players = function(name){
    return{
        name
    }
}
