type TStream = {
  write(str: string): void;
};

type TPhoto = {
  title: string;
  date: Date;
  location: string;
};

type TPerson = {
  name: string;
  photo: TPhoto;
};

function renderPhoto(outStream: TStream, photo: TPhoto) {
  outStream.write(`<img src=${photo}>`);
}

function renderPerson(outStream: TStream, person: TPerson) {
  outStream.write(`<p>${person.name}</p>`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}

function recentDateCutoff() {
  return new Date();
}

function listRecentPhotos(outStream: TStream, photos: TPhoto[]) {
  photos
    .filter(p => p.date > recentDateCutoff())
    .forEach(p => {
      outStream.write("<div>\n");
      emitPhotoData(outStream, p);
      outStream.write("</div>\n");
    });
}

function emitPhotoData(outStream: TStream, photo: TPhoto) {
  outStream.write(`<p>제목 : ${photo.title}</p>`);
  outStream.write(`<p>날짜 : ${photo.date.toString()}</p>`);
  outStream.write(`<p>위치 : ${photo.location}</p>`); // 위치 정보에 대해 변경 요청
}
