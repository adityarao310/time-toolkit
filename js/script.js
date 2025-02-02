// Initialise all variables and input data
// getElementsByClassName ALWAYS returns an array
/*
politician - Analyse your time
author - Habits & goals
music - Focus better
scientist - Decrease screen time
sports - Less social media
misc - Bonus stuff
*/

const main_db =
    [
        {
            "category": "politician",
            "name": "Timewise",
            "title": "Calendar Analytics",
            "image": "images/profiles/politician/time-spent-analyse-your-time153.jpg",
            "link": "https://timewise.how/",
            "category_true": "Analyse time",
            "description": "Analyse the time you spend in client meetings, team 1:1s, recurring team huddles and much more automatically. Be a smarter manager at work!"
        },
        {
            "category": "politician",
            "name": "Moment",
            "title": "iOS App",
            "image": "images/profiles/politician/time-spent-analyse-your-time146.jpg",
            "link": "https://inthemoment.io/",
            "category_true": "Analyse time",
            "description": "A little less relevant post the new iOS screentime features, but the moment coach feature is great! Actionable insights on how to decrease screen time."
        },
        {
            "category": "politician",
            "name": "Qotoqot",
            "title": "Mac",
            "image": "images/profiles/politician/time-spent-analyse-your-time147.jpg",
            "link": "https://qotoqot.com/qbserve/",
            "category_true": "Analyse time",
            "description": "Not just another time tracker - Does a lot of things automatically e.g. analysis of top sites and even individual chats inside Slack/Skype etc"
        },
        {
            "category": "politician",
            "name": "Timing",
            "title": "Mac",
            "image": "images/profiles/politician/time-spent-analyse-your-time148.jpg",
            "link": "https://timingapp.com/",
            "category_true": "Analyse time",
            "description": "My personal favourite time tracker! Gives a lot of insights, without being overwhelmingly loaded with graphs and charts about my day. "
        },
        {
            "category": "politician",
            "name": "Toggl",
            "title": "Across all platforms",
            "image": "images/profiles/politician/time-spent-analyse-your-time149.jpg",
            "link": "https://toggl.com/",
            "category_true": "Analyse time",
            "description": "This one is quite good too, and has the simplest UX of time tracking and logging. If you are a enthusiast, vs serious freelancer I would recommend this."
        },
        {
            "category": "politician",
            "name": "Save My Time",
            "title": "Android",
            "image": "images/profiles/politician/time-spent-analyse-your-time150.jpg",
            "link": "http://savemytime.co/",
            "category_true": "Analyse time",
            "description": "Have a habit of unlocking phone all the time? Put that to good use by logging your acitivities and get insights!"
        },
        {
            "category": "politician",
            "name": "Digitox",
            "title": "Android",
            "image": "images/profiles/politician/time-spent-analyse-your-time151.jpg",
            "link": "https://play.google.com/store/apps/details?id=phosphorus.app.usage.screen.time",
            "category_true": "Analyse time",
            "description": "Get daily stats on your screen time, overuse reminders and even unlocks numbers."
        },
        {
            "category": "politician",
            "name": "Clockwise",
            "title": "Web",
            "image": "images/profiles/politician/time-spent-analyse-your-time152.jpg",
            "link": "https://www.getclockwise.com/",
            "category_true": "Analyse time",
            "description": "A calendar management tool that understands your preferences and inserts best slots for most relevant things at that time"
        },
        {
            "category": "misc",
            "name": "Atomic Habits: Book",
            "title": "Book",
            "image": "images/profiles/misc/atomic-habits-book.jpg",
            "link": "https://www.amazon.com/Atomic-Habits-Proven-Build-Break-ebook/dp/B01N5AX61W/",
            "category_true": "Bonus stuff",
            "description": "This book personally changed my life in Q1 2019.. a practical and actionable guide on how to be better than yesterday"
        },
        {
            "category": "misc",
            "name": "Sleeptown",
            "title": "iOS, Android",
            "image": "images/profiles/misc/sleep.jpg",
            "link": "https://sleeptown.seekrtech.com/",
            "category_true": "Bonus stuff",
            "description": "From creators of Forest, helps you build healthy sleep habits e.g. sleeping on time - with gamification on top of it"
        },
        {
            "category": "misc",
            "name": "Superhuman",
            "title": "iOS, Mac",
            "image": "images/profiles/misc/superhuman.png",
            "link": "https://superhuman.com/",
            "category_true": "Bonus stuff",
            "description": "Is talk of the town right now, and I love the keyboard shortcuts. But approach of less email time in a day is better, vs current"
        },
        {
            "category": "misc",
            "name": "One+ Zen Mode",
            "title": "Only One+ phones",
            "image": "images/profiles/misc/OnePlus-7-5G-US-carrier-000.jpg",
            "link": "https://www.androidauthority.com/zen-mode-oneplus-987246/",
            "category_true": "Bonus stuff",
            "description": "Native app inside One+ phones, locks you out of all distractions for 20 minutes. You can of course still get calls.."
        },
        {
            "category": "misc",
            "name": "Google Digital Wellbeing",
            "title": "Android (not One+ and Oppo)",
            "image": "images/profiles/misc/google.jpg",
            "link": "https://wellbeing.google/",
            "category_true": "Bonus stuff",
            "description": "Just a marketing tactic by a corp that makes money by increasing your digital time? Most probably yeah, but still go use it!"
        },
        {
            "category": "misc",
            "name": "Spotify Playlists",
            "title": "Spotify music",
            "image": "images/profiles/misc/spotify.png",
            "link": "https://open.spotify.com/user/chillhopmusic",
            "category_true": "Bonus stuff",
            "description": "Listen to stuff like Chillhop and Deep Focus on Spotify (of course with a good pair of headphones) to get into the zone!"
        },
        {
            "category": "misc",
            "name": "HN Noprocrast Mode",
            "title": "Account settings",
            "image": "images/profiles/misc/hn.png",
            "link": "https://news.ycombinator.com/item?id=814695",
            "category_true": "Bonus stuff",
            "description": "Hacker news settings that limits your use of the site. If turned on \"Noprocast\" mode will liimit how many times you can visit the site in a gap of defined minutes"
        },
        {
            "category": "misc",
            "name": "Indistractable: Book",
            "title": "Bestseller book",
            "image": "images/profiles/misc/in.jpg",
            "link": "https://www.amazon.com/Indistractable-Control-Your-Attention-Choose-ebook/dp/B07PG2W6DC",
            "category_true": "Bonus stuff",
            "description": "A practical framework to help you get focus at work, remove digital distractions and achieve goals!"
        },
        {
            "category": "scientist",
            "name": "AppBlock",
            "title": "Android",
            "image": "images/profiles/scientist/time-spent-decrease-screen-time0132.jpg",
            "link": "https://www.appblock.app",
            "category_true": "Decrease screen time",
            "description": "Blog distracting apps on your phone so that you get to focus on real work. Works as simple as it sounds. "
        },
        {
            "category": "scientist",
            "name": "Find Focus",
            "title": "Mac, Windows",
            "image": "images/profiles/scientist/time-spent-decrease-screen-time0127.jpg",
            "link": "https://findfocus.net/",
            "category_true": "Decrease screen time",
            "description": "Not the best UX, but works pretty simply - put a list of websites and apps that you want to block and it will take care of the rest. "
        },
        {
            "category": "scientist",
            "name": "Freedom",
            "title": "Mac, Windows, iOS, Android",
            "image": "images/profiles/scientist/time-spent-decrease-screen-time0130.jpg",
            "link": "https://freedom.to/",
            "category_true": "Decrease screen time",
            "description": "App and website blocker for all platforms. Of course, doing app blocking stuff on iOS is tricky and messes with the folders so proceed with caution"
        },
        {
            "category": "scientist",
            "name": "Nudge",
            "title": "Chrome Extension",
            "image": "images/profiles/scientist/time-spent-decrease-screen-time0125.jpg",
            "link": "https://chrome.google.com/webstore/detail/nudge/dmhgdnbkjkejeddddlklojinngaideac",
            "category_true": "Decrease screen time",
            "description": "Get nudges in your browser window when time spent on a website is a little too much. Auto hide addictive sections like news feed etc"
        },
        {
            "category": "scientist",
            "name": "Siempo",
            "title": "Chrome Extension",
            "image": "images/profiles/scientist/time-spent-decrease-screen-time0121.jpg",
            "link": "http://www.getsiempo.com/",
            "category_true": "Decrease screen time",
            "description": "Block distracting websites, batch process all notifications on your mobile in one go and much more for a full digital wellness toolkit. "
        },
        {
            "category": "scientist",
            "name": "Hyper Focus",
            "title": "Mac",
            "image": "images/profiles/scientist/time-spent-decrease-screen-time0122.jpg",
            "link": "https://www.hyperfocus.me/",
            "category_true": "Decrease screen time",
            "description": "Another alternative to HeyFocus app, it does the same job but with a better UI. Though some people would like the customisations of HeyFocus much more "
        },
        {
            "category": "scientist",
            "name": "Cold Turkey - Writer",
            "title": "Mac",
            "image": "images/profiles/scientist/time-spent-decrease-screen-time0129.jpg",
            "link": "https://getcoldturkey.com/writer/",
            "category_true": "Decrease screen time",
            "description": "Blocks all distractions until you hit your written words goal for the session! Pretty useful for writers on a deadline."
        },
        {
            "category": "scientist",
            "name": "OffScreen",
            "title": "iPhone, iPad",
            "image": "images/profiles/scientist/time-spent-decrease-screen-time0136.jpg",
            "link": "https://apps.apple.com/us/app/OffScreen:%20Screen%20Time%20Tracker/id1474340105",
            "category_true": "Decrease screen time",
            "description": "A super cute, well designed and simple to use tool on iOS to decrease your time. Some featrues are irrelevant because Apple Screen Time gives good analysis now, but the focus mode is great!"
        },
        {
            "category": "scientist",
            "name": "Twist",
            "title": "Mac App",
            "image": "images/profiles/scientist/time-spent-decrease-screen-time0133.jpg",
            "link": "https://twist.com/",
            "category_true": "Decrease screen time",
            "description": "A team chat tool focused on async communication and decreased distractions while doing a great job of organising team conversations and topics. "
        },
        {
            "category": "scientist",
            "name": "Edlock",
            "title": "Android",
            "image": "images/profiles/scientist/time-spent-decrease-screen-time0123.jpg",
            "link": "https://edlock.app/",
            "category_true": "Decrease screen time",
            "description": "Creative way of blocking distracting apps! Clear a new learning challenge and only then can you block those apps"
        },
        {
            "category": "scientist",
            "name": "Brutu",
            "title": "iOS App",
            "image": "images/profiles/scientist/time-spent-decrease-screen-time0135.jpg",
            "link": "https://brutu.app/",
            "category_true": "Decrease screen time",
            "description": "Another creative way to use the Pomodoro timer - though a bit extreme! If you break the timer and pick up your phone, you will be charged money"
        },
        {
            "category": "scientist",
            "name": "Eye Timer",
            "title": "Mac App",
            "image": "images/profiles/scientist/time-spent-decrease-screen-time0124.jpg",
            "link": "https://adelmaer.com/eyetimer/",
            "category_true": "Decrease screen time",
            "description": "Reminds you to take good amount of breaks from the laptop with quick exercises to ensure that you are not straining your eyes not too much"
        },
        {
            "category": "scientist",
            "name": "Take a break",
            "title": "Mac App",
            "image": "images/profiles/scientist/time-spent-decrease-screen-time0126.jpg",
            "link": "https://apps.apple.com/app/apple-store/id1457158844",
            "category_true": "Decrease screen time",
            "description": "Uses the 20-20-20 system to remind you take a break from the screen (20 seconds break after 20 minutes of work)"
        },
        {
            "category": "music",
            "name": "Cold Turkey",
            "title": "Mac",
            "image": "images/profiles/music/time-spent-focus-better95.jpg",
            "link": "https://getcoldturkey.com/",
            "category_true": "Focus better",
            "description": "Works on a monthly subscription, and you can schedule distraction free blocks and even pomodoro style slots."
        },
        {
            "category": "music",
            "name": "Undistracted",
            "title": "Mac",
            "image": "images/profiles/music/time-spent-focus-better109.jpg",
            "link": "https://www.noteifyapp.com/undistracted-self-control-2/",
            "category_true": "Focus better",
            "description": "Hide all the cluttered icons on your macbook with a single global hotkey, and dim inactive windows for focus."
        },
        {
            "category": "music",
            "name": "Do Nothing for 2 Minutes",
            "title": "Web",
            "image": "images/profiles/music/time-spent-focus-better90.jpg",
            "link": "http://www.donothingfor2minutes.com/",
            "category_true": "Focus better",
            "description": "Want to take a break from the chaos? Just sit back, do nothing and listen to the sound of waves. "
        },
        {
            "category": "music",
            "name": "Flipd",
            "title": "Android, iOS",
            "image": "images/profiles/music/time-spent-focus-better117.jpg",
            "link": "https://www.flipdapp.co/",
            "category_true": "Focus better",
            "description": "Has everything combined into one - stop distracting apps, tracks your habits and you can also join a community of people with similar goals to get better"
        },
        {
            "category": "music",
            "name": "Focus",
            "title": "Mac App",
            "image": "images/profiles/music/time-spent-focus-better103.jpg",
            "link": "https://heyfocus.com/",
            "category_true": "Focus better",
            "description": "Our most favourite and recommended one - blocks apps and websites in one click. You can also find some interesting Alfred app integrations .."
        },
        {
            "category": "music",
            "name": "Forest",
            "title": "Android, Chrome Extension, iOS",
            "image": "images/profiles/music/time-spent-focus-better105.jpg",
            "link": "http://forestapp.cc/",
            "category_true": "Focus better",
            "description": "This is definitely the most fun one - and we loved it - plant as many trees as you do focus sessions! Your trees get killed if you get distracted."
        },
        {
            "category": "music",
            "name": "Hazeover: Distraction Dimmer",
            "title": "Mac",
            "image": "images/profiles/music/time-spent-focus-better89.jpg",
            "link": "https://hazeover.com/",
            "category_true": "Focus better",
            "description": "Dims all other windows so that you can focus on current one - perfect if you are a designer or techie using multiple windows"
        },
        {
            "category": "music",
            "name": "Noisli",
            "title": "Android, Chrome Extension, Web, iOS",
            "image": "images/profiles/music/time-spent-focus-better120.jpg",
            "link": "https://www.noisli.com/",
            "category_true": "Focus better",
            "description": "Music and ambient sounds help you get into deep focus? Use this to mix match sounds like rain, forest, birds etc for the ideal mix. "
        },
        {
            "category": "music",
            "name": "Rescue Time",
            "title": "Android, Linux, Mac, Windows",
            "image": "images/profiles/music/time-spent-focus-better116.jpg",
            "link": "https://www.rescuetime.com/",
            "category_true": "Focus better",
            "description": "Block distracting websites, and complete time analytics of your laptop rolled into one. One of the most comprehensive solutions out there."
        },
        {
            "category": "music",
            "name": "Thrive",
            "title": "Android App",
            "image": "images/profiles/music/time-spent-focus-better105.jpg",
            "link": "https://play.google.com/store/apps/details?id=com.thriveglobal.thriveapp",
            "category_true": "Focus better",
            "description": "Built by the influential Thrive Global (Arianna Huffingaton team), you can block all texts calls and apps while in the zone. "
        },
        {
            "category": "music",
            "name": "Calm",
            "title": "Android App,iOS App",
            "image": "images/profiles/music/time-spent-focus-better119.jpg",
            "link": "https://www.calm.com/",
            "category_true": "Focus better",
            "description": "Great for guided meditations and learning how to destress, better sleep and focus at work."
        },
        {
            "category": "music",
            "name": "Flux",
            "title": "Mac",
            "image": "images/profiles/music/time-spent-focus-better110.jpg",
            "link": "http://justgetflux.com/",
            "category_true": "Focus better",
            "description": "Change your screen colours based on time of the day - doing work in the blue light of LCDs is bad for focus and for your eyes too"
        },
        {
            "category": "music",
            "name": "Focusmate",
            "title": "Web",
            "image": "images/profiles/music/time-spent-focus-better83.jpg",
            "link": "https://www.focusmate.com/",
            "category_true": "Focus better",
            "description": "Fina a virtual partner-in-crime over video and do work together for great accountability! Perfect for solo freelancers and digital nomads"
        },
        {
            "category": "music",
            "name": "Headspace",
            "title": "iOS, Android",
            "image": "images/profiles/music/time-spent-focus-better111.jpg",
            "link": "https://www.headspace.com/",
            "category_true": "Focus better",
            "description": "One of the best meditation apps, with different tracks to help you focus better too! Check out lessons on increasing memory, focus sessions etc"
        },
        {
            "category": "music",
            "name": "Method",
            "title": "Web, Calendar Integrations",
            "image": "images/profiles/music/time-spent-focus-better99.jpg",
            "link": "https://usemethod.com/",
            "category_true": "Focus better",
            "description": "Method helps you organise your workload and block out focus time around the events in your calendar."
        },
        {
            "category": "music",
            "name": "Quiet",
            "title": "iOS, Mac",
            "image": "images/profiles/music/time-spent-focus-better118.jpg",
            "link": "https://lighthouse16.com/quiet/",
            "category_true": "Focus better",
            "description": "A super exhaustive content blocker for social media, big fonts, weird ads, and even blocks coin miners!"
        },
        {
            "category": "music",
            "name": "Focuslist",
            "title": "iOS, Apple Watch, Mac",
            "image": "images/profiles/music/time-spent-focus-better85.jpg",
            "link": "http://focuslist.co/",
            "category_true": "Focus better",
            "description": "The simplest combination of to do lists and pomodoro timers, and workds across the Apple ecosystem"
        },
        {
            "category": "music",
            "name": "Daywise",
            "title": "Android",
            "image": "images/profiles/music/time-spent-focus-better115.jpg",
            "link": "https://www.getdaywise.com/",
            "category_true": "Focus better",
            "description": "Backed by Duke university, Daywise helps you batch all Android notifications in one place so that you don't get distracted too much."
        },
        {
            "category": "music",
            "name": "Donut Dog",
            "title": "iOS, Android",
            "image": "images/profiles/music/time-spent-focus-better97.jpg",
            "link": "https://donutdog.club/",
            "category_true": "Focus better",
            "description": "A gamified version of most pomodoro apps. Motivates you to complete focus sessions via a set of challenges!"
        },
        {
            "category": "music",
            "name": "Tide",
            "title": "iOS, Android, Web, Chrome Extension",
            "image": "images/profiles/music/time-spent-focus-better119.jpg",
            "link": "https://tide.fm/",
            "category_true": "Focus better",
            "description": "(website in chinese) Combine nature sounds and meditation practices to relax and focus better. Available on quite a few platforms!"
        },
        {
            "category": "music",
            "name": "Brain.fm",
            "title": "Web",
            "image": "images/profiles/music/time-spent-focus-better104.jpg",
            "link": "https://www.brain.fm/",
            "category_true": "Focus better",
            "description": "Functional music, built with a scientific approach to get you into the focus zone. You can try 5 sessions for free."
        },
        {
            "category": "music",
            "name": "Cuckoo Team",
            "title": "Web",
            "image": "images/profiles/music/time-spent-focus-better86.jpg",
            "link": "https://cuckoo.team/",
            "category_true": "Focus better",
            "description": "Get your team to work together! Quickly share a cuckoo link to invite others to join in your producivity session.. builds accountability and more"
        },
        {
            "category": "music",
            "name": "Focus Booster",
            "title": "Windows, Mac, Android, iOS",
            "image": "images/profiles/music/time-spent-focus-better95.jpg",
            "link": "https://www.focusboosterapp.com/",
            "category_true": "Focus better",
            "description": "A simple (and long standing in the market) pomodor tracker app - merged with a simple to do list on top of it to help you tick off tasks"
        },
        {
            "category": "music",
            "name": "Cowop",
            "title": "Online quiz",
            "image": "images/profiles/music/time-spent-focus-better107.jpg",
            "link": "https://www.cowop.org/quiz/most-productive-work-scheduler",
            "category_true": "Focus better",
            "description": "Have you wondered why some people are night owls and some thrive in the morning? Use this simple quiz to find out (baed on behavioural science!)"
        },
        {
            "category": "music",
            "name": "Tempo",
            "title": "Mac App",
            "image": "images/profiles/music/time-spent-focus-better84.jpg",
            "link": "https://www.yourtempo.co/",
            "category_true": "Focus better",
            "description": "An email client which has no frills, and is designed from bottoms up to help you focus better and not get addicted! "
        },
        {
            "category": "music",
            "name": "Serene App",
            "title": "Mac App",
            "image": "images/profiles/music/time-spent-focus-better81.jpg",
            "link": "https://sereneapp.com/",
            "category_true": "Focus better",
            "description": "Define your goals for the day, and then the app will help you by blocking distracting apps at those time slots. "
        },
        {
            "category": "music",
            "name": "Rofocus",
            "title": "Web app",
            "image": "images/profiles/music/time-spent-focus-better99.jpg",
            "link": "https://rofocus.com/",
            "category_true": "Focus better",
            "description": "Ambient sounds that help you focus better and remove distractions! I found this really useful when working out of cafes."
        },
        {
            "category": "music",
            "name": "Remedy8",
            "title": "iOS App",
            "image": "images/profiles/music/time-spent-focus-better96.jpg",
            "link": "https://www.remedy8.app/",
            "category_true": "Focus better",
            "description": "Stress button along with guided meditations to make sure you can destress anytime you want!"
        },
        {
            "category": "music",
            "name": "Slash",
            "title": "Mac App",
            "image": "images/profiles/music/time-spent-focus-better83.jpg",
            "link": "https://getslash.co/",
            "category_true": "Focus better",
            "description": "A productivity app with a unique spin on todo lists - it forces you to focus on one task at a time. Every similar to GTD methods"
        },
        {
            "category": "music",
            "name": "Shine",
            "title": "Android, iOS App",
            "image": "images/profiles/music/time-spent-focus-better96.jpg",
            "link": "https://shinetext.com/",
            "category_true": "Focus better",
            "description": "A good active community for self help around mental health - bunch of apps, techniques and challenges to take you through"
        },
        {
            "category": "music",
            "name": "Status Scheduler for Slack",
            "title": "Slack App",
            "image": "images/profiles/music/time-spent-focus-better82.jpg",
            "link": "https://slackscheduler.now.sh/",
            "category_true": "Focus better",
            "description": "Setup and schedule deep work time during which your team mates on slack can see thta status and also the notifications get paused."
        },
        {
            "category": "music",
            "name": "The Work Gym",
            "title": "Social Accountability",
            "image": "images/profiles/music/time-spent-focus-better93.jpg",
            "link": "https://www.ultraworking.com/twg",
            "category_true": "Focus better",
            "description": "Matches you with other video conference attendees who work alongside you, while in a moderated session."
        },
        {
            "category": "music",
            "name": "Mind Dot",
            "title": "Mac App",
            "image": "images/profiles/music/time-spent-focus-better113.jpg",
            "link": "https://mindot.petrovicstefan.rs/",
            "category_true": "Focus better",
            "description": "Maintain your daily mindfulness routine. Helps you with reminders to get off from the desktop and even setup helpful background sounds "
        },
        {
            "category": "music",
            "name": "Isolator",
            "title": "Mac App",
            "image": "images/profiles/music/time-spent-focus-better87.jpg",
            "link": "https://www.willmore.eu/software/isolator/",
            "category_true": "Focus better",
            "description": "If you want to focus and remove clutter on your desktop, use hotkey to cover desktop, icons and other apps."
        },
        {
            "category": "author",
            "name": "Detoxify",
            "title": "iOS",
            "image": "images/profiles/author/time-spent-habits-goals158.jpg",
            "link": "https://apps.apple.com/us/app/detoxify/id1438276133",
            "category_true": "Habits & goals",
            "description": "Claims to be a one stop shop for tracking habits and keeping your bad habits in check e.g. smoking etc. Rewards you with other free activities from sponsored partners. "
        },
        {
            "category": "author",
            "name": "Fabulous",
            "title": "Android App,iOS App",
            "image": "images/profiles/author/time-spent-habits-goals159.jpg",
            "link": "https://thefabulous.co/",
            "category_true": "Habits & goals",
            "description": "Summing up tiny habits into profound long-term changes. They use a lot of proven science and research based methods to help you change behaviours."
        },
        {
            "category": "author",
            "name": "Plan",
            "title": "Web, iOS, Integrations",
            "image": "images/profiles/author/time-spent-habits-goals160.jpg",
            "link": "https://getplan.co/",
            "category_true": "Habits & goals",
            "description": "Integrates with current project management tools and calendars to help you save time around your work life."
        },
        {
            "category": "author",
            "name": "Progress Bar OSX",
            "title": "Mac",
            "image": "images/profiles/author/time-spent-habits-goals161.jpg",
            "link": "https://www.progressbarosx.com/",
            "category_true": "Habits & goals",
            "description": "An amazing motivation right in your menu bar to see how much time is left in a custom project, or today/this month etc"
        },
        {
            "category": "author",
            "name": "Suprhabit",
            "title": "iOS",
            "image": "images/profiles/author/time-spent-habits-goals162.jpg",
            "link": "https://www.superhabit.co/",
            "category_true": "Habits & goals",
            "description": "A github like daily streaks on your phone! My favourite because it is the simplest, and a good alternative to dot journal method."
        },
        {
            "category": "author",
            "name": "Habitlist",
            "title": "iOS",
            "image": "images/profiles/author/time-spent-habits-goals163.jpg",
            "link": "https://habitlist.com/",
            "category_true": "Habits & goals",
            "description": "Shows you the habits you need to today, and nudges you with the reminders and badges to complete them!"
        },
        {
            "category": "author",
            "name": "Get Shit Done",
            "title": "Physical print",
            "image": "images/profiles/author/time-spent-habits-goals164.jpg",
            "link": "https://gumroad.com/l/getshitdone",
            "category_true": "Habits & goals",
            "description": "Another simple daily habit tracker; but the best part is that it's offline! Sometimes, an app to save time from screen time is just too meta, you know? :)"
        },
        {
            "category": "author",
            "name": "Streaks App",
            "title": "iOS",
            "image": "images/profiles/author/time-spent-habits-goals165.jpg",
            "link": "https://streaksapp.com/",
            "category_true": "Habits & goals",
            "description": "Integrates with the iOS health app, you can automatically goals (and even add options for weekly goals, not just daily)"
        },
        {
            "category": "author",
            "name": "Better Habits",
            "title": "iOS",
            "image": "images/profiles/author/time-spent-habits-goals166.jpg",
            "link": "http://www.betterhabits.me/",
            "category_true": "Habits & goals",
            "description": "A great design, which is backed by science (supposedly). It definitely is built to form habits that last, unlike diets etc that lose focus after few months."
        },
        {
            "category": "author",
            "name": "Quarterly & Annual Review",
            "title": "Self Assessment",
            "image": "images/profiles/author/time-spent-habits-goals167.jpg",
            "link": "https://annualreview.me/",
            "category_true": "Habits & goals",
            "description": "A free flexible kit to review your year, and spend some quality time in doing self assessment of what went well and what didn't"
        },
        {
            "category": "author",
            "name": "Year Compass",
            "title": "Self Assessment",
            "image": "images/profiles/author/time-spent-habits-goals168.jpg",
            "link": "https://yearcompass.com/",
            "category_true": "Habits & goals",
            "description": "Booklet that helps close your year and plan the next one. Grab a cuppa and sit back as you refocus your sight on your true goals and aspirations."
        },
        {
            "category": "author",
            "name": "Habitify",
            "title": "Mac App, Android, iOS",
            "image": "images/profiles/author/time-spent-habits-goals169.jpg",
            "link": "https://www.habitify.me/",
            "category_true": "Habits & goals",
            "description": "The most simplistic habit tracker app that is also available across platforms. The UX is very minimalistic and simple, including the analytics."
        },
        {
            "category": "author",
            "name": "Capsicum",
            "title": "iOS App",
            "image": "images/profiles/author/time-spent-habits-goals170.jpg",
            "link": "https://capsicum.app/",
            "category_true": "Habits & goals",
            "description": "The task tracker is a bit clunky, but the habit tracker is quite unique and fund to use. Ability to add notes to log journals is good!"
        },
        {
            "category": "sports",
            "name": "Stay Focused",
            "title": "Chrome Extension",
            "image": "images/profiles/sports/time-spent-less-social-media137.jpg",
            "link": "https://chrome.google.com/webstore/detail/stayfocusd/laankejkbhbdhmipfmgcngdelahlfoji",
            "category_true": "Less social media",
            "description": "StayFocusd increases your productivity by limiting the amount of time that you can spend on time-wasting websites."
        },
        {
            "category": "sports",
            "name": "BlockSite",
            "title": "Android, Chrome Extension",
            "image": "images/profiles/sports/time-spent-less-social-media138.jpg",
            "link": "https://blocksite.co/",
            "category_true": "Less social media",
            "description": "Block distracting websites for some time, doesnt work for apps yet. There is a very easy way to get into the break mode."
        },
        {
            "category": "sports",
            "name": "Boomerang Inbox Pause",
            "title": "Chrome Extension",
            "image": "images/profiles/sports/time-spent-less-social-media139.jpg",
            "link": "http://inboxpause.com/",
            "category_true": "Less social media",
            "description": "By well known Boomerang team, gives you ability to get all emails in few specific slots during the day vs constant notifications. "
        },
        {
            "category": "sports",
            "name": "Distraction Free Youtube",
            "title": "Chrome Extension",
            "image": "images/profiles/sports/time-spent-less-social-media140.jpg",
            "link": "https://chrome.google.com/webstore/detail/df-youtube-distraction-fr/mjdepdfccjgcndkmemponafgioodelna?hl=en",
            "category_true": "Less social media",
            "description": "Ever gotten lost in the YouTube video hole? This one is for you - it removes the recommended videos so you don't over spend time. "
        },
        {
            "category": "sports",
            "name": "Inbox When Ready",
            "title": "Chrome Extension",
            "image": "images/profiles/sports/time-spent-less-social-media141.jpg",
            "link": "https://inboxwhenready.org/",
            "category_true": "Less social media",
            "description": "Batch process your emails to minimise total time spent going through emails. Writing emails is not equal to work for sure!"
        },
        {
            "category": "sports",
            "name": "Undistracted",
            "title": "Chrome Extension",
            "image": "images/profiles/sports/time-spent-less-social-media142.jpg",
            "link": "https://chrome.google.com/webstore/detail/undistracted/pjjgklgkfeoeiebjogplpnibpfnffkng",
            "category_true": "Less social media",
            "description": "Another one very simple social media and websites blocker out there. Looks like most of them are via Chrome Extension!"
        },
        {
            "category": "sports",
            "name": "iOS Screentime",
            "title": "iOS",
            "image": "images/profiles/sports/time-spent-less-social-media143.jpg",
            "link": "https://www.pcmag.com/feature/363837/how-to-use-screen-time-in-apple-s-ios-12",
            "category_true": "Less social media",
            "description": "Comes by default in iOS 12 and above! Analse the amount of time you are spending on unhealthy websites and their categories. "
        },
        {
            "category": "sports",
            "name": "Reboot",
            "title": "Web, Open Source",
            "image": "images/profiles/sports/time-spent-less-social-media144.jpg",
            "link": "https://reboot.netlify.com/",
            "category_true": "Less social media",
            "description": "A super simple static webpage where you can go and ask for a breather! It doesnt block any websites or apps, just trusts you to do so"
        },
        {
            "category": "sports",
            "name": "Humane Tech",
            "title": "Non profit org",
            "image": "images/profiles/sports/time-spent-less-social-media145.jpg",
            "link": "https://humanetech.com/problem/#our-work",
            "category_true": "Less social media",
            "description": "Independent nonprofit org whose aim is to drive a comprehensive shift toward humane technology."
        },
        {
            "category": "sports",
            "name": "Feedzen",
            "title": "iOS App",
            "image": "images/profiles/sports/time-spent-less-social-media146.jpeg",
            "link": "https://feedzen.app/",
            "category_true": "Less social media",
            "description": "Remove and hide stories, social feed from popular social media platforms like Facebook and Instagram"
        }
    ]


