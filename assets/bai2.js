const urlApiContact = 'https://test-intern-f66c7-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json';

const btnAdd = document.querySelector('#btnAdd');
const btnClear = document.querySelector('#btnClear');
const renderContact = document.querySelector('.renderContact');


const fetchContact = async() => {
    let count = 1;
    await fetch(urlApiContact)
        .then(response => response.json())
        .then((data) => {
            let render = '';
            Object.keys(data).map((info) => {
                render += `
                <tr>
                    <td>${count++}</td>
                    <td>${data[info].fullname}</td>
                    <td>${data[info].email}</td>
                    <td>${data[info].mobile}</td>
                </tr>
                `;
            })
            renderContact.innerHTML = render;
        });
}

fetchContact();

const addFormContact = async() => {
    let fullname = document.querySelector('#fullname').value;
    let email = document.querySelector('#email').value;
    let mobile = document.querySelector('#mobile').value;
    if(fullname == '' || email == '' || mobile == '') {
       alert('Vui lòng điền đầy đủ thông tin');
    } else {
        let data = {
            fullname,
            email,
            mobile,
        }
        await fetch(urlApiContact, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                document.querySelector('#fullname').value = "";
                document.querySelector('#email').value = "";
                document.querySelector('#mobile').value = "";
                alert('Thêm thành công');
                fetchContact();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

const clearFormContact = () => {
    let fullname = document.querySelector('#fullname');
    let email = document.querySelector('#email');
    let mobile = document.querySelector('#mobile');


    fullname.value = " ";
    email.value = " ";
    mobile.value = " ";
}

if(btnAdd){
    btnAdd.addEventListener('click', addFormContact)
}


if(btnClear){
    btnClear.addEventListener('click', clearFormContact)
}