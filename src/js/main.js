console.log(`Zatrudnij mnie, nie mam co jeść!`);

const list = document.querySelector('.project-list--js');

fetch(`https://api.github.com/users/Abel1121/repos?sort=updated`)
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos) {
      const {description, homepage, html_url, name} = repo;
      console.log(repo);
      list.innerHTML += `
      <li class="project">
          <div class="project__container">
            <img class="project__logo" src="assets/img/github.svg" alt="">
            <h3 class="project__tittle">${name}</h3>
            ${
              description ? `<p class="project__description">${description}</p>` : `No description :(`
            }
            
          </div>
          <div class="project__footer">
          ${
            homepage ? `<a class="project__link project__link--demo" href="${homepage}" target="_blank" rel="nofollow noreferrer" tittle="Demo: ${name}">Demo</a>` : ``
          }
            <a class="project__link project__link--code" href="${html_url}" target="_blank" rel="nofollow noreferrer" tittle="Source code: podlaskigit.">Github</a>
          </div>
        </li>
      `;
    }
  })