// https://gist.github.com/ikr7/c72843556ef3a12014c3
const emojis = [
    '😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👎', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💆', '💇', '💅', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '❤', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '☁', '⚡', '☔', '❄', '⛄', '🌀', '🌁', '🌈', '🌊', '🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮', '🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻', '🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '⏳', '⌛', '⏰', '⌚', '🔓', '🔒', '🔏', '🔐', '🔑', '🔎', '💡', '🔦', '🔆', '🔅', '🔌', '🔋', '🔍', '🛁', '🛀', '🚿', '🚽', '🔧', '🔩', '🔨', '🚪', '🚬', '💣', '🔫', '🔪', '💊', '💉', '💰', '💴', '💵', '💷', '💶', '💳', '💸', '📲', '📧', '📥', '📤', '✉', '📩', '📨', '📯', '📫', '📪', '📬', '📭', '📮', '📦', '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📜', '📋', '📅', '📆', '📇', '📁', '📂', '✂', '📌', '📎', '✒', '✏', '📏', '📐', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📚', '📖', '🔖', '📛', '🔬', '🔭', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🏉', '🎳', '⛳', '🚵', '🚴', '🏁', '🏇', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏩', '🏨', '💒', '⛪', '🏬', '🏤', '🌇', '🌆', '🏯', '🏰', '⛺', '🏭', '🗼', '🗾', '🗻', '🌄', '🌅', '🌃', '🗽', '🌉', '🎠', '🎡', '⛲', '🎢', '🚢', '⛵', '🚤', '🚣', '⚓', '🚀', '✈', '💺', '🚁', '🚂', '🚊', '🚉', '🚞', '🚆', '🚄', '🚅', '🚈', '🚇', '🚝', '🚋', '🚃', '🚎', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚖', '🚛', '🚚', '🚨', '🚓', '🚔', '🚒', '🚑', '🚐', '🚲', '🚡', '🚟', '🚠', '🚜', '💈', '🚏', '🎫', '🚦', '🚥', '⚠', '🚧', '🔰', '⛽', '🏮', '🎰', '♨', '🗿', '🎪', '🎭', '📍', '🚩', '⬆', '⬇', '⬅', '➡', '🔠', '🔡', '🔤', '↗', '↖', '↘', '↙', '↔', '↕', '🔄', '◀', '▶', '🔼', '🔽', '↩', '↪', 'ℹ', '⏪', '⏩', '⏫', '⏬', '⤵', '⤴', '🆗', '🔀', '🔁', '🔂', '🆕', '🆙', '🆒', '🆓', '🆖', '📶', '🎦', '🈁', '🈯', '🈳', '🈵', '🈴', '🈲', '🉐', '🈹', '🈺', '🈶', '🈚', '🚻', '🚹', '🚺', '🚼', '🚾', '🚰', '🚮', '🅿', '♿', '🚭', '🈷', '🈸', '🈂', 'Ⓜ', '🛂', '🛄', '🛅', '🛃', '🉑', '㊙', '㊗', '🆑', '🆘', '🆔', '🚫', '🔞', '📵', '🚯', '🚱', '🚳', '🚷', '🚸', '⛔', '✳', '❇', '❎', '✅', '✴', '💟', '🆚', '📳', '📴', '🅰', '🅱', '🆎', '🅾', '💠', '➿', '♻', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '🔯', '🏧', '💹', '💲', '💱', '©', '®', '™', '〽', '〰', '🔝', '🔚', '🔙', '🔛', '🔜', '❌', '⭕', '❗', '❓', '❕', '❔', '🔃', '🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '✖', '➕', '➖', '➗', '♠', '♥', '♣', '♦', '💮', '💯', '✔', '☑', '🔘', '🔗', '➰', '🔱', '🔲', '🔳', '◼', '◻', '◾', '◽', '▪', '▫', '🔺', '⬜', '⬛', '⚫', '⚪', '🔴', '🔵', '🔻', '🔶', '🔷', '🔸', '🔹'
];
function get_random_emoji() {
    var item = emojis[Math.floor(Math.random() * emojis.length)];
    return item
}

