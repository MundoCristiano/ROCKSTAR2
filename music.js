// géneros
let generos = [{
        id: 1,
        name: "Inglés",
        img: "img/music/ingles/logo.png"
    },
    {
        id: 2,
        name: "Español",
        img: "img/music/ingles/logo.png"
    },
    
]

// canciones
let mySongs = [
    {id: 01, idGenero: 1, name: "Away From The Sun", artist:"3 Doors Down", path: "https://archive.org/download/RS-002/3_Doors_Down/01.mp3", image:"img/music/ingles/3-doors-down.jpg"},
    {id: 02, idGenero: 1, name: "Be Like That", artist:"3 Doors Down", path: "https://archive.org/download/RS-002/3_Doors_Down/02.mp3", image:"img/music/ingles/3-doors-down.jpg"},
    {id: 03, idGenero: 1, name: "Duck And Run", artist:"3 Doors Down", path: "https://archive.org/download/RS-002/3_Doors_Down/03.mp3", image:"img/music/ingles/3-doors-down.jpg"},
    {id: 04, idGenero: 1, name: "Here Without You", artist:"3 Doors Down", path: "https://archive.org/download/RS-002/3_Doors_Down/04.mp3", image:"img/music/ingles/3-doors-down.jpg"},
    {id: 05, idGenero: 1, name: "It's Not My Time", artist:"3 Doors Down", path: "https://archive.org/download/RS-002/3_Doors_Down/05.mp3", image:"img/music/ingles/3-doors-down.jpg"},
    {id: 06, idGenero: 1, name: "Kryptonite", artist:"3 Doors Down", path: "https://archive.org/download/RS-002/3_Doors_Down/06.mp3", image:"img/music/ingles/3-doors-down.jpg"},
    {id: 07, idGenero: 1, name: "Landing In London", artist:"3 Doors Down", path: "https://archive.org/download/RS-002/3_Doors_Down/07.mp3", image:"img/music/ingles/3-doors-down.jpg"},
    {id: 08, idGenero: 1, name: "Let Me Be Myself", artist:"3 Doors Down", path: "https://archive.org/download/RS-002/3_Doors_Down/08.mp3", image:"img/music/ingles/3-doors-down.jpg"},
    {id: 09, idGenero: 1, name: "Let Me Go", artist:"3 Doors Down", path: "https://archive.org/download/RS-002/3_Doors_Down/09.mp3", image:"img/music/ingles/3-doors-down.jpg"},
    {id: 10, idGenero: 1, name: "Loser", artist:"3 Doors Down", path: "https://archive.org/download/RS-002/3_Doors_Down/10.mp3", image:"img/music/ingles/3-doors-down.jpg"},
    {id: 11, idGenero: 1, name: "When I'm Gone", artist:"3 Doors Down", path: "https://archive.org/download/RS-002/3_Doors_Down/11.mp3", image:"img/music/ingles/3-doors-down.jpg"},
    {id: 12, idGenero: 1, name: "When You're Young", artist:"3 Doors Down", path: "https://archive.org/download/RS-002/3_Doors_Down/12.mp3", image:"img/music/ingles/3-doors-down.jpg"},
    {id: 13, idGenero: 1, name: "Calling All The People", artist:"4 Non Blondes", path: "https://archive.org/download/RS-003/4_Non_Blondes/01.mp3", image:"img/music/ingles/4-non-blondes.jpg"},
    {id: 14, idGenero: 1, name: "Dear Mr. President", artist:"4 Non Blondes", path: "https://archive.org/download/RS-003/4_Non_Blondes/02.mp3", image:"img/music/ingles/4-non-blondes.jpg"},
    {id: 15, idGenero: 1, name: "Drifting", artist:"4 Non Blondes", path: "https://archive.org/download/RS-003/4_Non_Blondes/03.mp3", image:"img/music/ingles/4-non-blondes.jpg"},
    {id: 16, idGenero: 1, name: "Morphine & Chocolate", artist:"4 Non Blondes", path: "https://archive.org/download/RS-003/4_Non_Blondes/04.mp3", image:"img/music/ingles/4-non-blondes.jpg"},
    {id: 17, idGenero: 1, name: "No Place Like Home", artist:"4 Non Blondes", path: "https://archive.org/download/RS-003/4_Non_Blondes/05.mp3", image:"img/music/ingles/4-non-blondes.jpg"},
    {id: 18, idGenero: 1, name: "Old Mr. Heffer", artist:"4 Non Blondes", path: "https://archive.org/download/RS-003/4_Non_Blondes/06.mp3", image:"img/music/ingles/4-non-blondes.jpg"},
    {id: 19, idGenero: 1, name: "Spaceman", artist:"4 Non Blondes", path: "https://archive.org/download/RS-003/4_Non_Blondes/07.mp3", image:"img/music/ingles/4-non-blondes.jpg"},
    {id: 20, idGenero: 1, name: "Superfly", artist:"4 Non Blondes", path: "https://archive.org/download/RS-003/4_Non_Blondes/08.mp3", image:"img/music/ingles/4-non-blondes.jpg"},
    {id: 21, idGenero: 1, name: "Train", artist:"4 Non Blondes", path: "https://archive.org/download/RS-003/4_Non_Blondes/09.mp3", image:"img/music/ingles/4-non-blondes.jpg"},
    {id: 22, idGenero: 1, name: "What's Up?", artist:"4 Non Blondes", path: "https://archive.org/download/RS-003/4_Non_Blondes/10.mp3", image:"img/music/ingles/4-non-blondes.jpg"},
    {id: 23, idGenero: 1, name: "Ain't No Fun", artist:"AC/DC", path: "https://archive.org/download/RS-001/01.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 24, idGenero: 1, name: "Are You Ready", artist:"AC/DC", path: "https://archive.org/download/RS-001/02.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 25, idGenero: 1, name: "Back In Black", artist:"AC/DC", path: "https://archive.org/download/RS-001/03.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 26, idGenero: 1, name: "Bad Boy Boogie", artist:"AC/DC", path: "https://archive.org/download/RS-001/04.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 27, idGenero: 1, name: "Beating Around The Bush", artist:"AC/DC", path: "https://archive.org/download/RS-001/05.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 28, idGenero: 1, name: "Big Balls", artist:"AC/DC", path: "https://archive.org/download/RS-001/06.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 29, idGenero: 1, name: "Cold Hearted Man", artist:"AC/DC", path: "https://archive.org/download/RS-001/07.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 30, idGenero: 1, name: "Dirty Deeds Done Dirt Cheap", artist:"AC/DC", path: "https://archive.org/download/RS-001/08.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 31, idGenero: 1, name: "Down Payment Blues", artist:"AC/DC", path: "https://archive.org/download/RS-001/09.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 32, idGenero: 1, name: "Evil Walks", artist:"AC/DC", path: "https://archive.org/download/RS-001/10.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 33, idGenero: 1, name: "For Those About To Rock", artist:"AC/DC", path: "https://archive.org/download/RS-001/11.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 34, idGenero: 1, name: "Get It Hot", artist:"AC/DC", path: "https://archive.org/download/RS-001/12.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 35, idGenero: 1, name: "Girls Got Rhythm", artist:"AC/DC", path: "https://archive.org/download/RS-001/13.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 36, idGenero: 1, name: "Givin The Dog A Bone", artist:"AC/DC", path: "https://archive.org/download/RS-001/14.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 37, idGenero: 1, name: "Gone Shootin'", artist:"AC/DC", path: "https://archive.org/download/RS-001/15.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 38, idGenero: 1, name: "Guns For Hire", artist:"AC/DC", path: "https://archive.org/download/RS-001/16.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 39, idGenero: 1, name: "Hard As A Rock", artist:"AC/DC", path: "https://archive.org/download/RS-001/17.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 40, idGenero: 1, name: "Have A Drink On Me", artist:"AC/DC", path: "https://archive.org/download/RS-001/18.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 41, idGenero: 1, name: "Heatseeker", artist:"AC/DC", path: "https://archive.org/download/RS-001/19.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 42, idGenero: 1, name: "Hell Ain't A Bad Place To Be", artist:"AC/DC", path: "https://archive.org/download/RS-001/20.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 43, idGenero: 1, name: "Hells Bells", artist:"AC/DC", path: "https://archive.org/download/RS-001/21.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 44, idGenero: 1, name: "Highway To Hell", artist:"AC/DC", path: "https://archive.org/download/RS-001/22.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 45, idGenero: 1, name: "If You Want Blood", artist:"AC/DC", path: "https://archive.org/download/RS-001/23.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 46, idGenero: 1, name: "It's A Long Way To The Top", artist:"AC/DC", path: "https://archive.org/download/RS-001/24.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 47, idGenero: 1, name: "Jailbreak", artist:"AC/DC", path: "https://archive.org/download/RS-001/25.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 48, idGenero: 1, name: "Kicked In The Teeth", artist:"AC/DC", path: "https://archive.org/download/RS-001/26.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 49, idGenero: 1, name: "Let There Be Rock", artist:"AC/DC", path: "https://archive.org/download/RS-001/27.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 50, idGenero: 1, name: "Moneytalks", artist:"AC/DC", path: "https://archive.org/download/RS-001/28.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 51, idGenero: 1, name: "Night Prowler", artist:"AC/DC", path: "https://archive.org/download/RS-001/29.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 52, idGenero: 1, name: "Problem Child", artist:"AC/DC", path: "https://archive.org/download/RS-001/30.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 53, idGenero: 1, name: "Ride On", artist:"AC/DC", path: "https://archive.org/download/RS-001/31.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 54, idGenero: 1, name: "Riff Raff", artist:"AC/DC", path: "https://archive.org/download/RS-001/32.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 55, idGenero: 1, name: "Rock And Roll Ain't Noise Pollution", artist:"AC/DC", path: "https://archive.org/download/RS-001/33.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 56, idGenero: 1, name: "Rock 'N' Roll Damnation", artist:"AC/DC", path: "https://archive.org/download/RS-001/34.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 57, idGenero: 1, name: "Rock N Roll Train", artist:"AC/DC", path: "https://archive.org/download/RS-001/35.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 58, idGenero: 1, name: "Safe In New York City", artist:"AC/DC", path: "https://archive.org/download/RS-001/36.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 59, idGenero: 1, name: "Shake A Leg", artist:"AC/DC", path: "https://archive.org/download/RS-001/37.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 60, idGenero: 1, name: "Shake Your Foundations", artist:"AC/DC", path: "https://archive.org/download/RS-001/38.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 61, idGenero: 1, name: "Shoot To Thrill", artist:"AC/DC", path: "https://archive.org/download/RS-001/39.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 62, idGenero: 1, name: "Shot Down In Flames", artist:"AC/DC", path: "https://archive.org/download/RS-001/40.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 63, idGenero: 1, name: "Sin City", artist:"AC/DC", path: "https://archive.org/download/RS-001/41.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 64, idGenero: 1, name: "Sink The Pink", artist:"AC/DC", path: "https://archive.org/download/RS-001/42.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 65, idGenero: 1, name: "Squealer", artist:"AC/DC", path: "https://archive.org/download/RS-001/43.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 66, idGenero: 1, name: "T.N.T.", artist:"AC/DC", path: "https://archive.org/download/RS-001/44.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 67, idGenero: 1, name: "Thunderstruck", artist:"AC/DC", path: "https://archive.org/download/RS-001/45.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 68, idGenero: 1, name: "Touch Too Much", artist:"AC/DC", path: "https://archive.org/download/RS-001/46.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 69, idGenero: 1, name: "Up To My Neck In You", artist:"AC/DC", path: "https://archive.org/download/RS-001/47.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 70, idGenero: 1, name: "Walk All Over You", artist:"AC/DC", path: "https://archive.org/download/RS-001/48.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 71, idGenero: 1, name: "War Machine", artist:"AC/DC", path: "https://archive.org/download/RS-001/49.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 72, idGenero: 1, name: "What Do You Do For Money Honey", artist:"AC/DC", path: "https://archive.org/download/RS-001/50.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 73, idGenero: 1, name: "Who Made Who", artist:"AC/DC", path: "https://archive.org/download/RS-001/51.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 74, idGenero: 1, name: "Whole Lotta Rosie", artist:"AC/DC", path: "https://archive.org/download/RS-001/52.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 75, idGenero: 1, name: "You Shook Me All Night Long", artist:"AC/DC", path: "https://archive.org/download/RS-001/53.mp3", image:"img/music/ingles/ac-dc.jpg"},
    {id: 76, idGenero: 1, name: "Amazing", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/01.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 77, idGenero: 1, name: "Angel", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/02.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 78, idGenero: 1, name: "Back in The Saddle", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/03.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 79, idGenero: 1, name: "Big Ten Inch Record", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/04.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 80, idGenero: 1, name: "Chip Away The Stone", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/05.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 81, idGenero: 1, name: "Come Together", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/06.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 82, idGenero: 1, name: "Crazy", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/07.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 83, idGenero: 1, name: "Cryin'", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/08.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 84, idGenero: 1, name: "Deuces Are Wild", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/09.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 85, idGenero: 1, name: "Draw The Line", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/10.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 86, idGenero: 1, name: "Dream On", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/11.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 87, idGenero: 1, name: "Dude", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/12.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 88, idGenero: 1, name: "Eat The Rich", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/13.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 89, idGenero: 1, name: "Falling In Love", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/14.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 90, idGenero: 1, name: "Fly Away From Here", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/15.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 91, idGenero: 1, name: "Girls of Summer", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/16.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 92, idGenero: 1, name: "Hole In My Soul", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/17.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 93, idGenero: 1, name: "I Don't Want to Miss a Thing", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/18.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 94, idGenero: 1, name: "Jaded", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/19.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 95, idGenero: 1, name: "Janie's Got a Gun", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/20.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 96, idGenero: 1, name: "Kings And Queens", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/21.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 97, idGenero: 1, name: "Last Child", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/22.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 98, idGenero: 1, name: "Lay It Down", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/23.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 99, idGenero: 1, name: "Lightning Strikes", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/24.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 100, idGenero: 1, name: "Livin' on the Edge", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/25.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 101, idGenero: 1, name: "Love in an Elevator", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/26.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 102, idGenero: 1, name: "Mama Kin", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/27.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 103, idGenero: 1, name: "Pink", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/28.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 104, idGenero: 1, name: "Rag Doll", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/29.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 105, idGenero: 1, name: "Remember", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/30.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 106, idGenero: 1, name: "Same Old Song And Dance", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/31.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 107, idGenero: 1, name: "Sweet Emotion", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/32.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 108, idGenero: 1, name: "The Other Side", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/33.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 109, idGenero: 1, name: "Walk This Way", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/34.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 110, idGenero: 1, name: "What Could Have Been Love", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/35.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 111, idGenero: 1, name: "What It Takes", artist:"Aerosmith", path: "https://archive.org/download/RS-004/Aerosmith/36.mp3", image:"img/music/ingles/aerosmith.jpg"},
    {id: 112, idGenero: 1, name: "A Horse With No Name", artist:"America", path: "https://archive.org/download/RS-005/01.mp3", image:"img/music/ingles/america.jpg"},
    {id: 113, idGenero: 1, name: "Amber Cascades", artist:"America", path: "https://archive.org/download/RS-005/02.mp3", image:"img/music/ingles/america.jpg"},
    {id: 114, idGenero: 1, name: "Don't Cross The River", artist:"America", path: "https://archive.org/download/RS-005/03.mp3", image:"img/music/ingles/america.jpg"},
    {id: 115, idGenero: 1, name: "Here", artist:"America", path: "https://archive.org/download/RS-005/04.mp3", image:"img/music/ingles/america.jpg"},
    {id: 116, idGenero: 1, name: "Muskrat Love", artist:"America", path: "https://archive.org/download/RS-005/05.mp3", image:"img/music/ingles/america.jpg"},
    {id: 117, idGenero: 1, name: "Only In Your Heart", artist:"America", path: "https://archive.org/download/RS-005/06.mp3", image:"img/music/ingles/america.jpg"},
    {id: 118, idGenero: 1, name: "Right Before Your Eyes", artist:"America", path: "https://archive.org/download/RS-005/07.mp3", image:"img/music/ingles/america.jpg"},
    {id: 119, idGenero: 1, name: "Sister Golden Hair", artist:"America", path: "https://archive.org/download/RS-005/08.mp3", image:"img/music/ingles/america.jpg"},
    {id: 120, idGenero: 1, name: "Tin Man", artist:"America", path: "https://archive.org/download/RS-005/09.mp3", image:"img/music/ingles/america.jpg"},
    {id: 121, idGenero: 1, name: "To Each His Own", artist:"America", path: "https://archive.org/download/RS-005/10.mp3", image:"img/music/ingles/america.jpg"},
    {id: 122, idGenero: 1, name: "Today's The Day", artist:"America", path: "https://archive.org/download/RS-005/11.mp3", image:"img/music/ingles/america.jpg"},
    {id: 123, idGenero: 1, name: "You Can Do Magic", artist:"America", path: "https://archive.org/download/RS-005/12.mp3", image:"img/music/ingles/america.jpg"},
    {id: 124, idGenero: 1, name: "All Out Of Love", artist:"Air Supply", path: "https://archive.org/download/RS-006/01.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 125, idGenero: 1, name: "Chances", artist:"Air Supply", path: "https://archive.org/download/RS-006/02.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 126, idGenero: 1, name: "Come What May", artist:"Air Supply", path: "https://archive.org/download/RS-006/03.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 127, idGenero: 1, name: "Don't Turn Me Away", artist:"Air Supply", path: "https://archive.org/download/RS-006/04.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 128, idGenero: 1, name: "Even The Nights Are Better", artist:"Air Supply", path: "https://archive.org/download/RS-006/05.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 129, idGenero: 1, name: "Every Woman In The World", artist:"Air Supply", path: "https://archive.org/download/RS-006/06.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 130, idGenero: 1, name: "I Can Wait Forever", artist:"Air Supply", path: "https://archive.org/download/RS-006/07.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 131, idGenero: 1, name: "I Can't Let Go", artist:"Air Supply", path: "https://archive.org/download/RS-006/08.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 132, idGenero: 1, name: "I Want To Give It All", artist:"Air Supply", path: "https://archive.org/download/RS-006/09.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 133, idGenero: 1, name: "Just As I Am (Remastered)", artist:"Air Supply", path: "https://archive.org/download/RS-006/10.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 134, idGenero: 1, name: "Keeping The Love Alive", artist:"Air Supply", path: "https://archive.org/download/RS-006/11.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 135, idGenero: 1, name: "Lonely Is The Night", artist:"Air Supply", path: "https://archive.org/download/RS-006/12.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 136, idGenero: 1, name: "Lost In Love", artist:"Air Supply", path: "https://archive.org/download/RS-006/13.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 137, idGenero: 1, name: "Making Love Out Of Nothing At All", artist:"Air Supply", path: "https://archive.org/download/RS-006/14.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 138, idGenero: 1, name: "One More Chance", artist:"Air Supply", path: "https://archive.org/download/RS-006/15.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 139, idGenero: 1, name: "Sweet Dreams", artist:"Air Supply", path: "https://archive.org/download/RS-006/16.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 140, idGenero: 1, name: "The One That You Love", artist:"Air Supply", path: "https://archive.org/download/RS-006/17.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 141, idGenero: 1, name: "The Power Of Love", artist:"Air Supply", path: "https://archive.org/download/RS-006/18.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 142, idGenero: 1, name: "Two Less Lonely People In The World", artist:"Air Supply", path: "https://archive.org/download/RS-006/19.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 143, idGenero: 1, name: "Young Love", artist:"Air Supply", path: "https://archive.org/download/RS-006/20.mp3", image:"img/music/ingles/air-supply.jpg"},
    {id: 144, idGenero: 1, name: "Be Yourself", artist:"Audioslave", path: "https://archive.org/download/RS-007/01.mp3", image:"img/music/ingles/audioslava.jpg"},
    {id: 145, idGenero: 1, name: "Cochise", artist:"Audioslave", path: "https://archive.org/download/RS-007/02.mp3", image:"img/music/ingles/audioslava.jpg"},
    {id: 146, idGenero: 1, name: "Dandelion (Album Version)", artist:"Audioslave", path: "https://archive.org/download/RS-007/03.mp3", image:"img/music/ingles/audioslava.jpg"},
    {id: 147, idGenero: 1, name: "Doesn't Remind Me", artist:"Audioslave", path: "https://archive.org/download/RS-007/04.mp3", image:"img/music/ingles/audioslava.jpg"},
    {id: 148, idGenero: 1, name: "Gasoline", artist:"Audioslave", path: "https://archive.org/download/RS-007/05.mp3", image:"img/music/ingles/audioslava.jpg"},
    {id: 149, idGenero: 1, name: "Getaway Car", artist:"Audioslave", path: "https://archive.org/download/RS-007/06.mp3", image:"img/music/ingles/audioslava.jpg"},
    {id: 150, idGenero: 1, name: "Light My Way", artist:"Audioslave", path: "https://archive.org/download/RS-007/07.mp3", image:"img/music/ingles/audioslava.jpg"},
    {id: 151, idGenero: 1, name: "Like A Stone", artist:"Audioslave", path: "https://archive.org/download/RS-007/08.mp3", image:"img/music/ingles/audioslava.jpg"},
    {id: 152, idGenero: 1, name: "Shadow On The Sun", artist:"Audioslave", path: "https://archive.org/download/RS-007/09.mp3", image:"img/music/ingles/audioslava.jpg"},
    {id: 153, idGenero: 1, name: "Show Me How To Live", artist:"Audioslave", path: "https://archive.org/download/RS-007/10.mp3", image:"img/music/ingles/audioslava.jpg"},
    {id: 154, idGenero: 1, name: "What You Are", artist:"Audioslave", path: "https://archive.org/download/RS-007/11.mp3", image:"img/music/ingles/audioslava.jpg"},
    {id: 155, idGenero: 1, name: "Butterfly, Butterfly", artist:"A-HA", path: "https://archive.org/download/RS-008/A-ha/01.mp3", image:"img/music/ingles/a-ha.jpg"},
    {id: 156, idGenero: 1, name: "Crying In The Rain", artist:"A-HA", path: "https://archive.org/download/RS-008/A-ha/02.mp3", image:"img/music/ingles/a-ha.jpg"},
    {id: 157, idGenero: 1, name: "Dark Is The Night For All", artist:"A-HA", path: "https://archive.org/download/RS-008/A-ha/03.mp3", image:"img/music/ingles/a-ha.jpg"},
    {id: 158, idGenero: 1, name: "Forever Not Yours", artist:"A-HA", path: "https://archive.org/download/RS-008/A-ha/04.mp3", image:"img/music/ingles/a-ha.jpg"},
    {id: 159, idGenero: 1, name: "Hunting High And Low", artist:"A-HA", path: "https://archive.org/download/RS-008/A-ha/05.mp3", image:"img/music/ingles/a-ha.jpg"},
    {id: 160, idGenero: 1, name: "I Call Your Name", artist:"A-HA", path: "https://archive.org/download/RS-008/A-ha/06.mp3", image:"img/music/ingles/a-ha.jpg"},
    {id: 161, idGenero: 1, name: "Manhattan Skyline", artist:"A-HA", path: "https://archive.org/download/RS-008/A-ha/07.mp3", image:"img/music/ingles/a-ha.jpg"},
    {id: 162, idGenero: 1, name: "Stay On These Roads", artist:"A-HA", path: "https://archive.org/download/RS-008/A-ha/08.mp3", image:"img/music/ingles/a-ha.jpg"},
    {id: 163, idGenero: 1, name: "Take On Me", artist:"A-HA", path: "https://archive.org/download/RS-008/A-ha/09.mp3", image:"img/music/ingles/a-ha.jpg"},
    {id: 164, idGenero: 1, name: "The Blood That Moves The Body", artist:"A-HA", path: "https://archive.org/download/RS-008/A-ha/10.mp3", image:"img/music/ingles/a-ha.jpg"},
    {id: 165, idGenero: 1, name: "The Living Daylights", artist:"A-HA", path: "https://archive.org/download/RS-008/A-ha/11.mp3", image:"img/music/ingles/a-ha.jpg"},
    {id: 166, idGenero: 1, name: "The Sun Always Shines On TV", artist:"A-HA", path: "https://archive.org/download/RS-008/A-ha/12.mp3", image:"img/music/ingles/a-ha.jpg"},
    {id: 167, idGenero: 1, name: "505", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/01.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 168, idGenero: 1, name: "A Certain Romance", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/02.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 169, idGenero: 1, name: "American Sports", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/03.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 170, idGenero: 1, name: "Anyways", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/04.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 171, idGenero: 1, name: "Balaclava", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/05.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 172, idGenero: 1, name: "Batphone", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/06.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 173, idGenero: 1, name: "Brianstorm", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/07.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 174, idGenero: 1, name: "Cornerstone", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/08.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 175, idGenero: 1, name: "Crying Lightning", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/09.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 176, idGenero: 1, name: "Dance Little Liar", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/10.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 177, idGenero: 1, name: "Do I Wanna Know?", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/11.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 178, idGenero: 1, name: "Do Me A Favour", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/12.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 179, idGenero: 1, name: "Don't Sit Down 'Cause I've Moved Your Chair", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/13.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 180, idGenero: 1, name: "Fake Tales Of San Francisco", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/14.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 181, idGenero: 1, name: "Fireside", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/15.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 182, idGenero: 1, name: "Fluorescent Adolescent", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/16.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 183, idGenero: 1, name: "Four Out Of Five", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/17.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 184, idGenero: 1, name: "From The Ritz To The Rubble", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/18.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 185, idGenero: 1, name: "I Bet You Look Good On The Dancefloor", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/19.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 186, idGenero: 1, name: "I Wanna Be Yours", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/20.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 187, idGenero: 1, name: "Knee Socks", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/21.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 188, idGenero: 1, name: "Leave Before The Lights Come On", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/22.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 189, idGenero: 1, name: "Library Pictures", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/23.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 190, idGenero: 1, name: "Mardy Bum", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/24.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 191, idGenero: 1, name: "My Propeller", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/25.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 192, idGenero: 1, name: "No Buses", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/26.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 193, idGenero: 1, name: "Old Yellow Bricks", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/27.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 194, idGenero: 1, name: "One Point Perspective", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/28.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 195, idGenero: 1, name: "R U Mine?", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/29.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 196, idGenero: 1, name: "Riot Van", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/30.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 197, idGenero: 1, name: "Still Take You Home", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/31.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 198, idGenero: 1, name: "Teddy Picker", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/32.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 199, idGenero: 1, name: "The Bakery", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/33.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 200, idGenero: 1, name: "The Hellcat Spangled Shalalala", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/34.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 201, idGenero: 1, name: "The Jeweller's Hands", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/35.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 202, idGenero: 1, name: "The World's First Ever Monster Truck Front Flip", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/36.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 203, idGenero: 1, name: "This House Is A Circus", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/37.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 204, idGenero: 1, name: "When The Sun Goes Down", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/38.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 205, idGenero: 1, name: "Who The Fuck Are Arctic Monkeys?", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/39.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
    {id: 206, idGenero: 1, name: "Why'd You Only Call Me When You're High?", artist:"Arctic Monkeys", path: "https://archive.org/download/RS-008/Arctic%20Monkeys/40.mp3", image:"img/music/ingles/arctic-monkeys.jpg"},
]

// objeto con una lista vacía
let songsGenero = {
    songs: []
};


// mezcla el array pasado por parámetro y lo retorna
function mezclar(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {

        // Seleccionar un elemento sin mezclar...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // E intercambiarlo con el elemento actual
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// compila la data con el template que tiene el id idTemp y lo muestra en el elemento que tiene el id idPlace
function compilarHandlebars(data, idTemp, idPlace) {
    // html del template
    let temp = $(idTemp).html();
    // utilizamos compilar con Handlebars para indicar el template dónde queremos poner la data
    let compilar = Handlebars.compile(temp);
    // compilamos la data dentro del template
    let compilada = compilar(data);
    // mostramos el html del template ya compilado
    $(idPlace).html(compilada);
}


// ponemos en el select la lista de géneros
function getListGeneros() {
    let obj = { generos: generos }
    compilarHandlebars(obj, "#temp_generos", "#select-genero")
}

// al cambiar el género en el select nos traemos las canciones correspondientes
$("#select-genero").change(function() {
    getSongs();
});

// tag audio
let audio = document.getElementById('player');

// obtenemos el listado de las canciones para mostrarlas
function getSongs() {
    audio.pause();
    $("#player").attr("src", "");
    $("#title-song").text("");
    $("#title-song").attr("uk-tooltip", "title: Selecciona una canción");

    getSongsByGenero();
    compilarHandlebars(songsGenero, "#temp_songs", "#playlist")

    // evento click sobre cada item de la canción
    $("#playlist li").click(function() {
        // guardamos el id  del li de la canción seleccionada  en esta variable
        let selected = parseInt($(this).attr("id"));
        let index = songsGenero.songs.findIndex(song => song.id === selected);
        playSong(index);
    });
}

// obtenemos las canciones clasificadas por género
function getSongsByGenero() {
    songsGenero = {
        songs: []
    };

    let idGenero = parseInt($("#select-genero").val());
    mySongs.forEach(function(data, index) {
        if (data.idGenero === idGenero) {
            songsGenero.songs.push(data);
        }
    });

    generos.forEach(function(data, index) {
        if (data.id === idGenero) {
            $("#img-song").attr("src", data.img);
        }
    });
}

// programar la siguiente canción
function scheduleSong(id) {
    // cuando termina pasamos a la siguiente
    audio.onended = function() {
        playSong(id + 1);
    };
}

// play song
function playSong(index) {
    // longitud de las canciones actuales por género
    let long = songsGenero.songs;
    // si no tenemos más canciones para reproducir
    if (index >= long.length) {
        console.log("Se terminó la lista");
        audio.pause();
    } else {
        // colocamos la imágen correspondiente al tema
        $("#img-song").attr("src", songsGenero.songs[index].image);
        // nos tremos el path para reproducir en el tag de audio
        $("#player").attr("src", songsGenero.songs[index].path);
        // cambiamos el rítulo del tema debajo de la imagen
        $("#title-song").text(songsGenero.songs[index].name + " - " + songsGenero.songs[index].artist);
        // le agregamos el tootltip al título
        $("#title-song").attr("uk-tooltip", "title: " + songsGenero.songs[index].name + " - " + songsGenero.songs[index].artist);
        // le ponemos delante del título el icono de la música
        $("#title-song").prepend('<i class="fa fa-music text-white pl-1 pr-2"></i>');
        // mostramos el ecualizador en la cacnión corrspondiente
        showEcualizador("ecualizador_" + songsGenero.songs[index].id);
        // guardamos el id del ecualizador que se está mostrando
        $("#ecualizador-id").val("ecualizador_" + songsGenero.songs[index].id);
        // le damos play
        audio.play();
        // programamos la siguiente canción que llama a esta misma función al terminar
        scheduleSong(index);
    }
}


// mostrar el ecualizador por el id que pasamos por parámetro
function showEcualizador(id) {
    $("#playlist .ecualizador").each(function(i) {
        if ($(this).attr("id") !== id) {
            $(this).css("display", "none");
        } else {
            $(this).css("display", "block");
        }

    });



}
// escondemos los ecualizadores
function hideEcualizador() {
    $(".ecualizador").css("display", "none");
}

// botón reproducción aleatoria
$("#shuffle").click(function() {
    let mezcladas = mezclar(songsGenero.songs);
    hideEcualizador();
    getSongsMezcladas(mezcladas);
    playSong(0);
});


// obtener las canciones mezcladas
function getSongsMezcladas(array) {
    let obj = { songs: array };
    compilarHandlebars(obj, "#temp_songs", "#playlist")

    $("#playlist li").click(function() {
        let selected = parseInt($(this).attr("id"));
        let index = array.findIndex(song => song.id === selected);

        playSong(index);
    });
}



// al pausar
audio.onpause = function() {
    hideEcualizador();
};

// al ejecutarse play
audio.onplay = function() {
    if ($("#ecualizador-id").val() !== "") {
        showEcualizador($("#ecualizador-id").val());
    }
};
