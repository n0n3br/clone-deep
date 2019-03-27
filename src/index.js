const cloneDeep = value => {
  let response = value;
  if (Array.isArray(response)) {
    response = [...response];
    response.forEach((item, index) => {
      response[index] = cloneDeep(item);
    });
  } else if (typeof response === "object") {
    response = Object.assign({}, response);
    Object.keys(response).forEach(key => {
      response[key] = cloneDeep(response[key]);
    });
  }
  return response;
};
export default cloneDeep;
