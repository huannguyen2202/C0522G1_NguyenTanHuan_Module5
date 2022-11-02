export interface PageResult<T> {
  content: T[];
  // pagination: {
  //   totalPages: number,
  //   size: number,
  // };
  totalElements: number;
}
