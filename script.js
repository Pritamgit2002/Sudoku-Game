var max_error = prompt("Please enter the max error limit");
if(max_error==null){
    alert("hey,there is no error limit ");
}
//document.getElementById("dev").innerText = max_error;

var numSelected = null;
var tileSelected = null;

var error = 0;

var board1 = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution1 = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]


var board2 =[
    "5346789--",
    "672195348",
    "198342567",
    "859761423",
    "426853791",
    "713924856",
    "961537284",
    "287419635",
    "345286179"
]

var solution2 =[
    "534678912",
    "672195348",
    "198342567",
    "859761423",
    "426853791",
    "713924856",
    "961537284",
    "287419635",
    "345286179"
  ]

  var num=Math.floor(Math.random() * 2);
  num=num;

if(num==1){
  var board=board1;
  var solution=solution1;
  var err=45;
}

else{
    var board=board2;
    var solution=solution2;
    var err=2;
}

window.onload = function () {
    setGame();
}

function setGame() {
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);


    }


    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
                
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizantal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}


function selectNumber() {

    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }
        //this.innerText=numSelected.id;

        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
        console.log(r);
        console.log(c);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
            err=err-1;
            
            if(err==0){
                document.getElementById("demo").innerHTML = "Congaratulation! you have solved the Sudoku.";
            }

        }
        else {
            error += 1;
            document.getElementById("errors").innerText = error;
            
            
            
        if (error == max_error ) {
            alert("you have reached your maximum error limit, try again.");
            window.location.reload();
        }
        
        

        }
    }
}
//new game
function game() {
    window.location.reload();

}


/*
    
    set max error limit
*/