var db_music = []; var db_author = []; var db_politics = []; var db_science = []; var db_misc = []; var db_sports = [];
let db_sorted = [db_music, db_science, db_sports, db_politics, db_author, db_misc];
// Used in loading text function
var music_people = document.getElementById('music_people_tag');
var sports_people = document.getElementById('sports_people_tag');
var politics_people = document.getElementById('politics_people_tag');
var misc_people = document.getElementById('misc_people_tag');
var authors_people = document.getElementById('authors_people_tag');
var science_people = document.getElementById('science_people_tag');
var tags_container = document.getElementById("tags"); // Get the container element of all tags
var any_tag = tags_container.getElementsByClassName("tag"); // Used in changing color function
var append_to = document.getElementById('append_here'); // append list of cards

// Store data from big object into individual categories
function split_db() {
    main_db.forEach(element => {
        if (element.category == "music") {
            db_sorted[0].push(element);
        } else if (element.category == "author") {
            db_sorted[4].push(element);
        } else if (element.category == "politician") {
            db_sorted[3].push(element);
        } else if (element.category == "scientist") {
            db_sorted[1].push(element);
        } else if (element.category == "misc") {
            db_sorted[5].push(element);
        } else if (element.category == "sports") {
            db_sorted[2].push(element);
        }
    });
}
split_db();



