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
  tempPhotoData(outStream, person.photo);
  outStream.write(`<p>위치 : ${person.photo.location}</p>`); // 위치 정보에 대해 변경 요청
}

function recentDateCutoff() {
  return new Date();
}

function listRecentPhotos(outStream: TStream, photos: TPhoto[]) {
  photos
    .filter(p => p.date > recentDateCutoff())
    .forEach(p => {
      outStream.write("<div>\n");
      tempPhotoData(outStream, p);
      outStream.write(`<p>위치 : ${p.location}</p>`); // 위치 정보에 대해 변경 요청
      outStream.write("</div>\n");
    });
}

function tempPhotoData(outStream: TStream, photo: TPhoto) {
  // 이동하지 않을 코드
  outStream.write(`<p>제목 : ${photo.title}</p>`);
  outStream.write(`<p>날짜 : ${photo.date.toString()}</p>`);
}
