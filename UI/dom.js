

var usedPhotoPosts = [1, 2, 3]

function UpdatePost() {
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
        var content = document.querySelector('template').content;

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

        document.querySelector('#content').appendChild(content.cloneNode(true));
    }


}

function AddPost() {
    post =    {
        id: '1',
        description: 'i love my club members.......i\'ll share another picture tomorrow',
        createdAt: new Date('2018-01-01T01:00:00'),
        author: 'qwerty',
        photoLink: '../img/1.jpg'
    }
    photoPosts.addPhotoPost(post);
}

function DeletePost(id) {

    photoPosts.removePhotoPost(id);
    document.querySelector('.body > .align-border .content .centralInfo').removeChild();
}

function ChangePost() {

    photoPosts.addPhotoPost(post);
}
