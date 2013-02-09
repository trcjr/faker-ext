module.exports = function( Faker ) {
    
    Faker.Text.headline = function () {
        return Faker.random.text_headline_standard();
    };    

    Faker.random.text_headline_standard = function () {
        return Faker.random.array_element(Faker.definitions.text_headline_standard());
    };

    Faker.definitions.text_headline_standard = function() {
        return ["Clarkson is Top 'Idol' Earner; CBS Plans Whitney Houston Grammy Special", "US Military Denies its Attacks Killed Hundreds of Afghan Children", "Love Meets Politics on Dating Websites", "EU Leaders: 'Deal Done' on Long-Term Austerity Budget", "NASA Captures First Images of ISON Comet", "Japan Condemns China's Use of Weapons-Targeting Radar", "Study: Earth-Like Planets Closer Than Expected", "Eating Colorful Produce May Help Prevent ALS", "Twitter Hit by Cyber Attack", "Zoo Carousel Combines Conservation with Fun", "Past Conflict Still Affects Aid Workers", "WHO: One-Third of All Cancer Deaths Are Preventable", "Scientists Find New Strategy Against Drug-Resistant Superbugs", "Newly Developed Skin Cream Cures Parasitic Illness", "Air Pollution Raises Risk of Low Birth Weight Babies", "Cat to Replace Iron After Vote by Monopoly Fans", "US Deli Owner is Noted Calligrapher", "Nominees, Movie Fans Get Ready for Oscars", "Oregon Truffle Dogs Unearth Treasure", "Federal Reserve's Internal Site Hacked", "EU Leaders: 'Deal Done' on Long-Term Austerity Budget", "State of the Union Address Likely to Focus on Domestic Issues", "Ukraine Complains No Help From Europe in Russia Gas Dispute", "Tourists Help Conservation Effort at Indian Tiger Reserves", "China Bans Ads for Luxury Goods", "New England Fishermen Face Crippling Cuts", "Poll Shows Hillary Clinton is Most Popular US Politician", "US Official Defends Drone Strikes After Leaked Memo", "China Expands Crackdown on Tibet Immolations", "London Set for Huge Chinese New Year Celebrations", "Facebook ‘Unfriending’ Triggers Real-life Consequences", "Living Microorganisms Found High Above Earth", "Obama: Full Steam Ahead", "Washington – Kremlin: Why Be Nice?", "East China Sea Dispute Rocks Kerry’s Debut at State Department", "NTSB to meet on train collision in Minnesota", "Hersman Announces Selection of Tracy Murrell as Director of Marine Safety", "Clean Energy Tied to National Security, Official Says", "Students Visit Pentagon for IT Job Shadow Day", "Antibiotics Help Fight Severe Malnutrition", "Transplant Recipient Says New Arms 'Amazing'", "Study: More TV and Less Exercise Lead to Lower Sperm Count", "New Director of Johnson Space Center Faces Cutbacks, Uncertainty", "Locklear Lauds Brunei for Promoting Regional Cooperation", "Panetta: DOD Must ‘Operate on Every Front’ Against Suicide", "Pentagon Lecture Highlights Emancipation Proclamation"];
    };


    return Faker;
}