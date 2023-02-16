const toDate = document.querySelector(".f-date");
const date = new Date();
const year = date.getFullYear();
const month = ("0" + (date.getMonth() + 1)).slice(-2);
const day = ("0" + date.getDate()).slice(-2);
const dateStr = year + "-" + month + "-" + day;

toDate.innerHTML = dateStr;

function printText() {
  const textValue = document.querySelector("#text").value;
  document.querySelector("#result").innerHTML = textValue;
  document.querySelector("#text").style.display = "none";
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
    document.querySelector("#createPic").style.display = "none";
  } else {
    document.getElementById("preview").src = "";
  }
}

//----------

function printText1() {
  const textValue = document.querySelector("#text").value;
  document.querySelector("#result").innerHTML = textValue;
  document.querySelector("#text").style.display = "none";
}

function readURL1(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview1").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
    document.querySelector("#createPic1").style.display = "none";
  } else {
    document.getElementById("preview1").src = "";
  }
}

//----------

function printText2() {
  const textValue = document.querySelector("#text").value;
  document.querySelector("#result").innerHTML = textValue;
  document.querySelector("#text").style.display = "none";
}

function readURL2(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview2").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
    document.querySelector("#createPic2").style.display = "none";
  } else {
    document.getElementById("preview2").src = "";
  }
}

//----------

function printText3() {
  const textValue = document.querySelector("#text").value;
  document.querySelector("#result").innerHTML = textValue;
  document.querySelector("#text").style.display = "none";
}

function readURL3(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview3").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
    document.querySelector("#createPic3").style.display = "none";
  } else {
    document.getElementById("preview3").src = "";
  }
}
