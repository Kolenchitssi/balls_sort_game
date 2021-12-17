export const getEventAttribute = (
  event: React.DragEvent<HTMLDivElement>,
  attribute: string
) => {
  const domElement = event.target as HTMLDivElement; //иначе не забрать атрибуты typescript  не понимает что это DOM-элемент
  return domElement.getAttribute(attribute) || "";
};
