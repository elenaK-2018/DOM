const cards = [
    {
        url: 'image/pic1.jpg',
        title: 'Розы',
    },
    {
        url: 'image/pic2.jpg',
        title: 'Ромашки',
    },
    {
        url: 'image/pic3.jpg',
        title: 'Тюльпаны',
    },
    {
        url: 'image/pic4.jpg',
        title: 'Пионы',
    },
    {
        url: 'image/pic5.jpg',
        title: 'Герберы',
    },
    {
        url: 'image/pic6.jpg',
        title: 'Лилии',
    },
    {
        url: 'image/pic7.jpg',
        title: 'Астры',
    },
    {
        url: 'image/pic8.jpg',
        title: 'Хризантемы',
    }
];

// Первый способ

const body = document.querySelector('body');
document.body.style.backgroundColor = 'darkgrey';

function addListContent() {
    const div = document.createElement('div');
    document.body.append(div);
    div.classList.add('app');

    const ul = document.createElement('ul');
    ul.classList.add('list');

    div.append(ul);

    for (key in cards) {
        const li = document.createElement('li');
        li.classList.add('list__item');
        li.style.marginBottom = '30px';
        li.style.listStyle = 'none';
        
        ul.append(li);

        const img = document.createElement('img');
        img.classList.add('list__img');
        img.src = cards[key].url;
        img.style.width = '350px';
        img.style.height = '250px';
        img.style.objectFit = 'cover';
        img.style.border = '5px solid white';

        li.append(img);
        
        const title = document.createElement('h2');
        title.classList.add('list__title');
        title.textContent = cards[key].title;
        title.style.color = 'white';
        title.style.margin = '0';

        li.append(title);
    }
}

addListContent();

// Второй способ

const div = document.createElement('div');
document.body.append(div);
div.classList.add('app');

function flowersList(elem) { 
    const ul = document.createElement('ul');
    ul.classList.add('list');
    div.append(ul);

    elem.forEach(elem => {
        const li = document.createElement('li');
        li.classList.add('list__item');
        li.classList.add('list__item');
        li.style.marginBottom = '30px';
        li.style.listStyle = 'none';

        li.innerHTML = `<img src="${elem.url}" style = "width: 350px; height: 250px; object-fit: cover; border: 5px solid mediumturquoise; box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);">
                                <h2 style = "color: mediumturquoise; margin: 0; font-size: 40px; text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);">${elem.title} </h2>`;
        ul.append(li);
    });

    return ul;
}

flowersList(cards);








