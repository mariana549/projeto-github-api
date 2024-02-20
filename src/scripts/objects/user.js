const user = {
   avatarUrl: '',
   name: '',
   bio: '',
   NameUser: '',
   repositories: [],

   setInfo(gitHubUser){
      this.avatarUrl = gitHubUser.avatar_url
      console.log(this.avatarUrl)
      this.name = gitHubUser.name
      this.bio = gitHubUser.bio
      this.NameUser= gitHubUser.login
   },
   setRepositories(repositories){
      this.repositories = gitHubUser.repositories
   }
}

export { user }