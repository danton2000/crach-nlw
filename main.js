const LinksSocialMedia = {
  github: 'danton2000',
  youtube: 'channel/UCG_B3-ifmrWi1d5WNMHt51w',
  facebook: 'dantonRodrigues2000',
  instagram: 'odanton_rodrigues',
  twiiter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  //fetch faz ele trazer o retorno e colocar no then, promise
  //se deu certo, faça isso aqui
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userAvatar.src = data.avatar_url
    })
}

getGitHubProfileInfos()
