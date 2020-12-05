export default interface CommonEntity {
  id: number;
  name: string;
  items?: CommonEntity[];
}
