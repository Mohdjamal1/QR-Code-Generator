let qrText = document.getElementById('qrText');
let qrImage = document.getElementById('qrImage');
let btn = document.getElementById('btn');
let imgBox = document.getElementById('imgBox');
let info = document.getElementById('info');

btn.addEventListener('click',()=>{
  if(qrText.value.trim()){
  qrImage.src = `https://quickchart.io/qr?text=${qrText.value}&size=200`
    imgBox.classList.add("show-img");
    info.innerText = qrText.value
  }else{
    qrText.classList.add("error");
    imgBox.classList.remove("show-img");
    info.innerText = "";
    setTimeout(()=>{
      qrText.classList.remove('error')
    },1000);
  }
})