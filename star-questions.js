function squareStar(m, n) {
  for (let i = 0; i < m; i++) {
    console.log("*".repeat(m))
  }
}


function hallowSquare(en,uzunluq){
  for (let i = 1; i <= uzunluq; i++) {
    if (i ==1 || i == uzunluq ) {
      console.log( "*".repeat(en) )
    }else {
      let str = ""
      for (let j=1;j<=en;j++){
        if ( j ==1 || j == en  ){
          str += "*"
        }else{
          str+= " "
        }
      }
      console.log(str)
    }
  }
}

// squareStar(5,3)


function leftTriangleAngle(n){
  for (let i = 0; i < n; i++){
    console.log("*".repeat(i))
  }
}

function rightTriangleAngle(n){
  
}

// hallowSquare(10,4)
leftTriangleAngle(6)
