export default function idStringConverter(obj: { [key: string]: any }) {
  const newObj: { [key: string]: any } = {};
  for (let prop in obj) {
    if (/.*(_id$|_id_).*/.test(prop)) {
      newObj[prop] = Number(obj[prop]);
    } else {
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
}
