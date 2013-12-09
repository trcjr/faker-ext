faker-ext
=========
Additional methods for [Faker.js](https://github.com/marak/Faker.js/).

<ul>
    <li>
        Address

        <ul>
            <li>country

                <ul>
                    <li>any</li>
                    <li>africa</li>
                    <li>antarctica</li>
                    <li>asia</li>
                    <li>europe</li>
                    <li>north_america</li>
                    <li>south_america</li>
                    <li>oceania</li>
                    <li>isoAlpha2 - from <a href="https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes">ISO-3166 repository</a>, returns Object with country name and alpha-2 code (e.g. DE), compatible with CSS sprites like <a href="http://flag-sprites.com/">Flag Sprites</a></li>
                    <li>isoAlpha3 - from <a href="https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes">ISO-3166 repository</a>, returns Object with country name and alpha-3 code (e.g. DEU)</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        Helpers

        <ul>
            <li>randomNumber( range [, min] ) - <a href="https://github.com/Marak/Faker.js/issues/41">range=max-1</a></li>
        </ul>
    </li>
    <li>
        random

        <ul>
            <li>boolean</li>
            <li>time( [options] ) - <code>options</code> is an optional object with a <code>[separator]</code> (string, default is ":") and <code>[period]</code> (number, 12 || 24, default is 24) keys.</li>
        </ul>
    </li>
    <li>
        Text

        <ul>
            <li>headline - standard length news headline</li>
        </ul>
    </li>
</ul>