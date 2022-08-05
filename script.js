function preencherContainer(dados){
    const container = document.querySelector('.projetos-postados');
    const cardProjetos = document.createElement('div');
    cardProjetos.classList.add('card-projetos');
    const conteudo = document.createElement('div');
    conteudo.classList.add('conteudo-card-projeto');

    const text = document.createElement('div');
    text.classList.add('text');
    const textFolder = document.createElement('div');
    textFolder.classList.add('text-folder');
    const img = document.createElement('img');
    img.src = 'assets/images/folder.svg';
    const p = document.createElement('p');
    p.textContent = `${dados.name}`;
    const small = document.createElement('small');
    small.textContent = `${dados.full_name}`;

    textFolder.insertAdjacentElement('afterbegin', img);
    textFolder.insertAdjacentElement('beforeend', p);
    text.insertAdjacentElement('afterbegin', textFolder);
    text.insertAdjacentElement('beforeend', small);

    const git = document.createElement('div');
    git.classList.add('git');
    const linguagens = document.createElement('div');
    linguagens.classList.add('linguagens');
    const smallGit= document.createElement('small');
    smallGit.textContent = `${dados.language}`;

    linguagens.insertAdjacentElement('beforeend', smallGit);
    git.insertAdjacentElement('beforeend', linguagens);

    const a = document.createElement('a');
    a.href = `${dados.html_url}`;

    conteudo.insertAdjacentElement('afterbegin', text);
    conteudo.insertAdjacentElement('beforeend',git);
    cardProjetos.insertAdjacentElement('beforeend', conteudo);
    a.insertAdjacentElement('beforeend', cardProjetos);
    container.insertAdjacentElement('beforeend', a);
}

const repos = async () => {
    const url = `https://api.github.com/users/gustavbarbosaa/repos`;
    try{
        const dados = await fetch(url);
        const infos = await dados.json();
        for (let index of infos) {
            preencherContainer(index)  ;
        }
    } catch(err) {
        console.log(err);
    }
}

repos();