async function func(){
  let githubResponse = await fetch(`https://api.github.com/users/DobrolyubovMaxim`);
  let githubUser = await githubResponse.json();
  return githubUser.login;
}
