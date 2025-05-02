function toggleEdit() {
  const elements = document.querySelectorAll('.editable');
  elements.forEach(el => {
    if (el.isContentEditable) {
      el.contentEditable = "false";
    } else {
      el.contentEditable = "true";
    }
  });
}
