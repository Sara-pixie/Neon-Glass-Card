function changeNeonColor(event){
    event.preventDefault();
    let colorChoice = document.getElementById(`${this.id}`);
    let style = getComputedStyle(colorChoice);
    let background = style.background;
    var styleElement = document.head.appendChild(document.createElement("style"));
    styleElement.innerHTML = `.card::before {background: ${background}} .card::after {background: ${background}}`;
}
document.getElementById("color_1").addEventListener("click", changeNeonColor);
document.getElementById("color_2").addEventListener("click", changeNeonColor);
document.getElementById("color_3").addEventListener("click", changeNeonColor);