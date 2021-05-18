type TPhoto = {
  title: string;
  date: Date;
  location: string;
};

type TPerson = {
  name: string;
  photo: TPhoto;
};

function photoDiv(photo: TPhoto) {
  return ["<div>", emitPhotoData(photo), "</div>"];
}

function renderFunction(outStream, person: TPerson) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(`<img src="${person.photo}"/>`);
  result.push(emitPhotoData(person.photo));

  return result.join("\n");
}

function emitPhotoData(photo: TPhoto) {
  return [
    `<p>제목 : ${photo.title}</p>`, //공통
    `<p>위치 : ${photo.location}</p>`,
    `<p>날짜 : ${photo.date.toString()}</p>`
  ].join("\n");
}
