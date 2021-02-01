export default function littleSwitch(array, index) {
  if (!!array[index].isSelected) {
    return (array[index].isSelected = false);
  } else {
    return (array[index].isSelected = true);
  }
}
