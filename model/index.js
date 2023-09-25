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

  //! Validation

  var isValid = true;
  // Kiểm tra Tài khoản
  isValid &=
    kiemTraRong(_taiKhoan, "tbTKNV", "Vui lòng không bỏ trống") &&
    doDaiKyTu(_taiKhoan, 4, 6, "tbTKNV", "Vui lòng nhập từ 4-6 ký số");
  //Kiểm tra tên nhân viên
  isValid &=
    kiemTraRong(_hoTen, "tbTen", "Vui lòng không bỏ trống") &&
    kiemTraChu(_hoTen, "tbTen", "Vui lòng nhập chữ");
  // Kiểm tra email
  isValid &=
    kiemTraRong(_email, "tbEmail", "Vui lòng không bỏ trống") &&
    kiemTraEmail(_email, "tbEmail", "Vui lòng đúng định dạng email");
  // Kiểm tra Mật khẩu
  isValid &=
    kiemTraRong(_matKhau, "tbMatKhau", "Vui lòng không bỏ trống") &&
    doDaiKyTu(_matKhau, 6, 10, "tbMatKhau", "Vui lòng nhập từ 6-10 ký tự") &&
    kiemTraMatKhau(
      _matKhau,
      "tbMatKhau",
      "Mật khẩu phải chứa 1 chữ hoa, 1 chữ số, 1 ký tự đặc biệt"
    );

  // Kiểm tra Lương cơ bản
  isValid &=
    kiemTraRong(_luongCoBan, "tbLuongCB", "Vui lòng không bỏ trống") &&
    kiemTraKhoangGiaTri(
      _luongCoBan,
      1000000,
      20000000,
      "tbLuongCB",
      "Vui lòng nhập mức lương từ 1 triệu -> 20 triệu"
    );
  // Kiểm tra chức vụ
  isValid &= kiemTraChucVu("chucvu", "tbChucVu", "Vui lòng chọn chức vụ");
  // Kiểm tra số giờ làm
  isValid &=
    kiemTraRong(_gioLam, "tbGiolam", "Vui lòng không bỏ trống") &&
    kiemTraKhoangGiaTri(
      _gioLam,
      80,
      200,
      "tbGiolam",
      "Vui lòng nhập số giờ làm từ 80 -> 200 giờ"
    );
  if (!isValid) {
    return null;
  }
  //! Validation
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
    //! clear giá trị cũ
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
          <td>
          <button class="btn btn-success" onclick="suaNV('${nv.taiKhoan}')">Sửa</button>
          <button class="btn btn-danger" onclick="xoaNV('${nv.taiKhoan}')">Xoá</button>
          </td>
      </tr>
        `;
  }
  domID("tableDanhSach").innerHTML = content;
}
// Xoá nhân viên
function xoaNV(taiKhoan) {
  dsnv._xoaNV(taiKhoan);
  renderListNV(dsnv.arr);
}
// Sửa nhân viên
function suaNV(taiKhoan) {
  var nv = dsnv._layThongTinNVTheoTaiKhoan(taiKhoan);
  if (nv) {
    domID("tknv").value = nv.taiKhoan;
    domID("name").value = nv.hoTen;
    domID("email").value = nv.email;
    domID("password").value = nv.matKhau;
    domID("datepicker").value = nv.ngayLam;
    domID("luongCB").value = nv.luongCoBan;
    domID("chucvu").value = nv.chucVu;
    domID("gioLam").value = nv.gioLam;
  }
}
// cập nhật nhân viên
function capNhatNV() {
  var nv = layThongTinNV();
}
