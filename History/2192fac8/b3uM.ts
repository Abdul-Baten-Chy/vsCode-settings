import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;
  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }
  search(searchavleField: string[]) {
    const searchTerm = this?.query?.searchTerm;
    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchavleField.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: 'i' },
            } as FilterQuery<T>)
        ),
      });
    }
    return this;
  }

  filter() {
    const modifiedQuery = { ...this.query };
    const excludedField = ['searchTerm', 'sort'];
    excludedField.forEach((element) => {
      delete modifiedQuery[element];
    });
    this.modelQuery = this.modelQuery.find(modifiedQuery as FilterQuery<T>);
  }
}
export default QueryBuilder;
