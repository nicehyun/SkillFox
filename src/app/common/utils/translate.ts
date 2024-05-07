export const translateClassification = (classification: string) => {
  if (classification === "FE") {
    return "프론트엔드";
  } else if (classification === "BE") {
    return "백엔드";
  } else if (classification === "DE") {
    return "데이터 엔지니어";
  } else if (classification === "DA") {
    return "데이터분석가";
  } else if (classification === "ML") {
    return "머신러닝 엔지니어";
  } else {
    return null;
  }
};
