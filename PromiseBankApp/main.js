let mainRow = document.querySelector('#mainRow');
let formRow = document.querySelector('#formRow');
let accBtn = document.querySelector('#accBtn');
let addAccBtn = document.querySelector('#addAccBtn');
let editAccBtn = document.querySelector('#editAccBtn');
let mainTbody = document.querySelector('#mainTbody');
let formName = document.querySelector('#formName');
let formDeposit = document.querySelector('#formDeposit');
let formCard = document.querySelector('#formCard');
let formAddBtn = document.querySelector('#formAddBtn');
let deleteRow = document.querySelector('#deleteRow');
let deleteTbody = document.querySelector('#deleteTbody');
let editRow = document.querySelector('#editRow');
let editAddBtn = document.querySelector('#editAddBtn');
let editName = document.querySelector('#editName');
let editDeposit = document.querySelector('#editDeposit');
let editCard = document.querySelector('#editCard');

createTable();

accBtn.addEventListener('click',createTable);
addAccBtn.addEventListener('click',displayForm);
formAddBtn.addEventListener ('click', saveAccount);
editAccBtn.addEventListener ('click', editDeleteAccount);



editAddBtn.addEventListener('click', () => {

  db.edit(
    document.querySelector('#editId').value,
    document.querySelector('#editName').value,
    document.querySelector('#editDeposit').value,
    document.querySelector('#editCard').value
  ).then( (res) => {
    createTable();
  } )
});

function createTable() {
  editRow.style.display = "none";
  formRow.style.display = 'none';
  mainRow.style.display = 'block';
  deleteRow.style.display = 'none';
  db.getAll().then(function (res) {

      let text = '';
      res.forEach(function (e) {
        text += `
<tr>
  <td>${e.id}</td>
  <td>${e.name}</td>
  <td>${e.deposit}</td>
  <td>${e.cCard}</td>
</tr>
        `;
      })
      mainTbody.innerHTML = text;
  })
}

function displayForm() {
  editRow.style.display = "none";
  mainRow.style.display = "none";
  formRow.style.display = "block";
  deleteRow.style.display = 'none';
}
function editForm(account) {
  editRow.style.display = "block";
  mainRow.style.display = "none";
  formRow.style.display = "none";
  deleteRow.style.display = 'none';

  document.querySelector('#editId').value = account.id;
  document.querySelector('#editName').value = account.name;
  document.querySelector('#editDeposit').value = account.deposit;
  document.querySelector('#editCard').value = account.cCard;
}

function saveAccount() {
  let name = formName.value;
  let deposit = formDeposit.value;
  let card = formCard.value;
  db.save(name,deposit,card).then(() => {
    createTable();
  })
}

function editDeleteAccount() {
  editRow.style.display = "none";
  formRow.style.display = 'none';
  mainRow.style.display = 'none';
  deleteRow.style.display = 'block';
  db.getAll().then(function (res) {
      let text = '';
      res.forEach(function (e) {
        text += `
<tr>
  <td>${e.id}</td>
  <td>${e.name}</td>
  <td>${e.deposit}</td>
  <td>${e.cCard}</td>
  <td><button data-accid="${e.id}" class="btn-xs btn btn-danger edit">Edit</button>${''}
  <button data-accid="${e.id}" class="btn-xs btn btn-primary delete">Delete</button></td>
</tr>
        `;
      })
      deleteTbody.innerHTML = text;
      let delBtn = document.querySelectorAll('.delete');
      let editBtn = document.querySelectorAll('.edit');
      for (var i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener('click',function () {
          db.delete(this.dataset.accid).then( () => {
            createTable();
          })
        })

      }
      for (var i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener('click',function () {
          db.get(this.dataset.accid).then( (res) => {
            editForm(res);
          } )
          // editForm(this.dataset.accid);
        })
      }
  })

}
