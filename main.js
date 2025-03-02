document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            image: 'assets/images/project-one.png',
            link: 'https://link-to-project-one.com'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            image: 'assets/images/project-two.png',
            link: 'https://link-to-project-two.com'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            image: 'assets/images/project-three.png',
            link: 'https://link-to-project-three.com'
        }
    ];

    const portfolioContainer = document.getElementById('portfolio');

    portfolioItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('portfolio-item');

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.title;

        const itemTitle = document.createElement('h3');
        itemTitle.textContent = item.title;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemLink = document.createElement('a');
        itemLink.href = item.link;
        itemLink.textContent = 'View Project';
        itemLink.target = '_blank';

        itemElement.appendChild(itemImage);
        itemElement.appendChild(itemTitle);
        itemElement.appendChild(itemDescription);
        itemElement.appendChild(itemLink);

        portfolioContainer.appendChild(itemElement);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            image: 'assets/images/project-one.png',
            link: 'https://link-to-project-one.com'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            image: 'assets/images/project-two.png',
            link: 'https://link-to-project-two.com'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            image: 'assets/images/project-three.png',
            link: 'https://link-to-project-three.com'
        }
    ];

    const portfolioContainer = document.getElementById('portfolio');

    portfolioItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('portfolio-item');
        itemElement.style.animationDelay = `${index * 0.2}s`;

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.title;

        const itemTitle = document.createElement('h3');
        itemTitle.textContent = item.title;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemLink = document.createElement('a');
        itemLink.href = item.link;
        itemLink.textContent = 'View Project';
        itemLink.target = '_blank';

        itemElement.appendChild(itemImage);
        itemElement.appendChild(itemTitle);
        itemElement.appendChild(itemDescription);
        itemElement.appendChild(itemLink);

        portfolioContainer.appendChild(itemElement);
    });
});document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            image: 'assets/images/project-one.png',
            link: 'https://link-to-project-one.com'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            image: 'assets/images/project-two.png',
            link: 'https://link-to-project-two.com'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            image: 'assets/images/project-three.png',
            link: 'https://link-to-project-three.com'
        }
    ];

    const portfolioContainer = document.getElementById('portfolio');

    portfolioItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('portfolio-item');
        itemElement.style.animationDelay = `${index * 0.2}s`;

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.title;

        const itemTitle = document.createElement('h3');
        itemTitle.textContent = item.title;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemLink = document.createElement('a');
        itemLink.href = item.link;
        itemLink.textContent = 'View Project';
        itemLink.target = '_blank';

        itemElement.appendChild(itemImage);
        itemElement.appendChild(itemTitle);
        itemElement.appendChild(itemDescription);
        itemElement.appendChild(itemLink);

        portfolioContainer.appendChild(itemElement);
    });
});