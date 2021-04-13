import { connect } from "http2";
const NoConnection = () => {
    return {
        connect() {

        }
    }
}

class Database {
    createConnection(params) {
        if(params.host) return this;
        return NoConnection();
    }

    connect() {
        console.log('connected!');
    }
}

export default new Database();