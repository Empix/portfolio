/* SCROLL */
const portfolioBtn = document.querySelector('#portfolio-btn');
const portfolioDiv = document.querySelector('.portfolio');

zenscroll.setup(null, 0);

portfolioBtn.addEventListener('click', () => {
  zenscroll.to(portfolioDiv);
});

/* ADD PROJECTS */
const projectsGrid = document.querySelector('.projects');
const projectTemplate = document.querySelector('template#project').content;

projects.forEach(({ name, type, tags, description, url, wip }) => {
  const projectElement = projectTemplate.cloneNode(true);
  projectElement.querySelector('.project .header .title').innerText = name;
  projectElement.querySelector('.project .header .type').innerText = type;
  projectElement.querySelector('.project .description').innerText = description;
  projectElement.querySelector('.project .url').href = url;
  projectElement.querySelector('.project .wip').style.display = wip
    ? 'block'
    : 'none';

  const tagsDiv = projectElement.querySelector('.project .tags');
  tags.forEach(({ name, color }) => {
    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.style.backgroundColor = color;
    tag.innerText = name;

    tagsDiv.append(tag);
  });

  projectsGrid.append(projectElement);
});
