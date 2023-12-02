"use strict";

function handleSubmit() {
  // lấy giá trị của input email và chuyển sang in thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();

  // lấy element của thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");

  // điều kiện để là 1 email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // dùng match để check vs email vừa nhập
  const checkMail = emailValue.match(regex);

  // lấy phần chứa thông tin user
  const sectionContent = document.querySelector(
    "#personal-info .section-content"
  );
  console.log("check section", sectionContent);
  // lấy element để kiểm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (checkMail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Nhập đúng định dạng Email 🥶";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.classList.remove("hidden");
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.classList.add("hidden");
}

function handleViewmoreClick(element) {
  const viewMore = element.querySelector(".view-more");
  const jobContent = element.parentElement.querySelector(".job-content");
  jobContent.classList.toggle("d-none");
  if (jobContent.classList.contains("d-none")) {
    viewMore.textContent = "View More";
  } else {
    viewMore.textContent = "View Less";
  }
}
