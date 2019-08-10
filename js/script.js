// Initialise all variables and input data
// "image": "images/profiles/a61e8c317c2a150458469217d325a59f.jpg",
// not trailing / is a MUST
// getElementsByClassName ALWAYS returns an array
/* The new categories are
music - Analyse your time
author - Habits & goals
politician - Focus better
scientist - Decrease screen time
sports - Less social media
*/

const main_db =
    [
        {
            "category": "music",
            "name": "Moment",
            "title": "iOS App",
            "image": "images/profiles/music/aron-visuals-BXOXnQ26B7o-unsplash.jpg",
            "link": "https://inthemoment.io/",
            "description": "A little less relevant post the new iOS screentime features, but the moment coach feature is great! Actionable insights on how to decrease screen time."
        },
        {
            "category": "scientist",
            "name": "AppBlock",
            "title": "Android",
            "image": "images/profiles/scientist/test6.jpg",
            "link": "https://www.appblock.app",
            "description": "Blog distracting apps on your phone so that you get to focus on real work. Works as simple as it sounds. "
        },
        {
            "category": "scientist",
            "name": "Find Focus",
            "title": "Mac, Windows",
            "image": "images/profiles/scientist/test6.jpg",
            "link": "https://findfocus.net/",
            "description": "Not the best UX, but works pretty simply - put a list of websites and apps that you want to block and it will take care of the rest. "
        },
        {
            "category": "scientist",
            "name": "Freedom",
            "title": "Mac, Windows, iOS, Android",
            "image": "images/profiles/scientist/test1.jpg",
            "link": "https://freedom.to/",
            "description": "App and website blocker for all platforms. Of course, doing app blocking stuff on iOS is tricky and messes with the folders so proceed with caution"
        },
        {
            "category": "scientist",
            "name": "Nudge",
            "title": "Chrome Extension",
            "image": "images/profiles/scientist/test6.jpg",
            "link": "https://chrome.google.com/webstore/detail/nudge/dmhgdnbkjkejeddddlklojinngaideac",
            "description": "Get nudges in your browser window when time spent on a website is a little too much. Auto hide addictive sections like news feed etc"
        },
        {
            "category": "politician",
            "name": "Cold Turkey",
            "title": "Mac",
            "image": "images/profiles/politician/icons8-team-dhZtNlvNE8M-unsplash.jpg",
            "link": "https://getcoldturkey.com/",
            "description": "Works on a monthly subscription, and you can schedule distraction free blocks and even pomodoro style slots."
        },
        {
            "category": "politician",
            "name": "Cold Turkey - Writer",
            "title": "Mac",
            "image": "images/profiles/politician/icons8-team-dhZtNlvNE8M-unsplash.jpg",
            "link": "https://getcoldturkey.com/writer/",
            "description": "Blocks all distractions until you hit your written words goal for the session! Pretty useful for writers on a deadline."
        },
        {
            "category": "politician",
            "name": "Deskcover Pro",
            "title": "Mac",
            "image": "images/profiles/politician/icons8-team-dhZtNlvNE8M-unsplash.jpg",
            "link": "http://www.noteifyapp.com/deskcover/?ref=producthunt",
            "description": "Hide all the cluttered icons on your macbook with a single global hotkey, and dim inactive windows for focus."
        },
        {
            "category": "politician",
            "name": "Do Nothing for 2 Minutes",
            "title": "Web",
            "image": "images/profiles/politician/aron-visuals-BXOXnQ26B7o-unsplash.jpg",
            "link": "http://www.donothingfor2minutes.com/",
            "description": "Want to take a break from the chaos? Just sit back, do nothing and listen to the sound of waves. "
        },
        {
            "category": "politician",
            "name": "Flipd",
            "title": "Android, iOS",
            "image": "images/profiles/politician/aron-visuals-BXOXnQ26B7o-unsplash.jpg",
            "link": "https://www.flipdapp.co/",
            "description": "Has everything combined into one - stop distracting apps, tracks your habits and you can also join a community of people with similar goals to get better"
        },
        {
            "category": "politician",
            "name": "Focus",
            "title": "Mac App",
            "image": "images/profiles/politician/aron-visuals-BXOXnQ26B7o-unsplash.jpg",
            "link": "https://heyfocus.com/",
            "description": "Our most favourite and recommended one - blocks apps and websites in one click. You can also find some interesting Alfred app integrations .."
        },
        {
            "category": "politician",
            "name": "Forest",
            "title": "Android, Chrome Extension, iOS",
            "image": "images/profiles/politician/icons8-team-dhZtNlvNE8M-unsplash.jpg",
            "link": "http://forestapp.cc/",
            "description": "This is definitely the most fun one - and we loved it - plant as many trees as you do focus sessions! Your trees get killed if you get distracted."
        },
        {
            "category": "politician",
            "name": "Hazeover: Distraction Dimmer",
            "title": "Mac",
            "image": "images/profiles/politician/aron-visuals-BXOXnQ26B7o-unsplash.jpg",
            "link": "https://hazeover.com/",
            "description": "Dims all other windows so that you can focus on current one - perfect if you are a designer or techie using multiple windows"
        },
        {
            "category": "politician",
            "name": "Noisli",
            "title": "Android, Chrome Extension, Web, iOS",
            "image": "images/profiles/politician/aron-visuals-BXOXnQ26B7o-unsplash.jpg",
            "link": "https://www.noisli.com/?ref=producthunt",
            "description": "Music and ambient sounds help you get into deep focus? Use this to mix match sounds like rain, forest, birds etc for the ideal mix. "
        },
        {
            "category": "author",
            "name": "Detoxify",
            "title": "iOS",
            "image": "images/profiles/author/lukas-blazek-UAvYasdkzq8-unsplash.jpg",
            "link": "https://apps.apple.com/us/app/detoxify/id1438276133",
            "description": "Claims to be a one stop shop for tracking habits and keeping your bad habits in check e.g. smoking etc. Rewards you with other free activities from sponsored partners. "
        },
        {
            "category": "sports",
            "name": "BlockSite",
            "title": "Android, Chrome Extension",
            "image": "images/profiles/sports/vince-fleming-aZVpxRydiJk-unsplash.jpg",
            "link": "https://blocksite.co/",
            "description": "Block distracting websites for some time, doesnt work for apps yet. There is a very easy way to get into the break mode."
        },
        {
            "category": "sports",
            "name": "Boomerang Inbox Pause",
            "title": "Chrome Extension",
            "image": "images/profiles/sports/.DS_Store",
            "link": "http://inboxpause.com/",
            "description": "By well known Boomerang team, gives you ability to get all emails in few specific slots during the day vs constant notifications. "
        },
        {
            "category": "sports",
            "name": "Distraction Free Youtube",
            "title": "Chrome Extension",
            "image": "images/profiles/sports/.DS_Store",
            "link": "https://chrome.google.com/webstore/detail/df-youtube-distraction-fr/mjdepdfccjgcndkmemponafgioodelna?hl=en",
            "description": "Ever gotten lost in the YouTube video hole? This one is for you - it removes the recommended videos so you don't over spend time. "
        },
        {
            "category": "sports",
            "name": "Inbox When Ready",
            "title": "Chrome Extension",
            "image": "images/profiles/sports/jonathan-chng-HgoKvtKpyHA-unsplash.jpg",
            "link": "https://inboxwhenready.org/",
            "description": "Batch process your emails to minimise total time spent going through emails. Writing emails is not equal to work for sure!"
        }
    ]