// Generate big markup for each category
function music() {
    let music_markup = ``;
    db_sorted[0].forEach(element => {
        let newmarkup = `
            <div class="profile_card">
                <a href="${element.link}?ref=timespent.co" target="_blank">
                    <img class="profile_image" src="${element.image}" alt="">
                </a>
                <p class="name">
                    <a class="title_link" href="${element.link}?ref=timespent.co" target="_blank">
                        ${get_random_emoji() + " " + element.name}
                    </a>
                </p>
                <p class="title">${element.title}</p>
                <p class="description">${element.description}</p>
                <p class="read_more"><a href="${element.link}?ref=timespent.co" target="_blank">Check it out</a></p>
            </div>
            `;
        music_markup = music_markup + newmarkup;
    });
    append_to.innerHTML = music_markup;
}

function science() {
    let science_markup = ``;
    db_sorted[1].forEach(element => {
        let newmarkup = `
            <div class="profile_card">
                <a href="${element.link}?ref=timespent.co" target="_blank">
                    <img class="profile_image" src="${element.image}" alt="">
                </a>
                <p class="name">
                    <a class="title_link" href="${element.link}?ref=timespent.co" target="_blank">
                        ${get_random_emoji() + " " + element.name}
                    </a>
                </p>
                <p class="title">${element.title}</p>
                <p class="description">${element.description}</p>
                <p class="read_more"><a href="${element.link}?ref=timespent.co" target="_blank">Check it out</a></p>
            </div>
            `;
        science_markup = science_markup + newmarkup;
    });
    append_to.innerHTML = science_markup;
}

