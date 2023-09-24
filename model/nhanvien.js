function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  // Property
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.xepLoai = "";
  //   Method tính tổng lương cho từng đối tượng
  this.tinhTongLuong = function (idSelect) {
    var selectIndex = domID(idSelect).selectedIndex;
    console.log(selectIndex);
    switch (selectIndex) {
      case 1:
        var tongLuong = Number(this.luongCoBan) * 3;
        break;
      case 2:
        var tongLuong = Number(this.luongCoBan) * 2;
        break;
      case 3:
        var tongLuong = Number(this.luongCoBan) * 1;
        break;
    }
    this.tongLuong = tongLuong.toLocaleString();
  };
  this._xepLoai = function () {
    var gioLam = this.gioLam;
    if (gioLam >= 192) {
      xepLoai = "Nhân viên Xuất Sắc";
    } else if (192 > gioLam && gioLam >= 176) {
      xepLoai = "Nhân viên Giỏi";
    } else if (176 > gioLam && gioLam >= 160) {
      xepLoai = "Nhân viên Khá";
    } else if (160 > gioLam) {
      xepLoai = "Nhân viên Trung Bình";
    }
    this.xepLoai = xepLoai;
    console.log(this.xepLoai);
  };
}
