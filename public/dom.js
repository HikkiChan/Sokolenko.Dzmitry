var name = '123';
var pass = '123';

function UpdatePost() {
    var usedPhotoPosts = JSON.parse( localStorage.getItem('usedPhotoPost'));

    for(var l = 0; l < 10; l++) {
        var id = 1;
        var check = false;
        for (id; id < usedPhotoPosts.length+1; id++ ) {
            for (var i = 0; i < usedPhotoPosts.length; i++ ) {
                if(id === usedPhotoPosts[i]) {
                    check = true;
                    break;
                }
            }
            if(check === false) {
                break;
            }
            else {
                check = false;
            }
        }

        var lPP = photoPosts.getLength() + 1;

        if(id < lPP) {
            var content = document.querySelector('template.photobox').content;

            usedPhotoPosts.push(id);

            var post = photoPosts.getPhotoPost(id);

            var aut = post.author;


                var img = post.photoLink;
                var description = post.description;
                var idteg = content.querySelector('div.blockWbg');
                var text = content.querySelector('span.description');
                var imagine = content.querySelector('img');
                idteg.setAttribute('id', id + "");
                text.textContent = description;
                imagine.setAttribute('src', img);
                imagine.setAttribute('onclick', 'ViewPost(' + id + ')');
                document.querySelector('#content').appendChild(content.cloneNode(true));



        }
    }

    localStorage.setItem('usedPhotoPost', JSON.stringify(usedPhotoPosts));
}

function AddPost() {
    var content = document.querySelector('template.postUp').content;
    document.querySelector('#forms').appendChild(content.cloneNode(true));
    document.getElementById('loadAddPost').addEventListener('click', AddPostUp);
}

function AddPostUp() {
    //получить данные с формы
    var newPhoto = document.getElementById('addPhoto').value;
    var newDescription = document.getElementById('addDescription').value;

    if(newPhoto === "" || newDescription === "") {
        alert("Введены некоректные данные");
    }

    var post =    {
        id: photoPosts.getLength()+1,
        description: newDescription,
        createdAt: new Date(),
        author: localStorage.getItem('Name'),
        photoLink: newPhoto
    };
    photoPosts.addPhotoPost(post);
}

function CloseAddPost(event) {
    var target = event.target;
    if (target.className === 'wrapper')
        document.querySelector('#forms').removeChild(document.getElementById('addPost'));
}

function ChangePost() {
    var content = document.querySelector('template.postCh').content;
    document.querySelector('#forms').appendChild(content.cloneNode(true));
    document.getElementById('loadChangePost').addEventListener('click', ChangePostUp);
}

function ChangePostUp() {
    //получить данные с формы
    var newId = document.getElementById('newId').value;
    var newPhoto = document.getElementById('newPhoto').value;
    var newDescription = document.getElementById('newDescription').value;

    var post =    {
        id: newId,
        description: newDescription,
        createdAt: new Date(),
        author: localStorage.getItem('Name'),
        photoLink: newPhoto
    };

    if(photoPosts.validatePhotoPost(post) || !(newPhoto === "")) {
        photoPosts.editPhotoPost(newId, post);
    } else {
        alert("Введены некоректные данные");
    }
}

function ClosePostCh(event) {
    var target = event.target;
    if (target.className === 'wrapper')
        document.querySelector('#forms').removeChild(document.getElementById('postCh'));
}

function CloseViewPost(event) {
    var target = event.target;
    if (target.className === 'wrapper')
        document.querySelector('#forms').removeChild(document.getElementById('vPost'));
}

function ViewPost(id) {
    var content = document.querySelector('template.vPost').content;
    var post = photoPosts.getPhotoPost(id);
    var img = post.photoLink;
    var imagine = content.querySelector('img');
    imagine.setAttribute('src', img);

    imagine = content.querySelector('img.small');
    imagine.setAttribute('src', img);

    var description = post.description;
    var text = content.querySelector('div.description');
    text.textContent = description;

    var date = post.createdAt;
    var dateline = content.querySelector('div.date');
    dateline.textContent = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '.' + (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth()+1) + '.' + date.getFullYear();

    var nickname = post.author;
    var nick = content.querySelector('div.name');
    nick.textContent = nickname;

    document.querySelector('#forms').appendChild(content.cloneNode(true));
}

function DeletePost() {
    var content = document.querySelector('template.postDel').content;
    document.querySelector('#forms').appendChild(content.cloneNode(true));
    document.getElementById('loadPostDel').addEventListener('click', DeletePostUp);
    // id = 3;
    // photoPosts.removePhotoPost(id);
    // document.querySelector('#content').removeChild(document.getElementById(id));
}

function DeletePostUp() {
    //получить данные с формы
    var delId = document.getElementById('delId').value;

    if(delId == null || delId > photoPosts.getLength()) {
        alert("Введены некоректные данные");
    } else {
        photoPosts.removePhotoPost(delId);
        document.querySelector('#content').removeChild(document.getElementById(delId));
    }
}