function sports() {
    let sports_markup = ``;
    db_sorted[2].forEach(element => {
        let newmarkup = `
            <div class="profile_card">
                <a href="${element.link}?ref=timespent.co" target="_blank">
                    <img class="profile_image" src="${element.image}" alt="">
                </a>
                <p class="name">
                    <a class="title_link" href="${element.link}?ref=timespent.co" target="_blank">
                        ${get_random_emoji() + " " + element.name}
                    </a>
                </p>
                <p class="title">${element.title}</p>
                <p class="description">${element.description}</p>
                <p class="read_more"><a href="${element.link}?ref=timespent.co" target="_blank">Check it out</a></p>
            </div>
            `;
        sports_markup = sports_markup + newmarkup;
    });
    append_to.innerHTML = sports_markup;
}

function author() {
    let author_markup = ``;
    db_sorted[4].forEach(element => {
        let newmarkup = `
            <div class="profile_card">
                <a href="${element.link}?ref=timespent.co" target="_blank">
                    <img class="profile_image" src="${element.image}" alt="">
                </a>
                <p class="name">
                    <a class="title_link" href="${element.link}?ref=timespent.co" target="_blank">
                        ${get_random_emoji() + " " + element.name}
                    </a>
                </p>
                <p class="title">${element.title}</p>
                <p class="description">${element.description}</p>
                <p class="read_more"><a href="${element.link}?ref=timespent.co" target="_blank">Check it out</a></p>
            </div>
            `;
        author_markup = author_markup + newmarkup;
    });
    append_to.innerHTML = author_markup;
}

