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
]);

export const collegeDeps = {
  engineering: ["mechanical", "agricultural", "electrical"],
  science: ["physics", "biology", "zoology"],
  architecture: ["architecture"],
};
