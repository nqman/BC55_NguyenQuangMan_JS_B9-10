// Kiểm tra dữ liệu đã nhập hay chưa
function kiemTraRong(value, idCanhBao, mess) {
  if (value == "") {
    domID(idCanhBao).innerHTML = mess;
    domID(idCanhBao).style.display = "block";
    return false;
  } else {
    domID(idCanhBao).innerHTML = "";
    return true;
  }
}
// Kiểm tra độ dài ký tự
function doDaiKyTu(value, min, max, idCanhBao, mess) {
  if (value.length < min || value.length > max) {
    domID(idCanhBao).innerHTML = mess;
    domID(idCanhBao).style.display = "block";
    return false;
  } else {
    domID(idCanhBao).innerHTML = "";
    return true;
  }
}
// Kiểm tra định dạng chữ
function kiemTraChu(value, idCanhBao, mess) {
  for (var i = 0; i < value.length; i++) {
    if (isNaN(value[i])) {
      domID(idCanhBao).innerHTML = "";
      return true;
    }
  }
  domID(idCanhBao).innerHTML = mess;
  domID(idCanhBao).style.display = "block";
  return false;
}
// Kiểm tra định dạng email
function kiemTraEmail(email, idCanhBao, mess) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var isValid = regexEmail.test(email);
  if (isValid) {
    domID(idCanhBao).innerHTML = "";
    return true;
  } else {
    domID(idCanhBao).innerHTML = mess;
    //?
    domID(idCanhBao).style.display = "block";
    return false;
  }
}
// Kiểm tra mật khẩu
function kiemTraMatKhau(value, idCanhBao, mess) {
  var regexPass = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
  var isValid = regexPass.test(value);
  console.log(isValid);
  if (isValid) {
    domID(idCanhBao).innerHTML = "";
    return true;
  } else {
    domID(idCanhBao).innerHTML = mess;
    domID(idCanhBao).style.display = "block";
    return false;
  }
}
// Kiểm tra khoảng giá trị (lương cơ bản & số giờ làm)
function kiemTraKhoangGiaTri(value, min, max, idCanhBao, mess) {
  if (value < min || value > max) {
    domID(idCanhBao).innerHTML = mess;
    domID(idCanhBao).style.display = "block";
    return false;
  } else {
    domID(idCanhBao).innerHTML = "";
    return true;
  }
}
// Kiểm tra chức vụ không để trống
function kiemTraChucVu(idSelect, idCanhBao, mess) {
  var selectIndex = domID(idSelect).selectedIndex;
  if (selectIndex === 0) {
    domID(idCanhBao).innerHTML = mess;
    domID(idCanhBao).style.display = "block";
    return false;
  } else {
    domID(idCanhBao).innerHTML = "";
    return true;
  }
}
