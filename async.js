// Promise -> Async/await

// bad code
function displayUser() {
  fetchUser()
    .then((user) => {
      fetchProfile(user)
        .then((profile) => {
          updateUI(user, profile);
        });
    });
}

// good code
async function displayUser() {
  const user = await fetchUser();
  const profile = await fetchProfile(user);
  updateUI(user, profile);
}