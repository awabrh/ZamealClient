export type colleges = {
  engineering: string[];
  science: string[];
  architecture: string[];
};

export const arabicCollege = new Map([
  ["mechanical", "الهندسة الميكانيكية"],
  ["agricultural", "الهندسة الزراعية"],
  ["electrical", "الهندسة الكهربائية"],
  ["physics", "الفيزياء"],
  ["biology", "الاحياء"],
  ["zoology", "علم الحيوان"],
  ["architecture", "العمارة"],
  ["civil", "الهندسة المدنية"],
  ["chemical", "الهندسة الكيميائية"],
  ["mining", "هندسة التعدين"],
  ["surveying", "هندسة المساحة"],
  ["petroleum", "هندسة النفط"],
  ["arts", "اداب"],
  ["law", "قانون"],
  ["economics", "اقتصاد"],
  ["geography", "جغرفيا"],
]);

export const collegeDeps = {
  engineering: [
    "mechanical",
    "agricultural",
    "electrical",
    "civil",
    "chemical",
    "mining",
    "surveying",
    "petroleum",
  ],
  science: ["physics", "biology"],
  architecture: ["architecture"],
  arts: ["arts"],
  economics: ["economics"],
  law: ["law"],
  geography: ["geography"],
};
