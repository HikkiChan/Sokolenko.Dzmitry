var usedPhotoPosts = []

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
}

function AddPost() {
    var content = document.querySelector('template.postUp').content;



    document.querySelector('#forms').appendChild(content.cloneNode(true));
}

function AddPostUp() {
    //получить данные с формы
    var post =    {
        id: '1',
        description: 'i love my club members.......i\'ll share another picture tomorrow',
        createdAt: new Date(),
        author: 'qwerty',
        photoLink: '../img/1.jpg'
    }
    photoPosts.addPhotoPost(post);
}

function ChangePost() {
    var content = document.querySelector('template.postCh').content;



    document.querySelector('#forms').appendChild(content.cloneNode(true));
}

function ChangePostUp() {
    //получить данные с формы
    var post =    {
        id: '1',
        description: 'i love my club members.......i\'ll share another picture tomorrow',
        createdAt: new Date(),
        author: 'qwerty',
        photoLink: '../img/1.jpg'
    }
    photoPosts.editPhotoPost(post.id, post);
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

    id = 1
    photoPosts.removePhotoPost(id);
    document.querySelector('.body > .align-border .content .centralInfo').removeChild();
}

function Registration() {

}

function Authorization() {

    loginUser();
}