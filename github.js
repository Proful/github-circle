var GitHubApi = require('github').GitHubApi


var github = new GitHubApi(true)

github.getUserApi().getFollowers('butu5', function(err,followers){
  //console.log(followers.join('\n'))
})

github.getUserApi().getFollowing('butu5', function(err,followers){
  // console.log(followers)
  // console.log(followers.join('\n'))
})

github.getUserApi().getWatchedRepos('butu5',function(err, repos){
  console.log(repos)
})
