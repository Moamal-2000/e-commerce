export function isQueryContainedInItem(query, item) {
  const formattedQuery = query?.trim().toLowerCase();
  const formattedItem = item?.toLowerCase();

  return (
    formattedItem.includes(formattedQuery) ||
    formattedItem.startsWith(formattedQuery) ||
    formattedItem.endsWith(formattedQuery)
  );
}

export function searchByObjectKey({ data, key, query }) {
  return data.filter((item) => isQueryContainedInItem(query, item?.[key]));
}
