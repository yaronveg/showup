// mock data:

export const users = [
  {
    firstName: "Yaron",
    lastName: "Veg",
    profilePicture:
      "https://scontent.ftlv18-1.fna.fbcdn.net/v/t1.6435-9/30703931_10213905959975976_6380633123226386432_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=TIZP9kpyE84AX8Kh-so&_nc_ht=scontent.ftlv18-1.fna&oh=00_AT8vniqUZrz1P7tRq839ZxnhiOi-p1xRJDe2jUjk95aasA&oe=620D7344",
    coverPicture:
      "https://scontent.ftlv18-1.fna.fbcdn.net/v/t31.18172-8/469293_10200785623735770_1642242649_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=de6eea&_nc_ohc=QYZHwRSuRTsAX-tsO67&_nc_ht=scontent.ftlv18-1.fna&oh=00_AT9SLHMdlF-zdL-Ro72YW9i9vu7QpjP7E0PnJ64jDSM8ZQ&oe=620FE7DC",
    bio: `I'm a starting musician from Karney Shomron. Looking for a band to preform with my original materials.`,
    skills: ["Saxophone", "Guitar", "Bass", "Piano", "Drums"],
    genres: ["Rock", "Alt", "Acoustic", "Pop", "Alternative"],
    galleryPictures: [
      "https://scontent.ftlv18-1.fna.fbcdn.net/v/t1.6435-9/75424765_2564581346971015_1892483167529467904_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=3z00Ie9dzYQAX-oxSuq&tn=pn0p2CMwUbYckEOh&_nc_ht=scontent.ftlv18-1.fna&oh=00_AT8nBni25ztLvKcdAnZ9OtcTGlfpboZDYfb1dVtC_iTRSw&oe=620F1CD9",
      "https://scontent.ftlv18-1.fna.fbcdn.net/v/t1.6435-9/75250913_2564580826971067_7237483063033200640_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=-lhIZkjwHiYAX_WpTId&tn=pn0p2CMwUbYckEOh&_nc_ht=scontent.ftlv18-1.fna&oh=00_AT8VNcYUMmRQZdzfddSPG12xqI8o7UAvyfLpMQQ-WRqVKg&oe=620EDBC2",
      "https://scontent.ftlv18-1.fna.fbcdn.net/v/t31.18172-8/14311328_1273616832662951_5861116945022254063_o.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=rgVPyGf_yRMAX_JoWU_&_nc_ht=scontent.ftlv18-1.fna&oh=00_AT9UP8KKxxUtaUBgqpq_CL2rXEBIR5_DSD-gK-5lQno23A&oe=620E7BA4",
      "https://scontent.ftlv18-1.fna.fbcdn.net/v/t1.6435-9/30652399_10213891730660252_2007046815945326592_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=wnAT0v3smU8AX8Bht8E&_nc_ht=scontent.ftlv18-1.fna&oh=00_AT_Zb7bf1Zty9dyK19N3WI1RLKPWjYgXlYe0ZaZrCuhXVQ&oe=620DE9A3",
    ],
    timestamps: [
      {
        year: 2021,
        stamps: [
          {
            id: 1,
            date: "Jun 27",
            type: "Playing",
            detail: "bass",
            text: "Yinon Bar",
            subText: null,
            subType: null,
          },
          {
            id: 2,
            date: "Apr 12",
            type: "Release",
            detail: "single",
            text: '"Im Ata Ohev Oti"',
            subText: "Yahel Doron",
            subType: "produced",
          },
        ],
      },
      {
        year: 2020,
        stamps: [
          {
            id: 3,
            date: "Sep 04",
            type: "show",
            detail: "Single debut",
            text: "Zappa TLV",
            subText: null,
            subType: null,
          },
        ],
      },
      {
        year: 2019,
        stamps: [
          {
            id: 4,
            date: "Apr 15",
            type: "Played",
            detail: "keyboard",
            text: "Miriam Weiss",
            subText: null,
            subType: null,
          },
          {
            id: 5,
            date: "Feb 21",
            type: "Skill",
            detail: "drums",
            text: null,
            subText: null,
            subType: null,
          },
          {
            id: 6,
            date: "Feb 14",
            type: "Connection",
            detail: null,
            text: "Shimi Weiss",
            subText: null,
            subType: null,
          },
        ],
      },
      {
        year: 2018,
        stamps: [
          {
            id: 7,
            date: "Aug 15",
            type: "Skill",
            detail: "bass guitar",
            text: null,
            subText: null,
            subType: null,
          },
        ],
      },
    ],
    playlist: [
      {
        src: "/aud1.mp3",
        title: "song 1",
        duration: 0,
      },
      {
        src: "/aud2.mp3",
        title: "song 2",
        duration: 0,
      },
      {
        src: "/aud3.mp3",
        title: "song 3",
        duration: 0,
      },
    ],
  },
];

export const genres = ["Rock", "Alt", "Acoustic", "Pop", "Alternative"];
export const skills = ["Saxophone", "Guitar", "Bass", "Piano", "Drums"];
