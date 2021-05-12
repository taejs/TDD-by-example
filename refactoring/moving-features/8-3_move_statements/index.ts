type TPhoto = {
  title: string;
  date: Date;
  location: string;
};

type TPerson = {
  name: string;
  photo: TPhoto;
};

function emitPhotoData(aPhoto: TPhoto) {
  const result = [];
  result.push(`<p>위치 : ${aPhoto.location}</p>`);
  result.push(`<p>날짜 : ${aPhoto.date.toString()}</p>`);

  return result.join("\n");
}

function photoDiv(photo: TPhoto) {
  return [
    "<div>",
    `<p>제목 : ${photo.title}</p>`, //공통
    emitPhotoData(photo),
    "</div>"
  ];
}

function renderFunction(outStream, person: TPerson) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(`<img src="${person.photo}"/>`);
  result.push(`<p>제목 : ${person.photo.title}</p>`); //공통
  result.push(emitPhotoData(person.photo));

  return result.join("\n");
}
