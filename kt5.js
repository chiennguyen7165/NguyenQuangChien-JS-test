function countString(){
    chuoi = document.getElementById("NoiDung").value
    let doDaiChuoi = chuoi.length;
    if (doDaiChuoi > 200){
        document.getElementById("SoKyTu").value = "You have typed more than the allowed characters!";
    }
    else{
        document.getElementById("SoKyTu").value = doDaiChuoi;
    }
}
