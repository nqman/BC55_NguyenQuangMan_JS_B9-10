// Tạo đối tượng dsnv từ lớp đối tượng DanhSachNhanVien
var dsnv = new DanhSachNhanVien();

function domID(id) {
  return document.getElementById(id);
}

// Lấy thông tin nhân viên
function layThongTinNV() {
  var _taiKhoan = domID("tknv").value;
  var _hoTen = domID("name").value;
  var _email = domID("email").value;
  var _matKhau = domID("password").value;
  var _ngayLam = domID("datepicker").value;
  var _luongCoBan = domID("luongCB").value * 1;
  var _chucVu = domID("chucvu").value;
  var _gioLam = domID("gioLam").value * 1;
  // Tạo đối tượng nv từ lớp đối tượng NhanVien
  var nv = new NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
  );
  //   Tính lương
  nv.tinhTongLuong("chucvu");
  return nv;
}

// tạo đối tượng nhân viên từ lớp đối tượng NhanVien

// Thêm nhân viên
function themNguoiDung() {
  var nv = layThongTinNV();
  console.log(nv);
  if (nv) {
    dsnv._themNV(nv);
    nv._xepLoai();
    console.log(nv.gioLam);
    console.log(dsnv.arr);
    renderListNV(dsnv.arr);
  }
}
// Render danh sách nhân viên
function renderListNV(data) {
  var content = "";
  for (var i = 0; i < data.length; i++) {
    nv = data[i];
    content += `
      <tr>
          <td>${nv.taiKhoan}</td>
          <td>${nv.hoTen}</td>
          <td>${nv.email}</td>
          <td>${nv.ngayLam}</td>
          <td>${nv.chucVu}</td>
          <td>${nv.tongLuong}</td>
          <td>${nv.xepLoai}</td>
      </tr>
        `;
  }
  domID("tableDanhSach").innerHTML = content;
}
