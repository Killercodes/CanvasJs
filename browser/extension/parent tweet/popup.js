document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('find-parent-tweets').addEventListener('click', () => {
    const url = document.getElementById('tweet-url').value.trim();
    if (url) {
      fetch(`https://cors-anywhere.herokuapp.com/${url}`)
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const tweetContainer = doc.querySelector('[data-testid="tweet"]');
          if (tweetContainer) {
            const tweetId = tweetContainer.getAttribute('data-tweet-id');
            fetch(`https://cors-anywhere.herokuapp.com/https://twitter.com/i/api/2/timeline/conversation/${tweetId}.json`)
              .then(response => response.json())
              .then(data => {
                const parentTweets = data.globalObjects.tweets;
                const parentTweetIds = Object.keys(parentTweets).filter(tweetId => !parentTweets[tweetId].in_reply_to_user_id);
                const parentTweetHtml = parentTweetIds.map(tweetId => {
                  const tweet = parentTweets[tweetId];
                  return `<div>${tweet.full_text}</div>`;
                }).join('');
                document.getElementById('parent-tweets
