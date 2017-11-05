var genders = ['Male', 'Female'];
var races = ['Altmer (High Elf)', 'Argonian', 'Bosmer (Wood Elf)', 'Breton', 'Dunmer (Dark Elf)', 'Imperial', 'Khajiit', 'Nord', 'Orsimer (Orc)', 'Redguard'];
var armours = ['Heavy', 'Light', 'Unarmoured'];
var combatStyles = ['One-handed', 'One-handed', 'Archery', 'Destruction'];
var standingStones = ['The Apprentice Stone', 'The Atronach Stone', 'The Lady Stone', 'The Lord Stone', 'The Lover Stone', 'The Mage Stone', 'The Ritual Stone', 'The Serpent Stone', 'The Shadow Stone', 'The Steed Stone', 'The Thief Stone', 'The Tower Stone', 'The Warrior Stone'];
var houses = ['Breezehome', 'Honeyside', 'Vlindrel Hall', 'Hjerim', 'Proudspire Manor', 'Heljarchen Hall', 'Lakeview Manor', 'Windstad Manor', 'Severin Manor'];
var spousesFemale = ['Aela the Huntress', 'Aeri', 'Anwen', 'Avrusa Sarethi', 'Borgakh the Steel Heart', 'Brelyna Maryon', 'Camilla Valerius', 'Dravynea the Stoneweaver', 'Ghorza gra-Bagol', 'Gilfre', 'Hilund', 'Iona', 'Jenassa', 'Jordis the Sword-Maiden', 'Lydia', 'Mjoll the Lioness', 'Morwen', 'Muiri', 'Njada Stonearm', 'Orla', 'Rayya', 'Ria', 'Senna', 'Shahvee', 'Sylgja', 'Taarie', 'Temba Wide-Arm', 'Uthgerd the Unbroken', 'Viola Giordano', 'Ysolda'];
var spousesMale = ['Ainethach', 'Angrenor Once-Honored', 'Argis the Bulwark', 'Athis', 'Balimund', 'Belrand', 'Benor', 'Calder', 'Cosnach', 'Derkeethus', 'Farkas', 'Filnjar', 'Gat gro-Shargakh', 'Ghorbash the Iron Hand', 'Gregor', 'Halbarn Iron-Fur', 'Marcurio', 'Moth gro-Bagol', 'Octieve San', 'Omluag', 'Onmund', 'Pavo Attius', 'Perth', 'Quintus Navale', 'Revyn Sadri', 'Roggi Knot-Beard', 'Romlyn Dreth', 'Scouts-Many-Marshes', 'Sondas Drenim', 'Sorex Vinius', 'Stenvar', 'Torvar', 'Valdimar', 'Vilkas', 'Vorstag', 'Wilhelm'];
var followers = ['Brelyna Maryon', 'J\'zargo', 'Onmund', 'Aela the Huntress', 'Athis', 'Farkas', 'Njada Stonearm', 'Ria', 'Torvar', 'Vilkas', 'Cicero', 'Agmaer', 'Beleval', 'Celann', 'Durak', 'Ingjard', 'Serana', 'Frea', 'Talvas Fathryon', 'Teldryn Sero', 'Ralis Sedarys', 'Golldir', 'Illia', 'Belrand', 'Erik the Slayer', 'Jenassa', 'Marcurio', 'Stenvar', 'Vorstag', 'Argis the Bulwark', 'Calder', 'Gregor', 'Iona', 'Jordis the Sword-Maiden', 'Lydia', 'Rayya', 'Valdimar', 'Borgakh the Steel Heart', 'Ghorbash the Iron Hand', 'Lob', 'Ogol', 'Ugor', 'Adelaisa Vendicci', 'Ahtar', 'Annekke Crag-Jumper', 'Aranea Ienith', 'Benor', 'Cosnach', 'Derkeethus', 'Eola', 'Erandur', 'Faendal', 'Kharjo', 'Mjoll the Lioness', 'Roggi Knot-Beard', 'Sven', 'Uthgerd the Unbroken'];
var mainQuestSides = ['Blades', 'Greybeards'];
var civilWarSides = ['Imperial Legion', 'Stormcloaks'];
var dawnguardSides = ['Dawnguard', 'Volkihar Clan'];
var alignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
var gods = ['Aedra', 'Daedra'];

function generateCharacter() {
    var characterTable = document.getElementById("characterTable");
    if (characterTable.style.display === "none") {
        characterTable.style.display = "block";
        document.getElementById("generateButton").innerHTML = "Regenerate";
    }
    generateRandomCharacter();
}

function generateRandomCharacter() {
    var gender = getRandomValue(genders);

    // Appearance
    document.getElementById("genderValue").innerHTML = gender
    document.getElementById("raceValue").innerHTML = getRandomValue(races);

    // Skills
    document.getElementById("armourValue").innerHTML = getRandomValue(armours);
    document.getElementById("combatValue").innerHTML = getRandomValue(combatStyles);
    document.getElementById("standingStoneValue").innerHTML = getRandomValue(standingStones);

    document.getElementById("houseValue").innerHTML = getRandomValue(houses);
    if (gender == 'Male') {
        document.getElementById("spouseValue").innerHTML = getRandomValue(spousesFemale);
    } else {
        document.getElementById("spouseValue").innerHTML = getRandomValue(spousesMale);
    }
    document.getElementById("followerValue").innerHTML = getRandomValue(followers);

    // Quests
    document.getElementById("mainQuestSideValue").innerHTML = getRandomValue(mainQuestSides);
    document.getElementById("civilWarSideValue").innerHTML = getRandomValue(civilWarSides);
    document.getElementById("dawnguardSideValue").innerHTML = getRandomValue(dawnguardSides);

    // Role Play
    document.getElementById("alignmentValue").innerHTML = getRandomValue(alignments);
    document.getElementById("godsValue").innerHTML = getRandomValue(gods);
}

function getRandomValue(values) {
    return values[Math.floor(Math.random() * values.length)];
}