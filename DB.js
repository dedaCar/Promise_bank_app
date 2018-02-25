function DB() {
  this.xml = new XMLHttpRequest();
  this.getAll = function () {

    return new Promise( (resolve,reject) => {
      this.xml.open('GET', 'getAll.php');
      this.xml.onreadystatechange = () => {
        if (this.xml.readyState == 4 && this.xml.status == 200) {
          resolve(JSON.parse(this.xml.responseText));
        }
      }
      this.xml.send();
    } );
  };
  this.save = function (name,deposit,card) {
    let fd = new FormData();
    fd.append('name',name);
    fd.append('deposit',deposit);
    fd.append('card',card);
    return new Promise( (resolve,reject) => {
      this.xml.open('POST', 'saveAccount.php');
      this.xml.onreadystatechange = () => {
        if (this.xml.readyState == 4 && this.xml.status == 200) {
          resolve('Account saved!'); 
        }
      }
      this.xml.send(fd);
    } );
  };
  this.delete = function (id) {
    let fd = new FormData();
    fd.append('id',id);
    return new Promise ( (resolve,reject) => {
      this.xml.open('POST','delAccount.php');
      this.xml.onreadystatechange = () => {
        if (this.xml.readyState == 4 && this.xml.status == 200) {
          resolve ("Account deleted!");
        }
      }
      this.xml.send(fd);
    } )
  };
  this.get = function (id) {
    let fd = new FormData();
    fd.append ('id',id);
    return new Promise ( (resolve,reject) => {
      this.xml.open('POST','getAccount.php');
      this.xml.onreadystatechange = (qwe) => {
        if (this.xml.readyState == 4 && this.xml.status == 200) {
          resolve(JSON.parse(this.xml.responseText));
        }
      }
      this.xml.send(fd);
    } )
  };
  this.edit = function (id, name, deposit, card) {
    let fd = new FormData();
    fd.append ('id',id);
    fd.append ('name',name);
    fd.append ('deposit',deposit);
    fd.append ('card',card);
    return new Promise ( (resolve,reject) => {
      this.xml.open('POST','editAccount.php');
      this.xml.onreadystatechange = (qwe) => {
        if (this.xml.readyState == 4 && this.xml.status == 200) {
          resolve(JSON.parse(this.xml.responseText));
        }
      }
      this.xml.send(fd);
    } )
  };
}
var db = new DB();
