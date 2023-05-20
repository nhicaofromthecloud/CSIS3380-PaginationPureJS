const usersPerPage = 10;
let currentPage = 1;

function displayUsers(users, page) {
  document.querySelector('.page-header h3').textContent = `Total: ${users.length}`;
  const start = (page - 1) * usersPerPage;
  const end = start + usersPerPage;
// create a subset of the users to display on page
  const currentUsers = users.slice(start, end); // end is not included in slice
  const contactList = document.querySelector('.contact-list');
  

  contactList.innerHTML = ''; //empty the content

  currentUsers.forEach(user => {
    const contactItem = document.createElement('li');
    contactItem.classList.add('contact-item', 'cf'); //cf for clearfix

    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contact-details');

    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = user.image;

    const name = document.createElement('h3');
    name.textContent = user.name;

    const email = document.createElement('span');
    email.textContent = user.email;

    contactDetails.appendChild(avatar);
    contactDetails.appendChild(name);
    contactDetails.appendChild(email);

    const joinedDetails = document.createElement('div');
    joinedDetails.classList.add('joined-details');

    const joinedDate = document.createElement('span');
    joinedDate.classList.add('date');
    joinedDate.textContent = `Joined ${user.joined}`;

    joinedDetails.appendChild(joinedDate);

    contactItem.appendChild(contactDetails);
    contactItem.appendChild(joinedDetails);

    contactList.appendChild(contactItem);
  });

  
}

function createPagination(users) {
  const totalPages = Math.ceil(users.length / usersPerPage); //rounds up
  const pagination = document.createElement('ul');
  pagination.classList.add('pagination');
  
  for (let i = 1; i <= totalPages; i++) {
    const eachPage = document.createElement('li');
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;
    pageLink.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = i;
      displayUsers(users, currentPage); //to change page
    });

    eachPage.appendChild(pageLink);
    pagination.appendChild(eachPage);
  }

  document.querySelector('.page').appendChild(pagination);
}


displayUsers(users, currentPage);
createPagination(users);
