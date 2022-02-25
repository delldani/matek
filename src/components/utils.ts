const SUCCEDSENTENCES = [
  "ÜGYES VOLTÁL",
  "ÜGYES VAGY ÁRON",
  "NAGYSZERŰ",
  "TE VAGY A KIRÁLY",
  "ÁRON A KIRÁLY",
  "BÜSZKE LEHETSZ MAGADRA",
];

const bgPictures = [
  "https://cdn.vox-cdn.com/thumbor/wZ-7MngAL1awK975nXAMxAYp9Uw=/0x0:1920x1080/920x613/filters:focal(804x128:1110x434):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70383739/S8_KeyArt.0.jpg",
  "https://static-assets-prod.epicgames.com/fortnite/static/webpack/8f9484f10eb14f85a189fb6117a57026.jpg",
  "https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fseason-8%2FBR08_News_Featured_Launch_ScreenKeyArt_Announce-1920x1080-f831323339109ab3c6a8d9e4c670f1973b8796d0.jpg",
  "https://cdn2.unrealengine.com/7up-v2-3840x2160-e11fc91a84d6.jpg",
  "https://assets.xboxservices.com/assets/8f/d6/8fd6731f-480f-4a9a-bd48-32328505a525.jpg?n=Fortnite_Sneaky-Slider-1084_Ch-3_1600x675.jpg",
  "https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fseason-5%2FBR05_Social_-Launch_Hero-Line-Up-1920x1080-2117b3d382b87887271a17a78122b7316ff0c1c0.jpg",
  "https://cdn2.unrealengine.com/13br-evergreens-blue-newsheader-1920x1080-685060491.jpg",
  "https://m.gamekapocs.hu/media/galeria/jatek/6/6207/13261/231197_orig_FortniteSeasonTwoExpansion.jpg",
];

export const getRandomNumber = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomBgPicture = () => {
  return bgPictures[getRandomNumber(0, bgPictures.length - 1)];
};

export const getSucceedSentence = () => {
  return SUCCEDSENTENCES[getRandomNumber(0, SUCCEDSENTENCES.length - 1)];
};

export const getDivideRandomNumber = () => {
  let a = 0;
  let b = 0;
  do {
    a = getRandomNumber(6, 15);
    b = getRandomNumber(2, a / 2);
  } while (a % b !== 0);
  return { a, b };
};
