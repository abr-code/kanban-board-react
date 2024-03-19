
// get nearest item to the cursor form a list of elements
export default function nearestItem(elements, y) {

  return elements.reduce((nearest, element) => {
    const rect = element.getBoundingClientRect();
    const distance = y - rect.top - rect.height / 2;
    if (distance < 0 && distance > nearest.distance) {
      return { element, distance };
    }
    return nearest
  }, { distance: Number.NEGATIVE_INFINITY, element: null }).element;

}
