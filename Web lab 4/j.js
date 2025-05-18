function toggleEdit() {
    const elements = document.querySelectorAll('.editable');
    elements.forEach(el => {
      el.contentEditable = el.isContentEditable ? "false" : "true";
    });
  }
  
  const form = document.getElementById('lab-form');
  
  function loadFromStorage() {
    if(localStorage.getItem('name')) {
      document.getElementById('input-name').value = localStorage.getItem('name');
    }
    if(localStorage.getItem('email')) {
      document.getElementById('input-email').value = localStorage.getItem('email');
    }
    if(localStorage.getItem('date')) {
      document.getElementById('input-date').value = localStorage.getItem('date');
    }
    if(localStorage.getItem('description')) {
      document.getElementById('input-description').value = localStorage.getItem('description');
    }
  
    if(localStorage.getItem('nameDisplay')) document.getElementById('name-display').textContent = localStorage.getItem('nameDisplay');
    if(localStorage.getItem('titleDisplay')) document.getElementById('title-display').textContent = localStorage.getItem('titleDisplay');
    if(localStorage.getItem('addressDisplay')) document.getElementById('address-display').textContent = localStorage.getItem('addressDisplay');
    if(localStorage.getItem('phone-display')) document.getElementById('phone-display').textContent = localStorage.getItem('phone-display');
    if(localStorage.getItem('emailDisplay')) document.getElementById('email-display').textContent = localStorage.getItem('emailDisplay');
  
    if(localStorage.getItem('fullnameDisplay')) document.getElementById('fullname-display').textContent = localStorage.getItem('fullnameDisplay');
    if(localStorage.getItem('birthdateDisplay')) document.getElementById('birthdate-display').textContent = localStorage.getItem('birthdateDisplay');
    if(localStorage.getItem('statusDisplay')) document.getElementById('status-display').textContent = localStorage.getItem('statusDisplay');
  
    if(localStorage.getItem('rusDisplay')) document.getElementById('rus-display').textContent = local
  