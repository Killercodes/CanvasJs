// Content script
console.log("Twitter Thread Analyzer content script is running...");

// Get all the tweets in the thread
const tweets = document.querySelectorAll('[data-testid="tweet"]');
console.log(`Found ${tweets.length} tweets in the thread`);

// Loop through each tweet and get its contents
tweets.forEach((tweet, index) => {
  // Get the tweet contents
  const tweetContents = tweet.querySelector('[data-testid="tweet"] [lang]').textContent;
  console.log(`Tweet ${index + 1}: ${tweetContents}`);
});