function ClosePostDel(event) {
    var target = event.target;
    if (target.className === 'wrapper')
        document.querySelector('#forms').removeChild(document.getElementById('postDel'));
}

function Registration() {
    var content = document.querySelector('template.registrationForm').content;
    document.querySelector('#forms').appendChild(content.cloneNode(true));
    document.getElementById('loadRegistration').addEventListener('click', RegistrationUp);
}

function RegistrationUp() {
    document.querySelector('#forms').removeChild(document.getElementById('registrationForm'));
}

function CloseRegistrationForm() {
    var target = event.target;
    if (target.className === 'wrapper registration')
        document.querySelector('#forms').removeChild(document.getElementById('registrationForm'));
}

function Authorization() {
    var content = document.querySelector('template.authorization').content;
    document.querySelector('#forms').appendChild(content.cloneNode(true));
    document.getElementById('loadAuthorization').addEventListener('click', AuthorizationUp);
}

function loginUser() {
    var content = document.querySelector('template.user').content;
    document.querySelector('#buttons').appendChild(content.cloneNode(true));
    document.querySelector('#buttons').removeChild(document.getElementById('anonB'));
}

function AuthorizationUp() {
    var nickTry = document.getElementById('nick').value;
    var passTry = document.getElementById('pass').value;

    if (nickTry == null || passTry == null || nickTry != name || passTry != pass) {
        alert("Введены некоректные данные");
    } else {
        localStorage.setItem('Name', nickTry);
        localStorage.setItem('Password', passTry);

        loginUser();
        document.querySelector('#forms').removeChild(document.getElementById('authorization'));
    }

    helloAnon();
}

function CloseAuthorization() {
    var target = event.target;
    if (target.className === 'wrapper registration login')
        document.querySelector('#forms').removeChild(document.getElementById('authorization'));
}

function LogOut() {
    var content = document.querySelector('template.anon').content;
    document.querySelector('#buttons').appendChild(content.cloneNode(true));
    document.querySelector('#buttons').removeChild(document.getElementById('userB'));

    localStorage.setItem('Name', 0);
    localStorage.setItem('Password', 0);

    helloAnon();
}

document.addEventListener('DOMContentLoaded', onLoad);
// window.addEventListener('beforeunload', onUnload);

function onLoad() {
    var usedPhotoPosts = [];
    localStorage.setItem('usedPhotoPost', JSON.stringify(usedPhotoPosts));

    localStorage.setItem('filter', '');

    var nameT = localStorage.getItem('Name');
    var passT = localStorage.getItem('Password');

    if (nameT === name || passT === pass) {
        var content = document.querySelector('template.user').content;
        document.querySelector('#buttons').appendChild(content.cloneNode(true));
    } else {
        var content = document.querySelector('template.anon').content;
        document.querySelector('#buttons').appendChild(content.cloneNode(true));
    }

    document.getElementById('filterFind').addEventListener('click', findFilt)

    helloAnon();
}

function findFilt() {
    localStorage.setItem('filter', document.getElementById('find').value);

    var usedPhotoPosts = JSON.parse( localStorage.getItem('usedPhotoPost'));

    for(var l = 0; l < 10; l++) {
        var id = 1;
        var check = false;
        for (id; id < usedPhotoPosts.length+1; id++ ) {
            for (var i = 0; i < usedPhotoPosts.length; i++ ) {
                if(id === usedPhotoPosts[i]) {
                    check = true;
                    break;
                }
            }
            if(check === false) {
                break;
            }
            else {
                check = false;
            }
        }

        var lPP = photoPosts.getLength() + 1;

        if(id < lPP) {
            var content = document.querySelector('template.photobox').content;

            usedPhotoPosts.push(id);

            var post = photoPosts.getPhotoPost(id);

            var aut = post.author;

            if(aut === localStorage.getItem('filter')) {
                var img = post.photoLink;
                var description = post.description;
                var idteg = content.querySelector('div.blockWbg');
                var text = content.querySelector('span.description');
                var imagine = content.querySelector('img');
                idteg.setAttribute('id', id + "");
                text.textContent = description;
                imagine.setAttribute('src', img);
                imagine.setAttribute('onclick', 'ViewPost(' + id + ')');
                document.querySelector('#content').appendChild(content.cloneNode(true));
            }


        }
    }

    localStorage.setItem('usedPhotoPost', JSON.stringify(usedPhotoPosts));
}

// function onUnload() {
//
// }

function helloAnon() {
    var text =  localStorage.getItem('Name');

    if(text != 0) {
        document.getElementById('hello').innerText = "Hello, " + text;
    } else {
        document.getElementById('hello').innerText = "Hello, Anon";
    }


}