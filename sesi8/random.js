function Send(){
  let nama = document.getElementById("exampleInputText1")
  let email = document.getElementById("exampleInputEmail1")
  let message = document.getElementById("exampleFormControlTextarea1")

  let toastbootstrap = document.getElementById("toastbootsrap")

  let validemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)
  if (toastbootstrap.innerHTML !== "") toastbootstrap.innerHTML = ""


  if (nama.value !== "" && email.value !== "" && message.value !== "" &&  validemail === true) {
    // console.log(toastbootstrap.innerHTML)
    toastbootstrap.innerHTML += '<div class="alert alert-primary" role="alert">Terimakasih '+ nama.value +' , telah menghubungi kami</div>'
    nama.value = ""
    email.value = ""
    message.value = ""
  } else {
    toastbootstrap.innerHTML += '<div class="alert alert-danger" role="alert">Lengkapi Data!</div>'
  }

  console.log(nama.value, email.value, message.value , validemail)
}