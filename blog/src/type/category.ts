interface CategoryItem {
  id: string;
  name: string;
  parent: string;
  label: string;
  entries: string;
}

export interface CategoryListResponse {
  tistory: {
    item: {
      categories: CategoryItem[];
    };
  };
}
