
export const ErrorMessages = {
  partial: "#ERR",
  divideByZero: "#DIV/0!",
  invalidCell: "#REF!",
  invalidFormula: "#ERR",
  invalidNumber: "#ERR",
  invalidOperator: "#ERR",
  missingParentheses: "#ERR",
  emptyFormula: "#EMPTY!", // this is not an error message but we use it to indicate that the cell is empty
  sqrtByNegative: "#NEGUNDER√", // new error type for sqrt negative number
  tan90: "#ERR",
  negativeRoot: "#ERR",
  asin:"#ERR",

}

export const ButtonNames = {
  edit_toggle: "edit-toggle",
  edit: "edit",
  done: "=",
  allClear: "AC",
  clear: "C",
}


export interface CellTransport {
  formula: string[];
  value: number;
  error: string;
  editing: string;
}
export interface UserEditing {
  userName: string;
  cellLabel: string;
}
export interface CellTransportMap {
  [key: string]: CellTransport;
  
}
export interface DocumentTransport {
  columns: number;
  rows: number;
  cells: Map<string, CellTransport>;
  formula: string;
  result: string;
  currentCell: string;
  isEditing: boolean;
  contributingUsers: UserEditing[];
}

