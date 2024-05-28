parent.addEventListener("click", (e) => {
    if (e.target.innerText === "One") {
      alert("You clicked the first button");
    }
  
    if (e.target.innerText === "Two") {
      alert("Elodie loves cats");
    }
  
    if (e.target.innerText === "Three") {
      alert("I am so happy !");
    }
    // etc...
  });