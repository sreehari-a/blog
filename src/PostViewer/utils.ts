export function getSectionizedText(text: string) {
  const sectionDelimiter = "-----";
  const contentDelimiter = "---";
  const sectionizedArray: { header: string; content: string }[] = [];
  const [mainHead, ...rest] = text.split(sectionDelimiter);
  rest.forEach((section) => {
    const [sectionHead, sectionContent] = section.split(contentDelimiter);
    sectionizedArray.push({
      header: sectionHead,
      content: sectionContent,
    });
  });
  return {
    title: mainHead,
    sections: sectionizedArray,
  };
}