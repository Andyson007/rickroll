let flag = false;

chrome.alarms.onAlarm.addListener(function(alarm) {
  if (flag) {
		chrome.tabs.create({
			"url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
		});
  }
  flag = true;
});
