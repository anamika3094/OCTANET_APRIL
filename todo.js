document.addEventListener("DOMContentLoaded", function() {
    const ip = document.getElementById("ip");
    const list = document.getElementById("list");

    function add() {
        if (ip.value === '') {
            alert("YOU MUST WRITE SOMETHING!");
        } else {
            let li = document.createElement("li");
            li.innerHTML = '<i class="ri-checkbox-blank-circle-line"></i>' + ip.value;
            list.appendChild(li);

            let span = document.createElement('span');
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        ip.value = "";
    }

    document.querySelector("button").addEventListener("click", add);

    list.addEventListener("click", function(e) {
        if (e.target.tagName === "LI" || e.target.tagName === "I") {
            const listItem = e.target.tagName === "LI" ? e.target : e.target.parentElement;
            listItem.classList.toggle("checked");
            const icon = listItem.querySelector("i");
            icon.classList.toggle("ri-checkbox-blank-circle-line");
            icon.classList.toggle("ri-checkbox-circle-line");
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
        }
    });
});