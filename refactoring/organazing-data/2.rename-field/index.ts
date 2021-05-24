class Organization {
  _title: string;
  _country: string;
  constructor(data) {
    this._title = data.name;
    this._country = data.country;
  }
  get title() {
    return this._title;
  }
  set title(aString) {
    this._title = aString;
  }
  get country() {
    return this._country;
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}

const organization = new Organization({
  title: "애크미 구스베리",
  country: "GB"
});

// 널리 참조되는 경우 중간 과정을 거쳐 수정한다.
// 리팩토링 중 테스트에 실패한다면 더 작은 단위로 쪼개야 한다.
