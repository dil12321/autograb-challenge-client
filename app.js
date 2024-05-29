const MODELS = {
 "Ford": {
  "Ranger": ["Raptor", "Raptor x", "Wildtrak"],
  "Falcon": ["XR6", "XR6 Turbo", "XR8"],
  "Falcon Ute": ["XR6", "XR6 Turbo"],
 },
 "BMW": {
  "130d": ["xDrive 26d", "xDrive 30d"],
  "240i": ["xDrive 30d", "xDrive 50d"],
  "320e": ["xDrive 75d", "xDrive 80d", "xDrive 85d"],
 },
 "Tesla": {
  "Model 3": ["Performance", "Long Range", "Dual Motor"],
 },
}

window.onload = function() {
  var make_dropdown = document.getElementById("make")

  addDropdownOptions(make_dropdown, "make", Object.keys(MODELS))
  hideBelowMake()
};

function onMakeChange(value) {
  var model_dropdown = document.getElementById("model")

  addDropdownOptions(model_dropdown, "model", Object.keys(MODELS[value]))

  model_dropdown.style.display = "block";
  hideBelowModel()
}

function onModelChange(value) {
  var make_dropdown = document.getElementById("make")
  var badge_dropdown = document.getElementById("badge")
  var current_make = make_dropdown.value

  addDropdownOptions(badge_dropdown, "badge", MODELS[current_make][value])

  badge_dropdown.style.display = "block";
  hideUploader()
}

function onBadgeChange() {
  var uploader = document.getElementById("uploader")
  uploader.style.display = "block";
}

function hideBelowMake() {
  var model_dropdown = document.getElementById("model")
  model_dropdown.style.display = "none";

  hideBelowModel()
}

function hideBelowModel() {
  var badge_dropdown = document.getElementById("badge")
  badge_dropdown.style.display = "none";

  hideUploader()
}

function hideUploader() {
  var uploader = document.getElementById("uploader")
  uploader.style.display = "none";
}

function setInfo(make, model, badge) {
  var make_dropdown = document.getElementById("make")
  var model_dropdown = document.getElementById("model")
  var badge_dropdown = document.getElementById("badge")

  make_dropdown.value = make
  onMakeChange(make)

  model_dropdown.value = model
  onModelChange(model)

  badge_dropdown.value = badge
  onBadgeChange()
}

function clearDropdown(dropdown) {
  while (dropdown.options.length > 0) {                
    dropdown.remove(0);
  } 
}

function addDropdownOptions(dropdown, header, options) {
  clearDropdown(dropdown)

  // Add header
  var title_option = document.createElement("option");
  title_option.text = header
  title_option.disabled = true
  title_option.selected = true
  dropdown.appendChild(title_option);

  // Add options
  for (const i of options) {
    opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;
    dropdown.appendChild(opt);
  }
}
