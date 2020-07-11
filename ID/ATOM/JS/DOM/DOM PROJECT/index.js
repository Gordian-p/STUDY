var form = document.querySelector('#add-form');
var itemList = document.querySelector('.items');

// Form submit event
form.addEventListener('submit',addItem);

// Add item
function addItem(e) {
    e.preventDefault();

 // Get input value
  var newItem = document.querySelector('#item').value;

  // Create new li element
  var li = document.createElement('li');
  li.className = 'list';

  var spanText = document.createElement('span');
  spanText.className = 'text';
  var spanDeleteButton = document.createElement('span');
  spanDeleteButton.className = 'delete';

  var textSpan = document.createTextNode(newItem);
  var deleteButtonText = document.createTextNode('x');

  spanText.appendChild(textSpan);
  spanDeleteButton.appendChild(deleteButtonText);

  li.appendChild(spanText);
  li.appendChild(spanDeleteButton);

  itemList.appendChild(li);
}


itemList.addEventListener('click',removeItem);
function removeItem(e) {
    if(e.target.classList.contains('delete')){
         if(confirm('Are you sure!!')){
              var li = e.target.parentElement;
              itemList.removeChild(li);
         }
    }
}










// NOTE: this exmple deal with only contain element and not addition element;

// var deleteBtn = document.querySelectorAll('.delete');
// for (var i = 0; i < deleteBtn.length; i++) {
//   deleteBtn[i].addEventListener('click',del);
//
//   function del(e) {
//     if(confirm('Are you sure!')){
//      var li = e.target.parentElement;
//      item.removeChild(li);
//    }
//   }
// }
