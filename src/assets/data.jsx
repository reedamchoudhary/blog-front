import axios from "axios";

const Data = (setData) => {
  axios
    .get("https://rhythmdev-f2352-default-rtdb.firebaseio.com/blog.json")
    .then((response) => {
      var arrResponse = Object.values(response.data).map((key) => {
        return key;
      });
      setData(arrResponse);
    });
};

export default Data;
