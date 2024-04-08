export const translateClassification = (classification: string) => {
  if (classification === "FE") {
    return "프론트엔드";
  } else if (classification === "BE") {
    return "백엔드";
  } else {
    return null;
  }
};
