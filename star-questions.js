function squareStar(m, n) {
  for (let i = 0; i < m; i++) {
    console.log("*".repeat(m))
  }
}


function hallowSquare(en, uzunluq) {
  for (let i = 1; i <= uzunluq; i++) {
    if (i == 1 || i == uzunluq) {
      console.log("*".repeat(en))
    } else {
      let str = ""
      for (let j = 1; j <= en; j++) {
        if (j == 1 || j == en) {
          str += "*"
        } else {
          str += " "
        }
      }
      console.log(str)
    }
  }
}

// squareStar(5,3)


function leftTriangleAngle(n) {
  for (let i = 0; i < n; i++) {
    console.log("*".repeat(i))
  }
}

function rightTriangleAngle(n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i))
  }
}

function downwardTriangleAngle(n) {
  for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i))
  }
}

function diamondAngle(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat((n - i) / 2) + "*".repeat(i) + " ".repeat((n - i) / 2))
  }

  for (let i = n; i >=1; i--) {
    console.log(" ".repeat((n - i) / 2) + "*".repeat(i) + " ".repeat((n - i) / 2))
  }
  

}


// hallowSquare(10,4)
// leftTriangleAngle(6)
// rightTriangleAngle(5)
// downwardTriangleAngle(10)
diamondAngle(10)
