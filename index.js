module.exports = new(function() {

  
  String.prototype.uHereDoc = function() {
    return this.replace(/^function\s?\(\)\s?\{\/\*/gi, "").replace(/\*\/;?\}$/gi, "");
  };
  String.prototype.uAddslashes = function(s) {
    var reg = new RegExp(s, 'g');
    return this.replace(reg, "\\" + s);
  }
  String.prototype.uRepeat = function(i) {
    var repeatStr = this;
    var str = "";
    while (i > 0) {
      str += repeatStr;
      i--;
    }
    return str;
  }

  /**
   * パスからファイル情報返す
   * @return ['ファイル名','拡張子','拡張子抜きファイル名']
   */
  String.prototype.uGetFileInfo = function() {
      var file_path = this;
      // Extract a file name with the extension.
      var name_ext = file_path.substring(file_path.lastIndexOf("/") + 1, file_path.length);
      // Extract only the extension of the file.
      var ext = name_ext.substring(name_ext.lastIndexOf(".") + 1, name_ext.length);
      // Extract only the name part of the file.
      var name = name_ext.substring(0, name_ext.indexOf("."));
      array = new Array(name_ext, ext, name);
      return array;
    }
    // パスからファイル名を返す
  String.prototype.uGetFileNameExt = function() {
      file_path = this;
      return file_path.uGetFileInfo()[0];
    }
    // パスから拡張子を返す
  String.prototype.uGetFileExt = function() {
      file_path = this;
      return file_path.uGetFileInfo()[1];
    }
    // パスから拡張子抜きファイル名を返す
  String.prototype.uGetFileName = function() {
    file_path = this;
    return file_path.uGetFileInfo()[2];
  }
})();