// https://gist.github.com/ikr7/c72843556ef3a12014c3
var emojis = [
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
                <img class="profile_image" src="${element.image}" alt="">
                <p class="name">
                    <a class="title_link"href="${element.link}" target="_blank">
                        ${get_random_emoji() + " " + element.name}
                    </a>
                </p>
                <p class="title">${element.title}</p>
                <p class="description">${element.description}</p>
                <p class="read_more"><a href="${element.link}" target="_blank">Check it out</a></p>
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
                <img class="profile_image" src="${element.image}" alt="">
                <p class="name">
                    <a class="title_link"href="${element.link}" target="_blank">
                        ${get_random_emoji() + " " + element.name}
                    </a>
                </p>
                <p class="title">${element.title}</p>
                <p class="description">${element.description}</p>
                <p class="read_more"><a href="${element.link}" target="_blank">Check it out</a></p>
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
                <img class="profile_image" src="${element.image}" alt="">
                <p class="name">
                    <a class="title_link"href="${element.link}" target="_blank">
                        ${get_random_emoji() + " " + element.name}
                    </a>
                </p>
                <p class="title">${element.title}</p>
                <p class="description">${element.description}</p>
                <p class="read_more"><a href="${element.link}" target="_blank">Check it out</a></p>
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
                <img class="profile_image" src="${element.image}" alt="">
                <p class="name">
                    <a class="title_link"href="${element.link}" target="_blank">
                        ${get_random_emoji() + " " + element.name}
                    </a>
                </p>
                <p class="title">${element.title}</p>
                <p class="description">${element.description}</p>
                <p class="read_more"><a href="${element.link}" target="_blank">Check it out</a></p>
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
                <img class="profile_image" src="${element.image}" alt="">
                <p class="name">
                    <a class="title_link"href="${element.link}" target="_blank">
                        ${get_random_emoji() + " " + element.name}
                    </a>
                </p>
                <p class="title">${element.title}</p>
                <p class="description">${element.description}</p>
                <p class="read_more"><a href="${element.link}" target="_blank">Check it out</a></p>
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
                <img class="profile_image" src="${element.image}" alt="">
                <p class="name">
                    <a class="title_link"href="${element.link}" target="_blank">
                        ${get_random_emoji() + " " + element.name}
                    </a>
                </p>
                <p class="title">${element.title}</p>
                <p class="description">${element.description}</p>
                <p class="read_more"><a href="${element.link}" target="_blank">Check it out</a></p>
            </div>
            `;
        misc_markup = misc_markup + newmarkup;
    });
    append_to.innerHTML = misc_markup;
}

// Run functions on click and page load and by default load music
window.onload = music();
politics_people.addEventListener("click", politics);
// misc_people.addEventListener("click", misc);
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
