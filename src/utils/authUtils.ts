export const queryStringFromObject = (obj: any, path?: string) =>
  Object.keys(obj)
    .map(x => {
      let queryString = '';
      if (typeof obj[x] === 'object') {
        queryString += `${x}=${encodeURIComponent(
          queryStringFromObject(obj[x])
        )}`;
      } else {
        queryString += `${x}=${obj[x]}`;
      }
      return queryString;
    })
    .join('&');
