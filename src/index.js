const offset = document.getElementById("offset");// si se le pone .value coge como valor inicial = 0
const box1 = document.getElementById("box-1");
const btnLogin = document.getElementById("btn-login");
const btnStart = document.getElementById("btn-start");
const btnEncr = document.getElementById("btn-encr");
const btnDecr = document.getElementById("btn-decr");
const btnBack = document.getElementsByClassName("btn-back");
const btnErase = document.getElementById("btn-erase");


btnLogin.addEventListener("click", () => {
    document.getElementById("welcome-page").style.display = "none";
    document.getElementsByClassName("container")[0].style.display = "block";
    document.getElementById("first-page").style.display = "block";
});
btnStart.addEventListener("click", () => {
    document.getElementById("first-page").style.display = "none";
    document.getElementById("second-page").style.display = "block";
});


document.getElementById("btn-instruction").addEventListener("click", () => {
    document.getElementsByClassName("bg-modal")[0].style.display = "block";
  });
  document.getElementById("close").addEventListener("click", () => {
     document.getElementsByClassName("bg-modal")[0].style.display = "none";
  });


btnEncr.addEventListener("click", () => {
    const a = parseInt(offset.value);
    const b = box1.value;
    const result = cipher.encode(a, b);
    document.getElementById("box-2").value = result;
});

   
btnDecr.addEventListener("click", () => {
    const offsetValue = parseInt(offset.value);
    const box1Value = box1.value;
    const decrypt = cipher.decode(offsetValue, box1Value);
    document.getElementById("box-2").value = decrypt;
});

btnErase.addEventListener("click", () => {
    document.getElementById("boxes").reset();
});
   
btnBack[0].addEventListener("click", () => {
    window.location.href = 'index.html';
});

btnBack[1].addEventListener("click", () => {
    window.location.href = 'index.html';
});