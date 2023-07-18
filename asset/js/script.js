//variabel untuk tombol edit form dan form
var tombolHilang = document.getElementById("tombolHilang");
var isiForm = document.getElementById("input-form");

//function untuk tombol menghilangkan dan memunculkan form
tombolHilang.addEventListener("click", function (event) {
  event.preventDefault();

  if (isiForm.classList.contains("hilang")) {
    isiForm.classList.remove("hilang");
    valueHTMLkeForm();
  } else {
    isiForm.classList.add("hilang");
  }
});

//function menampilkan data value html ke dalam form
function valueHTMLkeForm() {
  var nama = document.getElementById("nama").textContent;
  var role = document.querySelector(".role").textContent;
  var availability = document.getElementById("availability").textContent;
  var usia = document.getElementById("usia").textContent;
  var lokasi = document.getElementById("lokasi").textContent;
  var pengalaman = document.getElementById("pengalaman").textContent;
  var email = document.getElementById("email").textContent;

  var formNama = document.getElementById("formNama");
  var formRole = document.getElementById("formRole");
  var formAvailability = document.getElementById("formAvailability");
  var formUsia = document.getElementById("formUsia");
  var formLokasi = document.getElementById("formLokasi");
  var formPengalaman = document.getElementById("formPengalaman");
  var formEmail = document.getElementById("formEmail");

  formNama.value = nama;
  formRole.value = role;
  formAvailability.value = availability;
  formUsia.value = usia;
  formLokasi.value = lokasi;
  formPengalaman.value = pengalaman;
  formEmail.value = email;
}

//variabel tombol submit
var tombolSubmit = document.getElementById("tombolSubmit");

//function untuk memperbaharui isi html sesuai value html yang sudah diisi
tombolSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  var formNama = document.getElementById("formNama");
  var formRole = document.getElementById("formRole");
  var formAvailability = document.getElementById("formAvailability");
  var formUsia = document.getElementById("formUsia");
  var formLokasi = document.getElementById("formLokasi");
  var formPengalaman = document.getElementById("formPengalaman");
  var formEmail = document.getElementById("formEmail");

  document.getElementById("nama").textContent = formNama.value;
  document.querySelector(".role").textContent = formRole.value;
  document.getElementById("availability").textContent = formAvailability.value;
  document.getElementById("usia").textContent = formUsia.value;
  document.getElementById("lokasi").textContent = formLokasi.value;
  document.getElementById("pengalaman").textContent = formPengalaman.value;
  document.getElementById("email").textContent = formEmail.value;

  isiForm.classList.add("hilang");
});