function politics() {
    let politics_markup = ``;
    db_sorted[3].forEach(element => {
        let newmarkup = `
            <div class="profile_card">
                <a href="${element.link}?ref=timespent.co" target="_blank">
                    <img class="profile_image" src="${element.image}" alt="">
                </a>
                <p class="name">
                    <a class="title_link" href="${element.link}?ref=timespent.co" target="_blank">
                        ${get_random_emoji() + " " + element.name}
                    </a>
                </p>
                <p class="title">${element.title}</p>
                <p class="description">${element.description}</p>
                <p class="read_more"><a href="${element.link}?ref=timespent.co" target="_blank">Check it out</a></p>
            </div>
            `;
        politics_markup = politics_markup + newmarkup;
    });
    append_to.innerHTML = politics_markup;
}

function misc() {
    let misc_markup = ``;
    db_sorted[5].forEach(element => {
        let newmarkup = `
            <div class="profile_card">
                <a href="${element.link}?ref=timespent.co" target="_blank">
                    <img class="profile_image" src="${element.image}" alt="">
                </a>
                <p class="name">
                    <a class="title_link" href="${element.link}?ref=timespent.co" target="_blank">
                        ${get_random_emoji() + " " + element.name}
                    </a>
                </p>
                <p class="title">${element.title}</p>
                <p class="description">${element.description}</p>
                <p class="read_more"><a href="${element.link}?ref=timespent.co" target="_blank">Check it out</a></p>
            </div>
            `;
        misc_markup = misc_markup + newmarkup;
    });
    append_to.innerHTML = misc_markup;
}

// Run functions on click and page load and by default load music
window.onload = music();
politics_people.addEventListener("click", politics);
misc_people.addEventListener("click", misc);
sports_people.addEventListener("click", sports);
authors_people.addEventListener("click", author);
science_people.addEventListener("click", science);
music_people.addEventListener("click", music);

// Loop through the tags and add the active class to the current/clicked
for (var i = 0; i < any_tag.length; i++) {
    any_tag[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
