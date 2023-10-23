var alarmClock = {
        onHandler : function(e) {
            chrome.alarms.create("myAlarm", {periodInMinutes: 542} );
                    window.close();
        },

        offHandler : function(e) {
            chrome.alarms.clear("myAlarm");
                    window.close();
        },
};

document.addEventListener('DOMContentLoaded', function () {
    alarmClock.setup();
});
