export interface DropDown {
  menuName: string;
  list?: string[];
  listWithKeys?: DropDownList[];
}

interface DropDownList {
  key: string;
  value: string;
}
