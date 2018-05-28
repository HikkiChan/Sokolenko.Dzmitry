var usedPhotoPosts = []

var userName = ''

function UpdatePost() {
    for(var l = 0; l < 10; l++) {
        var id = 1;
        var check = false;
        for (id; id < usedPhotoPosts.length+1; id++ ) {
            for (var i = 0; i < usedPhotoPosts.length; i++ ) {
                if(id == usedPhotoPosts[i]) {
                    check = true;
                    break;
                }
            }
            if(check == false) {
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

            post = photoPosts.getPhotoPost(id);
            var img = post.photoLink;
            var description = post.description;
            var idteg = content.querySelector('div.blockWbg');
            idteg.setAttribute('id', id + "");
            var text = content.querySelector('span.description');
            text.textContent = description;
            var imagine = content.querySelector('img');
            imagine.setAttribute('src', img);
            imagine.setAttribute('onclick', 'ViewPost(' + id + ')');
            document.querySelector('#content').appendChild(content.cloneNode(true));
        }
    }
}

function loginUser() {
    var content = document.querySelector('template.user').content;
    document.querySelector('#buttons').appendChild(content.cloneNode(true));

    document.querySelector('#buttons').removeChild(document.querySelector('div.anon'));
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

    if(newPhoto == "" || newDescription == "") {
        alert("Введены некоректные данные");
    }

    var post =    {
        id: photoPosts.getLength()+1,
        description: newDescription,
        createdAt: new Date(),
        author: userName,
        photoLink: newPhoto
    }
    photoPosts.addPhotoPost(post);
}

function CloseAddPost(event) {
    var target = event.target;
    if (target.className == 'wrapper')
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
        author: userName,
        photoLink: newPhoto
    }

    if(photoPosts.validatePhotoPost(post) || !newPhoto == "") {
        photoPosts.editPhotoPost(newId, post);
    } else {
        alert("Введены некоректные данные");
    }
}

function ClosePostCh(event) {
    var target = event.target;
    if (target.className == 'wrapper')
        document.querySelector('#forms').removeChild(document.getElementById('postCh'));
}

function CloseViewPost(event) {
    var target = event.target;
    if (target.className == 'wrapper')
        document.querySelector('#forms').removeChild(document.getElementById('vPost'));
}

function ViewPost(id) {
    var content = document.querySelector('template.vPost').content;
    var post = photoPosts.getPhotoPost(id);
    var img = post.photoLink;
    var imagine = content.querySelector('img');
    imagine.setAttribute('src', img);

    var imagine = content.querySelector('img.small');
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

    id = 3;
    photoPosts.removePhotoPost(id);
    document.querySelector('#content').removeChild(document.getElementById(id));
}

function Registration() {

}

function Authorization() {

    loginUser();
}