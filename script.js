const apiKey = 'AIzaSyB--nrTtTXQstgq3KFbg_N3nLmKxG06sKQ'; // Replace with yours
const channelId = 'UCewXKkmDqj-NuD_eNlMZJbA';

fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=1`)
  .then(res => res.json())
  .then(data => {
    const videoId = data.items[0].id.videoId;
    document.getElementById("ytplayer").src = `https://www.youtube.com/embed/${videoId}`;
  })
  .catch(err => {
    console.log(err);
    document.querySelector('.video-container').innerHTML = '<p style="color:red;">Video failed to load. Check API key.</p>';
  });
