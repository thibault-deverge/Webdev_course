const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');

    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetsContainer.append(newTweet);
}

tweetForm.addEventListener('submit', function(e) {
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    e.preventDefault();

    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
});

tweetsContainer.addEventListener('click', function (e) {
    e.target.remove();
});