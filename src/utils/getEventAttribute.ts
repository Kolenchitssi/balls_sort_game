export const getEventAttribute = (
  event: React.DragEvent<HTMLDivElement>,
  attribute: string
) => {
  const domElement = event.target as HTMLDivElement;
  return domElement.getAttribute(attribute) || "";
};
