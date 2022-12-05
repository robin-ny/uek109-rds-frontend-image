function clearTable(){
  document.getElementsByClassName("member-rows")[0].innerHTML = ''
}

function generateTableEntry(member){
  const children = [elt("td",member.firstname),elt("td",member.lastname),elt("td",(member.grade).toString())]
  document.getElementsByClassName("member-rows")[0].appendChild(elt("tr",children))
}

function elt (type, children) {
  let node = document.createElement(type)
  for (let child of children) {
    if (typeof child != "string") node.appendChild(child)
      else node.appendChild(document.createTextNode(child))
    }
  return node
}


const url = "http://localhost:3000/";

function updateTable(e){
  e.preventDefault(); 
  const url = e.currentTarget.action;
  const formData = new FormData(e.currentTarget);
  const plainFormData = Object.fromEntries(formData.entries());
  const data = JSON.stringify(plainFormData);
  e.currentTarget.reset();
  fetch(url+"api/addmember", {
    method: "POST",
    headers: { "Content-type": "application/json", "Accept": "application/json" },
    body: data,
  })

  .then((response) => response.json())
  .then((data) => {
    clearTable()
    data.members.forEach(generateTableEntry)
  })
  .catch((error) => {
    console.error(error);
  });
}
