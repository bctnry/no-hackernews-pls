__MOCK = true;
if (document.referrer.startsWith("https://news.ycombinator.com") || __MOCK) {
    var x = document.getElementById('__no-hackernews-pls');
    var d = {
        'margin': '2rem',
        'padding': '1rem',
        'border': '1rem orange solid',
        'background-color': 'white',
        'display': 'inline-block',
        'max-width': '800px',
    };
    for (k in d) {
        x.style.setProperty(k, d[k]);
    }
    x.innerHTML = `<b>Hacker News is bad!</b> Click <a href="test.html" style="color:black">here</a> to find out why.`;
    
    var div_why = document.createElement('div');
    div_why.innerHTML = `
    <p>Hacker News is essentialy a place of "lick our arses or fuck off"; the "hacker" part is long dead.</p>
    <p>By setting a karma threshold for downvoting & flagging,
    the whole site essentianlly becomes one big echo chamber for the reason that people with opinions differs from the "majority"
    are at a risk of being downvoted and thus never able to reach the required threshold, which <b>effectively renders their rights to disagree
    nonexistent</b>.</p>
    <p>RANTS: The worst thing that could ever happen to the software industry besides its own existence is the ever-happening
    fact of "social people getting into programming"; socialization has brought in some of the worst scumbags
    ever since the birth of the concept of computer science: cult leader language maintainer, self-proclaimed 10x-er cargo-cult
    worshipper, self-promoting salesperson selling self-made subpar services, social justice assholes trying to use
    political correct as excuses for their insufficient knowledges, skills and experiences. In its very essence the
    software industry is fucked up, just like human beings themselves do.</p>`;
    div_why.style.setProperty('display', 'none');
    x.appendChild(div_why);
    
    var toggle = false;
    var link = x.getElementsByTagName('a')[0];
    link.addEventListener('click', function (e) {
        e.preventDefault();
        toggle = !toggle;
        if (toggle) {
            div_why.style.removeProperty('display');
        } else {
            div_why.style.setProperty('display', 'none');
        }
    });
}
