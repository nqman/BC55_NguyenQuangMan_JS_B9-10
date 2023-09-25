function DanhSachNhanVien() {
  this.arr = [];

  this._themNV = function (nv) {
    this.arr.push(nv);
  };
  this._timViTriNV = function (taiKhoan) {
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var nv = this.arr[i];
      if (taiKhoan === nv.taiKhoan) {
        index = i;
        break;
      }
      return index;
    }
  };
  this._xoaNV = function (taiKhoan) {
    var index = this._timViTriNV(taiKhoan);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };
  this._layThongTinNVTheoTaiKhoan = function (taiKhoan) {
    var index = this._timViTriNV(taiKhoan);
    if (index !== -1) {
      return this.arr[index];
    }
    return null;
  };
  this._suaNV = function taiKhoan() {
    var index = this._timViTriNV(taiKhoan);
  };
  this._capNhatNV = function (nv) {
    var index = this._timViTriNV(nv.taiKhoan);
    if (index !== -1) {
      this.arr[index] = nv;
    }
  };
  this._timNV = function () {};
}
