import { CategoryItem } from '@/type/category';

const Category = ({
  categoryList,
  activeCategoryId,
  onClick,
}: {
  categoryList: CategoryItem[];
  activeCategoryId: number;
  onClick: (id:number) => void;
}) => {
  return (
    <section>
      <ul>
        {categoryList.map((category) => (
          <li
            className="cursor-pointer hover:bg-pink-100 "
            key={category.id}
            style={{
              background:
                activeCategoryId === Number(category.id) ? 'pink' : '',
            }}
            onClick={() => onClick(Number(category.id))}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
