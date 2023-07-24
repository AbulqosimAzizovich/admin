const stdBtn = document.getElementById("std_btn");
const modal = document.getElementById("modal");
const blur = document.getElementById("blur");
const closeMd = document.getElementById("close_md");
const post = document.getElementById("post");
const name_st = document.getElementById("name_st");
const email_st = document.getElementById("email_st");
const phone_st = document.getElementById("phone_st");
const enroll_st = document.getElementById("enroll_st");

const send = document.getElementById("send");
const edit = document.getElementById("edit");

const name_st1 = document.getElementById("name_st1");
const email_st1 = document.getElementById("email_st1");
const phone_st1 = document.getElementById("phone_st1");
const enroll_st1 = document.getElementById("enroll_st1");
const post1 = document.getElementById("post1");
const send1 = document.getElementById("send1");
const closeMd1 = document.getElementById("close_md1");

const baseUrl = "https://64b9310179b7c9def6c0bc1f.mockapi.io/api/v1/admin";

function createElement(element, classList, content) {
  const newElement = document.createElement(element);

  if (classList) {
    newElement.setAttribute("class", classList);
  }

  if (content) {
    newElement.innerHTML = content;
  }

  return newElement;
}

stdBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  blur.classList.remove("hidden");
  document.body.style.overflowY = "hidden";
});

closeMd.addEventListener("click", () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
  document.body.style.overflowY = "scroll";
});

closeMd1.addEventListener("click", () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
  document.body.style.overflowY = "scroll";
});

blur.addEventListener("click", () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
  document.body.style.overflowY = "scroll";
});

send.addEventListener("click", () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
  document.body.style.overflowY = "scroll";
});

send1.addEventListener("click", () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
  document.body.style.overflowY = "scroll";
});

const writem = document.getElementById("wrapper_item");

async function getPost() {
  try {
    const response = await fetch(`${baseUrl}`);
    const result = await response.json();

    renderData(result);
  } catch {
    console.log("Error!!!");
  } finally {
    console.log("done");
  }
}

getPost();

function renderData(data) {
  let res = "";
  if (data.length) {
    data.map((element) => {
      res += ` 
                 <div class="flex justify-center items-center gap-[125px] relative h-[85px]">
                  <p class="text-[14px] font-normal text-black">${element.name}</p>
                  <p class="text-[14px] font-normal text-black">${element.email}</p>
                  <p class="text-[14px] font-normal text-black">${element.phone}</p>
                  <p class="text-[14px] font-normal text-black">${element.enroll}</p>
                  <p class="text-[14px] font-normal text-black">${element.date}</p>

                  <div class="flex items-center gap-[33px] absolute right-[34px]">
                    <img class="edit-btn hover:bg-gray-400 w-6 h-6 p-1" data-edit="${element.id}" src="./src/assets/images/edit.svg " alt="Edit">
                    <img class="delete-btn hover:bg-gray-400 w-6 h-6 p-1" data-del="${element.id}" src="./src/assets/images/delete.svg" alt="Delete">
                  </div>
                </div>
            `;
    });
  }
  writem.innerHTML = res;
}

// ${
//                       (editPost(element.id),
//                       () => {
//                         edit.classList.remove("hidden");
//                       })
//                     }

function createPost() {
  const newPost = {
    name: name_st.value,
    email: email_st.value,
    phone: phone_st.value,
    enroll: enroll_st.value,
    date: new Date().toJSON(),
  };

  if (
    !(
      newPost.name.trim().length &&
      newPost.email.trim().length &&
      newPost.phone.trim().length &&
      newPost.enroll.trim().length
    )
  ) {
    alert("Please enter a title");
  } else {
    fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
  }
}

post.addEventListener("submit", (e) => {
  e.preventDefault();
  createPost();
});


function deletePost(id) {
  if (id) {
    fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
  }
  
  
}

writem.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("delete-btn")) {
    const id = e.target.getAttribute("data-del");
    deletePost(id);
  }
});

let nm = "";
let em = "";
let ph = "";
let enr = "";

$(".wrapper").addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const id = e.target.getAttribute("data-edit");
    nm = prompt("Enter new name");
    em = prompt("Enter new email");
    ph = prompt("Enter new phone");
    enr = prompt("Enter new enroll");

    editPost(id);
  }
});

function editPost(id) {
  const newPost = {
    name: nm,
    email: em,
    phone: ph,
    enroll: enr,
    date: new Date().toJSON(),
  };
  if (
    !newPost.name.trim().length &&
    newPost.email.trim().length &&
    newPost.phone.trim().length &&
    newPost.enroll.trim().length
  ) {
    alert("Please enter a title");
  } else {
    fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
  }
}
const click = document.querySelector("btn-click");

// click.addEventListener("click", () => {

//   console.log("bosildi");
// });
