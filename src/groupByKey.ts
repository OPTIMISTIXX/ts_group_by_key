type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const groupedKey = String(item[key]);

    if (!acc[groupedKey]) {
      acc[groupedKey] = [];
    }

    acc[groupedKey].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
